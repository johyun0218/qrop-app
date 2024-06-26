import {
  BID_CONTRACT_STATUS,
  BID_CONTRACT_TYPE,
  BID_MAIN_STATE_TYPE,
  BID_STATE_TYPE,
  BOARD_CONFIG_TYPE,
  COMPANY_TYPE,
  CompanyBranch,
  MEMBER_COMPANY_STATUS,
  PrismaClient,
  USER_ROLE_TYPE,
  USE_YN,
  WORK_STATUS,
  // UseYn,
} from '@prisma/client';
import moment from 'moment-timezone';
import { code_clear, code_main } from './seed_code';
const prisma = new PrismaClient();

async function main() {
  await clear();

  const user1 = await addUser('user1');
  const user2 = await addUser('user2');
  const user3 = await addUser('user3');
  const user4 = await addUser('user4');
  const user5 = await addUser('user5');
  const user6 = await addUser('user6');

  const user11 = await addUser('user11');
  const user12 = await addUser('user12');
  const user13 = await addUser('user13');
  const user14 = await addUser('user14');
  const user15 = await addUser('user15');
  const user16 = await addUser('user16');

  const user21 = await addUser('user21');
  const user22 = await addUser('user22');
  const user23 = await addUser('user23');
  const user24 = await addUser('user24');
  const user25 = await addUser('user25');
  const user26 = await addUser('user26');

  await addAdmin('달라이즈', 'admin');
  await addAdmin('Qinc', 'qadmin');
  await addAdmin('DB 생명', 'dbadmin');
  await addAdmin('미쉐린', 'miadmin');

  // 1. 고객사 정보 추가
  const company1 = await addCompany(COMPANY_TYPE.DALRISE, '달라이즈');
  const company2 = await addCompany(COMPANY_TYPE.QINC, 'Qinc');
  const company3 = await addCompany(COMPANY_TYPE.DB, 'DB 생명');
  const company4 = await addCompany(COMPANY_TYPE.MICHELIN, '미쉐린');

  await code_clear();
  await code_main(company1);
  await code_main(company2);
  await code_main(company3);
  await code_main(company4);

  // 1.1 고객사 사용자 추가
  await addCompanyUser(company1.no, user12.no);
  await addCompanyUser(company1.no, user13.no);
  await addCompanyUser(company2.no, user14.no);
  await addCompanyUser(company3.no, user15.no);
  await addCompanyUser(company1.no, user16.no);

  // 1.2 고객사 지사 추가
  const companyBranch11 = await addCompanyBranch(company1.no);
  const companyBranch12 = await addCompanyBranch(company1.no);
  const companyBranch13 = await addCompanyBranch(company1.no);
  const companyBranch21 = await addCompanyBranch(company2.no);
  const companyBranch31 = await addCompanyBranch(company3.no);

  // 1.3 고객사 지사 사용자 추가
  await addCompanyBranchUser(companyBranch11.no, user21.no);
  await addCompanyBranchUser(companyBranch11.no, user22.no);
  await addCompanyBranchUser(companyBranch11.no, user23.no);
  await addCompanyBranchUser(companyBranch12.no, user24.no);
  await addCompanyBranchUser(companyBranch13.no, user24.no);
  await addCompanyBranchUser(companyBranch21.no, user25.no);
  await addCompanyBranchUser(companyBranch31.no, user26.no);

  // 2. 시공사 추가
  const memberCompany1 = await addMemberCompany({
    name: '(주)예지',
    repName: '이소은',
    email: '등록필요',
    status: MEMBER_COMPANY_STATUS.SAVE,
    tel: '등록필요',
    fax: '등록필요',
    addressOffice: '서울특별시 마포구 독막로 101, 802호(상수동, BR엘리텔)',
    attrYear: '2024',
    businessNo: '120-87-45165',
    tfbCode: '0000',
    tfbName: '일반건축공사',
    businessTypeName: '건설업',
    createdNo: user1.no,
    createdAt: new Date(),
  });

  const memberCompany2 = await addMemberCompany({
    name: '주식회사 로이',
    repName: '박수진',
    email: 'test@dalrise.co.kr',
    status: MEMBER_COMPANY_STATUS.SAVE,
    tel: '등록필요',
    fax: '등록필요',
    addressOffice:
      '경기도 시흥시 은계호수로 49, 2037호(은행동, 시흥 센트럴동 그랑트리캐슬)',
    attrYear: '2024',
    businessNo: '584-81-03218',
    tfbCode: '0000',
    tfbName: '실내건축공사업',
    businessTypeName: '건설업',
    createdNo: user2.no,
    createdAt: new Date(),
  });

  const memberCompany3 = await addMemberCompany({
    name: '힐스테이트',
    repName: '이순신',
    email: 'test@dalrise.co.kr',
    status: MEMBER_COMPANY_STATUS.REQUEST,
    tel: '01032638559',
    fax: '02-2222-3333',
    addressOffice: '서울시 역삼동 GFC',
    businessNo: '',
    attrYear: '2024',
    tfbCode: '012131',
    tfbName: '서비스',
    createdNo: user2.no,
    createdAt: new Date(),
  });

  const memberCompany4 = await addMemberCompany({
    name: '세신 인테리어',
    repName: '이순신',
    email: 'test@dalrise.co.kr',
    status: MEMBER_COMPANY_STATUS.REFUSE,
    tel: '01032638559',
    fax: '02-2222-3333',
    addressOffice: '서울시 역삼동 GFC',
    attrYear: '2024',
    businessNo: '',
    tfbCode: '012131',
    tfbName: '서비스',
    createdNo: user3.no,
    createdAt: new Date(),
  });

  const memberCompany5 = await addMemberCompany({
    name: '멋지다 철물점',
    repName: '이순신',
    email: 'test@dalrise.co.kr',
    status: MEMBER_COMPANY_STATUS.JUDGE,
    tel: '01032638559',
    fax: '02-2222-3333',
    addressOffice: '서울시 역삼동 GFC',
    attrYear: '2024',
    businessNo: '',
    tfbCode: '012131',
    tfbName: '서비스',
    createdNo: user4.no,
    createdAt: new Date(),
  });

  // 2.2 시공사 사용자 추가
  await addMemberCompanyUser(memberCompany1.no, user1.no);
  await addMemberCompanyUser(memberCompany2.no, user2.no);
  await addMemberCompanyUser(memberCompany3.no, user3.no);
  await addMemberCompanyUser(memberCompany4.no, user4.no);
  await addMemberCompanyUser(memberCompany5.no, user5.no);
  await addMemberCompanyUser(memberCompany5.no, user6.no);

  // 3. 1 계약 공고
  const bidMain1 = await addBidMain(company1.no, companyBranch11, user11.no);
  const bidMain2 = await addBidMain(company1.no, companyBranch12, user11.no);
  const bidMain3 = await addBidMain(company1.no, companyBranch13, user11.no);
  const bidMain4 = await addBidMain(company2.no, companyBranch21, user11.no);
  const bidMain5 = await addBidMain(company3.no, companyBranch31, user11.no);

  // 3.1 우선 협상
  await addBidPreBidder(bidMain5.no, memberCompany1.no);
  await addBidPreBidder(bidMain5.no, memberCompany2.no);
  await addBidPreBidder(bidMain5.no, memberCompany3.no);

  // 3. 3 계약 참여
  // await addBidJoin(bidMain1.no, memberCompany1.no, user1.no);
  // await addBidJoin(bidMain1.no, memberCompany2.no, user1.no);
  // await addBidJoin(bidMain1.no, memberCompany3.no, user1.no);
  // await addBidJoin(bidMain2.no, memberCompany1.no, user1.no);
  // await addBidJoin(bidMain3.no, memberCompany1.no, user1.no);
  // await addBidJoin(bidMain4.no, memberCompany1.no, user1.no);
  // await addBidJoin(bidMain5.no, memberCompany1.no, user1.no);
  // // 계약 체결
  // addBidContract(memberCompany1.no, bidMain1.no);
}

