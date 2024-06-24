import Image from 'next/image';
import React from 'react';

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26246120/pexels-photo-26246120.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            className="bg-transparent outline-none flex-1"
            placeholder="Write comment.."
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATA */}
        <Image
          src="https://images.pexels.com/photos/26246120/pexels-photo-26246120.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        {/* DESC */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Bernice Spencer</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet
            consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum
            dolor sit amet consectetur,
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/* ICON */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
