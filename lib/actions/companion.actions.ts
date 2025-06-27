"use server"
import {auth} from "@clerk/nextjs/server";
import {createSupaBaseClient} from "@/lib/spabase";

export const createCompanion = async (formData:CreateCompanion)=>{
    const {userId:author} = await auth();
    const supabase = createSupaBaseClient();

    const {data,error} = await supabase
        .from( 'companions').insert({...formData,author}).select();

    if (error||!data) throw new Error(error?.message||'failed to create companion')
    return data[0];

}