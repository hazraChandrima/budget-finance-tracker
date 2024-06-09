"use client"
import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Financial Tips',
            icon: ShieldCheck,
            path: '/dashboard/financial-tips'
        }
    ]

    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <div className='h-screen p-5 bg-primary border shadow-sm'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={50} />

            <div className='mt-5'>
                {menuList.map((menu, index) => (
                    <Link href={menu.path}>
                        <h2 className={`flex gap-2 items-center text-gray-200 font-medium mb-2 p-5 cursor-pointer rounded-md 
            hover:text-white hover:bg-secondary ${path == menu.path && 'text-white bg-secondary'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className='fixed bottom-10 p-5 flex gap-2 items-center  text-gray-200'>
                <UserButton /> Profile
            </div>
        </div>
    )
}

export default SideNav
