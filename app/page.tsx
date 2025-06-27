
import React from 'react'
import CompanionCard from "@/components/ui/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 > Popular Companions</h1>
      <section className='home-section'>
          <CompanionCard
          id='123'
          name='Neura The Brainy Explorer'
          topic='Neural Network Of The Brain'
          subject='Science'
          duration={45}
          color='#ffda6e'
          />

          <CompanionCard
              id='456'
              name='Countsy the number wizard'
              topic='Deravities and integrals '
              subject='maths'
              duration={30}
              color='#e5d0ff'
          />

          <CompanionCard
              id='789'
              name='Verba the vocabulary builder '
              topic='English literature'
              subject='English'
              duration={30}
              color='#7aa9f5'
          />

      </section>
        <section className='home-section'>
            <CompanionsList
            title="recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
      </main>
    
  )
}

export default Page