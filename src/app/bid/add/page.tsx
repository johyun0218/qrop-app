import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import BidForm from '@/components/bid/BidForm';
import React from 'react';

const BidAddPage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="w-full xl:w-[70%]">
        <BidForm />
      </div>
      <div className="hidden xl:block lg:w-[30%]">
        <RightMenu userId={'test'} />
      </div>
    </div>
  );
};

export default BidAddPage;
