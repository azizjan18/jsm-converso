import React from 'react'
import {getCompanion} from "@/lib/actions/companion.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getSubjectColor} from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/ui/CompanionComponent";

interface  CompanionSessionPageProps{
  params:Promise<{ id: string }>
}

const companionSession = async ({params}:CompanionSessionPageProps) => {
  const {id} = await params
  const companion= await getCompanion(id)
  const user = await currentUser()
    const {name,subject,duration,topic,title} = companion;
  if (!user) redirect(('/sign-in'));
  if(!name) redirect(('/companions'))




    return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
          <div className='flex items-center gap-2'>
            <div className="size-[72px] flex item-center justify-center rouded-lg max-md:hidden"
            style={{backgroundColor:getSubjectColor(subject)}}>
                <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35}/>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">
                  {name}
                </p>
                <div className="subject-badge max-sm:hidden">
                  {subject}
                </div>

              </div>
              <p className="text-lg">{topic}</p>
            </div>

          </div>
        <div className="items-start text-2xl max-md:hidden">
          {duration} minutes
        </div>
      </article>
      <CompanionComponent
          {...companion}
          companionId={id}
          userName={user.firstName!}
          userImage={user.imageUrl!}
      />
    </main>
  )
}

export default companionSession