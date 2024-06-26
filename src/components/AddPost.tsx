import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';

const AddPost = () => {
  const { userId } = auth();
  const testAction = async (formData: FormData) => {
    'use server';
    const desc = formData.get('desc') as string;
    console.log('🚀 ~ testAction ~ desc:', userId, desc);
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATA */}
      <Image
        src="https://images.pexels.com/photos/25745312/pexels-photo-25745312.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST */}
      <form action={testAction} className="flex gap-4">
        <div className="flex-1">
          {/* TEXT INPUT */}
          <div className="flex gap-4">
            <textarea
              name="desc"
              placeholder="What's on your mind?"
              className="flex-1 bg-slate-100 rounded-lg p-2"
            ></textarea>
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          </div>
          {/* POST OPTIONS */}
          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addimage.png" alt="" width={20} height={20} />
              Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addVideo.png" alt="" width={20} height={20} />
              Video
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/poll.png" alt="" width={20} height={20} />
              Poll
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addevent.png" alt="" width={20} height={20} />
              Event
            </div>
          </div>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default AddPost;
