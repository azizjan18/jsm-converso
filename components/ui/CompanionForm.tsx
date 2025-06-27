
"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(1, {message:'name is required'}),
  subject: z.string().min(1, {message:'subject is required'}),
  topic: z.string().min(1, {message:'topic is required'}),
  voice: z.string().min(1, {message:'voice is required'}),
  style: z.string().min(1, {message:'style is required'}),
  duration: z.coerce.number().min(1, {message:'duration is required'}),
})

import React from 'react';
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject:"",
      topic:"",
      voice:"",
      style:"",
      duration:15,
    },
  })

  // 2. Define a submit handler.
  const onSubmit= async (values: z.infer<typeof formSchema>)=> {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const companion = await createCompanion(values)
      if (companion) {
          redirect(`/companions/${companion.id}`)
      }
      else {
          console.log('failed to create companion')
          redirect('/')
      }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Companion Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter The Companion Name"
                             {...field}
                      className="input "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
              )}
          />


            <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Companion subject</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input capitalize ">
                                    <SelectValue placeholder="select object" />
                                </SelectTrigger>
                                <SelectContent className="mb-8">
                                    {subjects.map((subject)=>(
                                        <SelectItem value={subject}
                                                    key={subject}
                                                    className="capitalize"
                                        >
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>What Should The Companion Help With </FormLabel>
                        <FormControl>
                            <Textarea placeholder="EX: Derivtives && Integrals"
                                   {...field}
                                   className="input "
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Companion voice</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input  ">
                                    <SelectValue placeholder="select voice" />
                                </SelectTrigger>
                                <SelectContent >
                                   <SelectItem value="male">
                                       male
                                   </SelectItem>

                                    <SelectItem value="female">
                                        Female
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />



            <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Style</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input  ">
                                    <SelectValue placeholder="select The Style" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="formal">
                                        formal
                                    </SelectItem>

                                    <SelectItem value="casual">
                                        casual
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Estimated session Duration in minutes</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                placeholder="15"
                                   {...field}
                                   className="input "
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />



          <Button type="submit" className="w-full pointer-cursor">Build Your Companion</Button>
        </form>
      </Form>
    </div>
  );
};

export default CompanionForm;