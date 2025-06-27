import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Navitems from "@/components/ui/Navitems";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/' >
      <div className='flex items-center gap-2.5 cursor-pointer'>

        <Image src={'/images/logo.svg'}
        alt={'logo'} width={65} height={65}
        />

      </div>
      </Link>
        <div className='flex items-center gap-8'>
          <Navitems/>
          <SignedOut>
            <SignInButton >

            </SignInButton>
            <button className="btn-signin">sign in</button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

    </nav>
  )
}

export default Navbar
