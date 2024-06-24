import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">업체 정보</span>
        <Link href="/" className="text-blue-500 text-xs">
          더 보기
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">jo</span>
          <span className="text-sm">@johyun0218</span>
        </div>
        <p>
          영등포에서 인테리어를 하고 있는 열심히 책임감 있는 인터리어 입니다.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            사무실 <b>영등포</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            사업자 <b>1234-111</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            작업 <b>마포구</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://dalrise.co.kr/"
              className="text-blue-500 font-medium"
            >
              dalrise
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>2025.01</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          관심 추가
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          관심 삭제
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
