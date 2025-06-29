import React from 'react'
import CompanionForm from "@/components/ui/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

export default async function  NewCompanion   ()  {
    const {userId} = await auth()
    if (!userId) redirect('/sign-in')

    const canCreateCompanion = await newCompanionPermissions()

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 justify-center items-center">
        {canCreateCompanion?(<article className="w-f gap-4 flex flex-col">
        <h1>Companion Builder </h1>
        <CompanionForm/>
      </article>): (
          <article className='companion-limit'>
                <Image src='/images/limit.svg' alt="companion limit reached"
                       width={360} height={260}/>
              <div className="cta-badge">
                    Upgrade Your Plan
              </div>
              <h1>You Have Reached Your Limit </h1>
              <p>Upgrade To Create More Companion <br/>
              And Access Premium Features</p>
              <Link href='/subscription' className="btn-primary
              w-full justify-center"> Upgrade MY Plan</Link>
          </article>
            )}
    </main>
  )
}