async function clear() {
  await prisma.adminUser.deleteMany({});
  await prisma.admin.deleteMany({});

  await prisma.notificationPush.deleteMany({});
  await prisma.notification.deleteMany({});

  await prisma.boardFile.deleteMany({});

  await prisma.bidContractWorkFile.deleteMany({});
  await prisma.bidContractStatusHistory.deleteMany({});
  await prisma.bidContractWork.deleteMany({});
  await prisma.bidContract.deleteMany({});

  await prisma.bidPreBidder.deleteMany({});
  await prisma.bidJoinSubmitDoc.deleteMany({});
  await prisma.bidJoin.deleteMany({});
  await prisma.bidMainDoc.deleteMany({});
  await prisma.bidMainSubmitDoc.deleteMany({});
  await prisma.bidMain.deleteMany({});

  await prisma.memberUser.deleteMany({});
  await prisma.memberCompany.deleteMany({});

  await prisma.userRole.deleteMany({});
  await prisma.userProfile.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.companyBranchUser.deleteMany({});
  await prisma.companyBranch.deleteMany({});
  await prisma.adminUser.deleteMany({});
  await prisma.companyUser.deleteMany({});
  await prisma.company.deleteMany({});
}

async function addAdmin(name: string, userId: string) {
  const user = await addUser(userId);
  const admin = await prisma.admin.create({
    data: {
      name,
      useYn: USE_YN.Y,
      createdAt: new Date(),
    },
  });
  await prisma.adminUser.create({
    data: {
      name: 'qadmin',
      adminNo: admin.no,
      userNo: user.no,
      createdAt: new Date(),
    },
  });

  // await prisma.adminUser.update({
  //   data: {
  //     userNo: user.no,
  //   },
  //   where: {
  //     no: adminUser.no,
  //   },
  // });
}

