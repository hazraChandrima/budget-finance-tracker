"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React,  { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo'
import {Expenses, Budgets} from '@/utils/schema'
import {db} from '@/utils/dbConfig'
import { eq, getTableColumns, sql, desc } from 'drizzle-orm'


function Dashboard() {

  const {user}= useUser();

  const [budgetList, setBudgetList]=useState([]);

    useEffect(()=>{
        user&&getBudgetList();
    },[user])


    // used to get Budget List
    const getBudgetList=async()=>{

        const result= await db.select({
            ...getTableColumns(Budgets),
            totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql `count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));
        setBudgetList(result);

    }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.fullName}✌</h2>
      <p className='text-gray-500'>Here's what's happening with your money, Let's manage your expenses</p>

      <CardInfo budgetList={budgetList}/>

    </div>
  )
}

export default Dashboard
