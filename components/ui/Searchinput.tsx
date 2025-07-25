'use client'
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SearchInput = () => {
    const  pathName=usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('topic')||'';
    const [searchQuery,setSearchQuery]=useState('')
    useEffect(()=>{
        const delayDebounceFn = setTimeout(()=>{
            if(searchQuery){
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, {scroll: false});
            } else{
                if(pathName === '/companions'){
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        },3000)

    },[searchQuery,pathName,router,searchParams]);
  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
        <Image src='/icons/search.svg' alt={'search'} width={15} height={15}/>
        <input placeholder="search companions...."
               className="outline-none"
               value={searchQuery}
               onChange={(e)=>setSearchQuery(e.target.value)}

        />


    </div>
  );
};

export default SearchInput;