async function addMemberCompany(data: any) {
  console.log('🚀 ~ addMemberCompany ~ data:', data);
  const { status, ...input } = data;
  const memberCompany = await prisma.memberCompany.create({
    data: {
      ...input,
      status,
      // status,
      // businessNo: '1111-2222-3333',
    },
  });
  await prisma.memberCompanyDoc.create({
    data: {
      businessRegistrationNo: 1,
      interiorWorkNo: 2,
      memberCompanyNo: memberCompany.no,
      createdNo: 1,
      createdAt: new Date(),
    },
  });
  await prisma.memberCompanyApproval.createMany({
    data: [
      {
        step: 1,
        status: MEMBER_COMPANY_STATUS.SAVE,
        message: '임시 저장',
        createdAt: new Date(),
        createdNo: 1,
        memberCompanyNo: memberCompany.no,
      },
      // {
      //   step: 2,
      //   status: MEMBER_COMPANY_STATUS.REQUEST,
      //   createdAt: new Date(),
      //   message: '요청 합니다.',
      //   createdNo: 1,
      //   memberCompanyNo: memberCompany.no,
      // },
      // {
      //   step: 3,
      //   status: MEMBER_COMPANY_STATUS.JUDGE,
      //   message: '심사 중입니다.',
      //   createdAt: new Date(),
      //   createdNo: 1,
      //   memberCompanyNo: memberCompany.no,
      // },
      // {
      //   step: 4,
      //   status: MEMBER_COMPANY_STATUS.OK,
      //   message: '이러 이러해서 승인',
      //   createdAt: new Date(),
      //   createdNo: 1,
      //   memberCompanyNo: memberCompany.no,
      // },
    ],
  });

  return memberCompany;
}

