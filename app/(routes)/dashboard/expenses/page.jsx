"use client"
import React ,{useState, useEffect} from 'react'
import ExpenseListTable from './_components/ExpenseListTable'
import { Expenses, Budgets } from '@/utils/schema'
import { db } from '@/utils/dbConfig'
import { eq, getTableColumns, sql, desc } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'



function ExpensePage() {


    const { user } = useUser();
    const [expensesList, setExpensesList]=useState([]);
    const [budgetList, setBudgetList] = useState([]);

    useEffect(() => {
        user && getBudgetList();
      }, [user])

    // used to get Budget List
    const getBudgetList = async () => {

        const result = await db.select({
          ...getTableColumns(Budgets),
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
          .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
          .groupBy(Budgets.id)
          .orderBy(desc(Budgets.id));
    
          setBudgetList(result);
          getAllExpenses();
    
      }


        //used to fetch all expenses belonging to user
      const getAllExpenses=async()=>{
        const result=await db.select({
          id:Expenses.id,
          name:Expenses.name,
          amount:Expenses.amount,
          createdAt:Expenses.createdAt
        }).from(Budgets)
        .rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(Expenses.id));
    
        setExpensesList(result);
        console.log(result);
      }

  return (
    <div>
        <div className='mt-4 mx-4 p-7 gap-5'>
                <ExpenseListTable expensesList={expensesList} 
                refreshData={()=>getBudgetList()}/>
            </div>
    </div>
  )
}

export default ExpensePage
