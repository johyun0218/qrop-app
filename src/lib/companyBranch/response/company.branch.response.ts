import { Prisma } from '@prisma/client';

export type CompanyBrachSearchType = Prisma.CompanyBranchGetPayload<{
  include: { users: true };
}> & {
  companyBusinessGroupName?: string;
  companyBusinessGroupBranchName?: string;
};

export class CompanyBranchSearchResponse {
  count: number;
  data: CompanyBrachSearchType[];
}