async function addMemberCompanyUser(memberCompanyNo: number, userNo: number) {
  const memberCompany = await prisma.memberCompany.findUnique({
    where: {
      no: memberCompanyNo,
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      no: userNo,
    },
  });

  await prisma.memberUser.create({
    data: {
      name: '담당자1-' + memberCompany?.name + '-' + userNo,
      email: user?.email,
      userNo: user?.no,
      adminYn: 'Y',
      memberCompanyNo: memberCompany!.no,
      createdNo: 1,
      createdAt: new Date(),
    },
  });
}

async function addCompany(compayType: COMPANY_TYPE, name: string) {
  return await prisma.company.create({
    data: {
      companyType: compayType,
      name,
      useYn: USE_YN.Y,
      createdAt: new Date(),
      createdNo: 1,
    },
  });
}

async function addCompanyUser(companyNo: number, userNo: number) {
  return await prisma.companyUser.create({
    data: {
      name: 'TEST-' + companyNo,
      userNo,
      companyNo,
      createdNo: userNo,
      createdAt: new Date(),
    },
  });
}

async function addCompanyBranch(companyNo: number) {
  const company = await prisma.company.findUnique({
    where: {
      no: companyNo,
    },
  });
  return await prisma.companyBranch.create({
    data: {
      // name: company?.areaName + ' 의 시행사 - ' + companyNo,
      // repName: '대표자 - ' + companyNo,
      displayYn: 'Y',
      areaName: '장소명',
      floors: '1층',
      furniture: '가스렌지, 책상, 가구, 렌터',
      remark: '특이사항일 입력하였습니다.',
      zipCode: '111-222',
      addressOffice: '서울 성동구 자동차시장1길',
      addressOfficeDetail: '70',
      companyBusinessGroupCd: company?.companyType + '-1',
      companyBusinessGroupBranchCd: company?.companyType + '-1-1',
      companyNo,
      createdAt: new Date(),
      createdNo: 1,
    },
  });
}

async function addCompanyBranchUser(companyBranchNo: number, userNo: number) {
  const companyBranch = await prisma.companyBranch.findUnique({
    where: {
      no: companyBranchNo,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      no: userNo,
    },
  });

  return await prisma.companyBranchUser.create({
    data: {
      email: user!.email,
      name: companyBranch?.areaName + '-' + user!.name,
      tel: '02-1111-2222',
      repYn: 'Y',
      useYn: 'Y',
      userNo,
      createdAt: new Date(),
      createdNo: userNo,
      companyBranchNo,
    },
  });
}

async function addUser(userId: string) {
  const user = await prisma.user.create({
    data: {
      userId: userId,
      name: userId + ' 이름',
      email: userId + '@dalrise.co.kr',
      tel: '010-1111-3333',
      password:
        '105f9438c7f65717ca257f11e66a0f533cf5855d2fdea92b96ee7470d1fbf9b119af78e2eb01241cb86fa6a15a43607d6a7ec6c46af7fa38d4e46da903ce7034',
      salt: 'ae2db24222e52f4b3b5feefbad07712c',
      useYn: USE_YN.Y,
      createdAt: new Date(),
      createdNo: 1,
      roles: {
        createMany: {
          data: [
            {
              roleType: USER_ROLE_TYPE.ADMIN,
            },
            {
              roleType: USER_ROLE_TYPE.COMPANY,
            },
            {
              roleType: USER_ROLE_TYPE.COMPANY_BRANCH,
            },
            {
              roleType: USER_ROLE_TYPE.MEMBER,
            },
            {
              roleType: USER_ROLE_TYPE.USER,
            },
            {
              roleType: USER_ROLE_TYPE.WORK_MANAGER,
            },
          ],
        },
      },
      // companyNo,
    },
  });

  return user;
}

