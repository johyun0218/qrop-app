'use client';
import { MemberCompany } from '@prisma/client';
import { useOptimistic, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MemberCompanyWithUser = MemberCompany;

const MemberCompanyList = ({
  memberCompanys,
  userId,
}: {
  memberCompanys: MemberCompanyWithUser[];
  userId: string;
}) => {
  const [optimisticMemberCompanys, addOptimisticStory] = useOptimistic(
    memberCompanys,
    (state, value: MemberCompanyWithUser) => [value, ...state],
  );

  return (
    <>
      {optimisticMemberCompanys.map((memberCompany) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={memberCompany.no}
        >
          <Link href={`/contractor/${memberCompany.no}`}>
            <Image
              src="https://images.pexels.com/photos/20529772/pexels-photo-20529772.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2"
            />
            <span className="font-medium">{memberCompany.name}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MemberCompanyList;
