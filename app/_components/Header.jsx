"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {

    const { user, isSignedIn } = useUser();
    return (
        <>
            <div className=' p-5 flex justify-between items-center shadow-md bg-secondary '>

                <Image src={'./logo.svg'} alt='logo' width={50} height={50} />
                {isSignedIn ? <UserButton /> : <Link href={'/sign-in'}><Button className="bg-destructive font-black">Get Started</Button></Link>}



            </div>
        </>
    )
}

export default Header