async function addBidMain(
  companyNo: number,
  companyBranch: CompanyBranch,
  userNo: number,
) {
  // 1. 임시 첨부파일 생성
  const file1 = await prisma.boardFile.create({
    data: {
      fileUrl: '/uploads/test.jpg',
      originalName: 'test.jpg',
      mimeType: 'jpeg/jpg',
      size: 112034,
      createdAt: new Date(),
      createdNo: 1,
    },
  });
  const file2 = await prisma.boardFile.create({
    data: {
      fileUrl: '/uploads/test2.jpg',
      originalName: 'test2.jpg',
      mimeType: 'jpeg/jpg',
      size: 112034,
      createdAt: new Date(),
      createdNo: 1,
    },
  });

  // 2. 글 작성
  const bidMain = await prisma.bidMain.create({
    data: {
      // configId: BOARD_CONFIG_TYPE.BID_MAIN,
      bidMngId: '202403111-01',
      bidMainState: BID_MAIN_STATE_TYPE.NORMAL,
      businessGroupCd: companyBranch.companyBusinessGroupCd,
      businessGroupBranchCd: companyBranch.companyBusinessGroupBranchCd,
      displayStartDate: new Date(2024, 3, 10),
      displayEndDate: new Date(2024, 3, 10),
      workStartDate: new Date(2024, 3, 10),
      workEndDate: new Date(2024, 3, 10),
      effectiveDate: new Date(2024, 3, 10),
      bidBasePrice: 20000000,
      lowerLimitPrice: 1000000,
      title: '상도동 입찰공고1',
      subTitle: '많이 입찰',
      // particulars: '특이사항 입니다.',
      content: '내용 내용\n내용',
      preBidderYn: USE_YN.N, // 우선 협상 대상자 N 처리
      contractType: BID_CONTRACT_TYPE.COMPETE,
      displayYn: USE_YN.Y,
      createdAt: new Date(),
      createdNo: userNo,
      createdNm: '작성자',
      addressSpot: '현장 주소',
      addressSpotLat: 12312.12,
      addressSpotLng: 12121.11,
      companyNo,
    },
  });

  // 임시 첨부 파일 연결
  // const boardMatchFile = await prisma.boardMatchFile.create({
  //   data: {
  //     configId: BOARD_CONFIG_TYPE.BID_MAIN,
  //     boardNo: bidMain.no,
  //   },
  // });

  await prisma.bidMainSubmitDoc.createMany({
    data: [
      {
        step: 1,
        name: '입찰통지서',
        createdNo: userNo,
        createdAt: new Date(),
        bidMainNo: bidMain.no,
      },
      {
        step: 2,
        name: '별첨1 입찰서',
        createdNo: userNo,
        createdAt: new Date(),
        bidMainNo: bidMain.no,
      },
      {
        step: 3,
        name: '별첨2 입찰서',
        createdNo: userNo,
        createdAt: new Date(),
        bidMainNo: bidMain.no,
      },
    ],
  });

  await prisma.bidMainDoc.createMany({
    data: [
      {
        step: 1,
        docType: '입찰참가신청서',
        fileNo: file1.no,
        displayYn: 'Y',
        createdNo: userNo,
        createdAt: new Date(),
        bidMainNo: bidMain.no,
      },
      {
        step: 2,
        docType: '보안 및 청렴계약이행서약서',
        fileNo: file2.no,
        displayYn: 'Y',
        createdNo: userNo,
        createdAt: new Date(),
        bidMainNo: bidMain.no,
      },
    ],
  });

  await prisma.boardFile.updateMany({
    data: {
      boardNo: bidMain.no,
      configId: BOARD_CONFIG_TYPE.BID_MAIN,
    },
    where: {
      no: {
        in: [file1.no, file2.no],
      },
    },
  });

  return bidMain;
}

async function addBidPreBidder(bidNo: number, memberCompanyNo: number) {
  await prisma.bidPreBidder.create({
    data: {
      bidMainNo: bidNo,
      memberCompanyNo: memberCompanyNo,
      createdNo: 1,
      createdAt: new Date(),
    },
  });
}

