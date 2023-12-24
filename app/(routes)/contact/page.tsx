"use client"
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import Socials from '@/components/Socials';
import Image from 'next/image';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useRef();
  const handleSubmit = async () => {
    setLoading(true);
    await emailjs.sendForm(
      'service_t6b4h7r',
      'template_ae4vpth',
      //@ts-ignore
      form.current,
      'gif7qAkQyKnauz90B')
      .then((result) => {
        console.log(result.text);
        router.push('/projects');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="my-20 bg-white text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-gray-700">Contact me</h1>
          <p className="mt-2 mb-10 pl-1 text-gray-700">Fill in the form to start a conversation</p>
          <div className="space-y-4 pl-1">
            <Socials />
          </div>
          <Image
            src="/message.png"
            alt="Skills Image"
            width={250}
            className='mt-8'
            height={250} />
        </div>
        <form className="flex flex-col py-6 gap-3 md:py-0 md:px-6"
          //@ts-ignore
          ref={form}>
          <label className=" text-gray-800 pl-1">Name or Organization</label>
          <input type="text" name="user_name" placeholder="John" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
          <label className=" text-gray-800 pl-1">Email</label>
          <input type="email" name="user_email" placeholder="john@gmail.com" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
          <label className=" text-gray-800 pl-1">Subject</label>
          <input type="text" name="subject" placeholder="Have a job offer" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
          <label className=" text-gray-800 pl-1">Message</label>
          <input type="text" name="message" placeholder="Hi, there" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
          <button type="button" onClick={handleSubmit} className="self-center mt-4 bg-gray-900 text-white py-2 px-5 rounded-md hover:bg-gray-700">{loading ? <Loader text={"Connecting"} /> : "Connect"}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact