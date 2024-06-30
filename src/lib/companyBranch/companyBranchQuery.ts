import prisma from '@/lib/client';
import { CompanyBranchSearchResponse } from './response/company.branch.response';

interface IBusinessGroups {
  [key: string]: string;
}

export class CompanyBranchQuery {
  async branchFindAll(): Promise<CompanyBranchSearchResponse> {
    const businessGroups = await this.businessGroupFindAll();

    const businessGroupMap = businessGroups.reduce(
      (acc: IBusinessGroups, businessGroup) => {
        acc[businessGroup.cd] = businessGroup.name;
        return acc;
      },
      {},
    );

    const businessGroupBranchMap = businessGroups
      .flatMap((r) => r.branchs)
      .reduce((acc: IBusinessGroups, businessGroup) => {
        acc[businessGroup.cd] = businessGroup.name;
        return acc;
      }, {});

    const list = await prisma.companyBranch.findMany({
      include: {
        users: true,
      },
    });

    const result = {
      count: list.length,
      data: list.map((r) => {
        return {
          ...r,
          companyBusinessGroupName:
            businessGroupMap[r.companyBusinessGroupCd] || '',
          companyBusinessGroupBranchName:
            businessGroupBranchMap[r.companyBusinessGroupBranchCd] || '',
        };
      }),
    };

    return result;
  }

  private async businessGroupFindAll() {
    return await prisma.companyBusinessGroup.findMany({
      // where: whereInput,
      include: {
        branchs: {
          orderBy: {
            step: 'asc',
          },
        },
      },
      orderBy: {
        step: 'asc',
      },
    });
  }
}
