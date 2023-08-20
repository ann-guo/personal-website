import { NavLink } from "@remix-run/react";
import { useState } from "react";
import Toggle from "./Toggle";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen((previous) => !previous);
    };

    return (
        
        <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2 bg-gray-100 dark:bg-true-gray-700">
            <div className="flex items-center justify-between px-4 py-2 sm:p-0">
                
                <div className="flex justify-between items-center">
                <NavLink to="/" className="">
                <div className="px-4 lg:px-8">
                <a class="group text-3xl text-gray-900 dark:text-white font-bold" href="#">
                    <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                        AG
                    </span>
                </a>
                </div>
                </NavLink>
                    <button
                        type="button"
                        className="focus:text-gray-800 hover:text-primary sm:hidden"
                        onClick={handleClick}
                    >
                        <svg
                            className="fill-current h-6 w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            )}
                            <title>Menu</title>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="px-4 pb-2 items-center flex">
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } sm:flex sm:justify-between sm:p-0 sm:text-lg`}
                >
                    <NavLink to="/blog" className="block py-2 sm:ml-4">
                    <a class="group" href="#">
  <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Blog
  </span>
</a>
                    </NavLink>
                    
                    
                    <div class="pl-5 pt-2"> <Toggle></Toggle> </div>
                </div>
            </div>
        </header>
        
    )
}