import { Company, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function code_main(company: Company) {
  await seoul(company);
  await gyeonggi(company);
}
// code_main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
export async function code_clear() {
  await prisma.companyBusinessGroupBranch.deleteMany({});
  await prisma.companyBusinessGroup.deleteMany({});
}

async function seoul(company: Company) {
  const { no, companyType } = company;
  const code = '1';
  await prisma.companyBusinessGroup.create({
    data: {
      cd: companyType + '-' + code,
      companyNo: no,
      step: 1,
      name: '서울',
      useYn: 'Y',
      createdAt: new Date(),
      createdNo: 1,
      branchs: {
        createMany: {
          data: [
            {
              cd: companyType + '-' + code + '-1',
              name: '성동구',
              useYn: 'Y',
              step: 1,
              createdAt: new Date(),
              createdNo: 1,
            },
            {
              cd: companyType + '-' + code + '-2',
              name: '종로구',
              useYn: 'Y',
              step: 2,
              createdAt: new Date(),
              createdNo: 1,
            },
            {
              cd: companyType + '-' + code + '-3',
              name: '송파구',
              useYn: 'Y',
              step: 3,
              createdAt: new Date(),
              createdNo: 1,
            },
          ],
        },
      },
    },
  });
}

async function gyeonggi(company: Company) {
  const { no, companyType } = company;
  const code = '2';
  await prisma.companyBusinessGroup.create({
    data: {
      cd: companyType + '-' + code,
      companyNo: no,
      step: 1,
      name: '경기',
      useYn: 'Y',
      createdAt: new Date(),
      createdNo: 1,
      branchs: {
        createMany: {
          data: [
            {
              cd: companyType + '-' + code + '-1',
              name: '시흥시',
              useYn: 'Y',
              step: 1,
              createdAt: new Date(),
              createdNo: 1,
            },
            {
              cd: companyType + '-' + code + '-2',
              name: '포천시',
              useYn: 'Y',
              step: 2,
              createdAt: new Date(),
              createdNo: 1,
            },
            {
              cd: companyType + '-' + code + '-3',
              name: '수원시',
              useYn: 'Y',
              step: 3,
              createdAt: new Date(),
              createdNo: 1,
            },
          ],
        },
      },
    },
  });
}
