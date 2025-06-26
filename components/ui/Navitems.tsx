
'use client'
import Link from "next/link";
import {cn} from "@/lib/utils";

const navItems =[
    { label: 'Home',href:'/' },
    { label: 'companions',href:'/companions'},
    {label: 'My Journey',href:'/my-journey'},
]

import React from 'react';
import {usePathname} from "next/navigation";

const Navitems = () => {
    const pathName=usePathname()
  return (
    <nav className='flex items-center gap-4'>
      {navItems.map(({label,href}) =>(
          <Link href={href}
                key={label}
                className={cn(pathName === href && 'text-primary font-semibold')}>
            {label}
          </Link>
      ))}
    </nav>
  );
};

export default Navitems;