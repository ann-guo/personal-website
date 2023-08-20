import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";


export default function Card({title, text, link, list}) {

    //external link from heroicons.com
    return (
      <div class="bg-gray-100 p-7 text-slate-900 dark:text-white dark:bg-true-gray-700 flex flex-col justify-between h-full hover:translate-y-[-5px] transition-transform">
        <div>
          <h2 class="text-xl font-semibold mb-2">{title}</h2>
          <p class="text-left">{text}</p>
          {list && list.length > 0 && (
            <ul className="mt-4 text-left list-none">
              {list.map((item, index) => (
                <li key={index} className="inline-block mr-4 text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
  
        <div class="pb-2 pt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  
}