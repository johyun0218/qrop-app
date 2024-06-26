import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import { MEMBER_COMPANY_STATUS } from '@prisma/client';
import Image from 'next/image';
import MemberCompanyList from './MemberCompanyList';

const MemberCompanys = async () => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) return null;

  const memberCompanys = await prisma.memberCompany.findMany({
    where: {
      status: {
        in: [MEMBER_COMPANY_STATUS.OK],
      },
    },
  });
  // console.log('🚀 ~ Stories ~ memberCompanys:', memberCompanys);

  return (
    <div className="p-4 bg-white rounded-lg shdow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex  gap-8 w-max">
        {/* Member List */}
        <MemberCompanyList
          memberCompanys={memberCompanys}
          userId={currentUserId}
        />
      </div>
    </div>
  );
};

export default MemberCompanys;