async function addBidJoin(
  bidNo: number,
  memberCompanyNo: number,
  userNo: number,
) {
  const bidMainSubmitDocs = await prisma.bidMainSubmitDoc.findMany({
    where: {
      bidMainNo: bidNo,
    },
    select: {
      no: true,
    },
    orderBy: {
      step: 'asc',
    },
  });
  const bidJoin = await prisma.bidJoin.create({
    data: {
      // configId: BOARD_CONFIG_TYPE.BID_JOIN,
      bidNo,
      userNo,
      bidPrice: 20000,
      createdNo: 1,
      bidStatus: BID_STATE_TYPE.SAVE,
      createdAt: new Date(),
      memberCompanyNo,
    },
  });

  const docFileMap: Map<number, number> = new Map();

  for (let i = 0; i < bidMainSubmitDocs.length; i++) {
    const file1 = await prisma.boardFile.create({
      data: {
        fileUrl:
          '/Users/dalmac/Desktop/proj/qooi/uploads/BID_MAIN/2024-05-05/1714912527920.jpeg',
        originalName: '1714911674168.jpeg',
        mimeType: 'image/jpeg',
        size: 112034,
        createdAt: new Date(),
        createdNo: 1,
      },
    });

    docFileMap.set(bidMainSubmitDocs[i].no, file1.no);
  }

  for (const [key, value] of docFileMap) {
    await prisma.bidJoinSubmitDoc.create({
      data: {
        bidJoinNo: bidJoin.joinNo,
        bidMainSubmitDocNo: key,
        fileNo: value,
        createdAt: new Date(),
        createdNo: 1,
      },
    });
  }
}

async function addBidContract(memberCompanyNo: number, bidMainNo: number) {
  const bidContract = await prisma.bidContract.create({
    data: {
      priority: 1,
      contractPrice: 500000,
      contractStatus: BID_CONTRACT_STATUS.CONTRACT,
      workStatus: WORK_STATUS.READY,
      workStartDate: new Date(),
      workEndDate: new Date(),
      memberCompanyNo,
      bidMainNo,
      createdNo: 1,
      createdAt: new Date(),
    },
  });

  await prisma.bidContractStatusHistory.create({
    data: {
      contractStatus: BID_CONTRACT_STATUS.CONTRACT,
      bidContractNo: bidContract.no,
      createdNo: 1,
      createdAt: new Date(),
    },
  });

  await prisma.bidContractWork.create({
    data: {
      workDay: moment().format('YYYY-MM-DD'),
      startTime: '09:00',
      endTime: '16:00',
      workPerson: 3,
      worker: '작업자1',
      name: '작업 했다. ',
      remark: '특이사항은 없고',
      createdNo: 1,
      createdAt: new Date(),
      bidContractNo: bidContract.no,
    },
  });
  await prisma.bidContractWork.create({
    data: {
      workDay: moment().add(1, 'days').format('YYYY-MM-DD'),
      startTime: '09:00',
      endTime: '16:00',
      workPerson: 3,
      worker: '작업자2',
      name: '작업 했다2. ',
      remark: '특이사항은 없고2',
      createdNo: 1,
      createdAt: new Date(),
      bidContractNo: bidContract.no,
    },
  });

  const bidContract2 = await prisma.bidContract.create({
    data: {
      priority: 2,
      contractPrice: 500000,
      contractStatus: BID_CONTRACT_STATUS.CONTRACT,
      workStatus: WORK_STATUS.READY,
      workStartDate: new Date(),
      workEndDate: new Date(),
      memberCompanyNo,
      bidMainNo,
      createdNo: 1,
      createdAt: new Date(),
    },
  });

  await prisma.bidContractStatusHistory.create({
    data: {
      contractStatus: BID_CONTRACT_STATUS.CONTRACT,
      bidContractNo: bidContract2.no,
      createdNo: 1,
      createdAt: new Date(),
    },
  });

  return bidContract;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
