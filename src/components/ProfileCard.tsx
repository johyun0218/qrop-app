import Image from 'next/image';
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/17192407/pexels-photo-17192407.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/26536456/pexels-photo-26536456.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute object-cover left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="p-2 flex flex-col items-center gap-2">
        <span className="font-semibold">세아 인테리어</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/26536456/pexels-photo-26536456.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/26536456/pexels-photo-26536456.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/26536456/pexels-photo-26536456.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">500 Works</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
