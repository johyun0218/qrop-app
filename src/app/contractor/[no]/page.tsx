import LeftMenu from '@/components/LeftMenu';
import React from 'react';
import Image from 'next/image';
import Feed from '@/components/Feed';
import RightMenu from '@/components/RightMenu';

const ContractorPage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">현대 인테리어</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">1234</span>
                <span className="text-sm">1234</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1234</span>
                <span className="text-sm">1234</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">14</span>
                <span className="text-sm">Workings</span>
              </div>
            </div>
          </div>
        </div>
        <Feed />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId={'test'} />
      </div>
    </div>
  );
};

export default ContractorPage;
