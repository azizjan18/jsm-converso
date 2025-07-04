
import React from 'react'
import CompanionCard from "@/components/ui/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {

    const companions = await getAllCompanions({limit:3});
    const recentSessionsCompanions = await getRecentSessions({limit: 4});
  return (
    <main>
      <h1 > Popular Companions</h1>
      <section className='home-section'>

          {companions?.map((companion)=>(
              <CompanionCard
                  key={companion.id}
                  {...companion}
                  color={getSubjectColor(companion.subject)}
              />
          ))}





      </section>
        <section className='home-section'>
            <CompanionsList
            title="recently completed sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
      </main>
    
  )
}

export default Page