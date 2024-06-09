import { SignUp } from "@clerk/nextjs";
import Image from 'next/image'


export default function Page() {
    return (
    
        <section className = "bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="#">
                                <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
                                
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to MoneyMaster
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                         MoneyMaster helps you effortlessly track expenses, manage budgets, and reach your financial goals.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                        <a className="block text-white" href="#">
                                <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
                                
                        </a>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to MoneyMaster
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                            MoneyMaster helps you effortlessly track expenses, manage budgets, and reach your financial goals.

                            </p>
                        </div>

                        <SignUp />
                    </div>
                </main>
            </div>
</section>
  )
   
}