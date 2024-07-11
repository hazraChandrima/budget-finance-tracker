import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div>
            <section className="bg-primary text-white flex items-center flex-col">
                <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex  lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Take Control of Your Finances.

                            <span className="sm:block"> Manage your Money. </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                             Track expenses effortlessly, manage budgets, and achieve financial goals easily, with MoneyMaster.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-teal-700 bg-teal-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/sign-in"
                            >
                                Get Started
                            </a>

                        </div>
                    </div>
                </div>
                <Image src='/dashboard.png' alt='dashboard' width={1150} height={700} className='-mt-9 rounded-xl border-2' />
            </section>
        </div>
    )
}

export default Hero
