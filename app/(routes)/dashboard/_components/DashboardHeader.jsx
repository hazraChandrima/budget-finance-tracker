"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useEffect }  from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


function DashboardHeader() {

  const menuList = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'Budgets',
        path: '/dashboard/budgets'
    },
    {
        id: 3,
        name: 'Expenses',
        path: '/dashboard/expenses'
    },
    {
        id: 4,
        name: 'Financial Tips',
        path: '/dashboard/financial-tips'
    }
]

const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [path])

  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      <div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon className='h-10 w-10 '/></DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-teal-100">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className='mt-5 w-40 hover:text-secondary '>
                {menuList.map((menu, index) => (
                    <Link href={menu.path}><DropdownMenuItem >
                        <h2 className={`flex gap-2 items-center w-40 font-bold p-1 cursor-pointer rounded-md 
            ${path == menu.path && 'text-black bg-slate-100 w-40'}`}>
                            {menu.name}
                        </h2>
                        </DropdownMenuItem>
                    </Link>
                ))}
            </div>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
      <div>
        <UserButton />
      </div>

    </div>
  )
}

export default DashboardHeader
