"use client"
import Image from "next/image";

const Navbar = () => {
    return(
         <nav
                className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a className="flex items-center">
                        <Image src="/logo1.png" width={90} height={100} className="h-10 mr-3 top-2 left-2"
                               alt="Xero Codee"/>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button"
                                className="text-white bg-transparent text-white-500 font-semibold hover:text-white px-6 py-4 border border-white-5 hover:border-white rounded-2xl ">
                            XEROCODEE
                        </button>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar