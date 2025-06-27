import React from 'react'
import CompanionForm from "@/components/ui/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export  default async function  NewCompanion  ()  {
    const {userId} = await auth()
    if (!userId) redirect('/sign-in')
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 justify-center items-center">
      <article className="w-f gap-4 flex flex-col">
        <h1>Companion Builder </h1>
        <CompanionForm/>
      </article>
    </main>
  )
}

