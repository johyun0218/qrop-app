import React from 'react';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import BidForm from '@/components/bid/BidForm';
import prisma from '@/lib/client';
import { CompanyBranchQuery } from '@/lib/companyBranch/companyBranchQuery';

const BidAddPage = async () => {
  const companys = await prisma.company.findMany({
    where: {
      useYn: 'Y',
    },
  });

  const branchResponse = await new CompanyBranchQuery().branchFindAll();
  console.log('🚀 ~ BidAddPage ~ branchResponse:', branchResponse);

  return (
    <div className="flex gap-6 pt-6">
      <div className="w-full xl:w-[70%]">
        <BidForm companys={companys} branchResponse={branchResponse} />
      </div>
      <div className="hidden xl:block lg:w-[30%]">
        <RightMenu userId={'test'} />
      </div>
    </div>
  );
};

export default BidAddPage;
