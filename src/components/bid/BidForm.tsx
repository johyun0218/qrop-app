'use client';
import prisma from '@/lib/client';
import {
  CompanyBrachSearchType,
  CompanyBranchSearchResponse,
} from '@/lib/companyBranch/response/company.branch.response';
import { Company } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import Datepicker, {
  DateRangeType,
  DateType,
  DateValueType,
} from 'react-tailwindcss-datepicker';

const BidForm = ({
  companys,
  branchResponse,
}: {
  companys: Company[];
  branchResponse: CompanyBranchSearchResponse;
}) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDay() + 1)),
  });
  const [branchs, setBranchs] = useState<CompanyBrachSearchType[]>([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  useEffect(() => {
    setBranchs(
      branchResponse.data.filter(
        (f) => f.companyNo == parseInt(selectedCompany, 10),
      ),
    );
  }, [selectedCompany]);

  return (
    <form className='className="flex flex-col gap-6"'>
      <div className=" p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">공고 기본</p>
                  <p>필수 입력 값입니다.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="bidMngId">공고번호</label>
                      <input
                        type="text"
                        name="bidMngId"
                        id="bidMngId"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue={''}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="displayYn_Y">공고공개여부</label>
                      <div className="mt-1">
                        <input
                          type="radio"
                          name="displayYn"
                          id="displayYn_Y"
                          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          defaultValue={'Y'}
                        />
                        <label htmlFor="displayYn_Y" className="ml-2 pr-5">
                          공개
                        </label>
                        <input
                          type="radio"
                          name="displayYn"
                          id="displayYn_N"
                          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          defaultValue={'N'}
                        />
                        <label htmlFor="displayYn_N" className="ml-2">
                          비공개
                        </label>
                      </div>

                      {/*  */}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="address">접수기간</label>
                      <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        inputClassName="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="address">공사기간</label>
                      <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        inputClassName="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="address">입찰결과일</label>
                      <Datepicker
                        value={value}
                        asSingle={true}
                        onChange={handleValueChange}
                        inputClassName="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="country">시행사</label>
                      <select
                        id="company"
                        name="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        value={selectedCompany}
                      >
                        <option value={''}>-- 시행사 --</option>
                        {companys.map((company) => {
                          return (
                            <option key={company.no} value={company.no}>
                              {company.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">시행사</label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={''}
                      >
                        <option>Choose a country</option>
                        {branchs.map((branch) => {
                          return (
                            <option key={branch.no} value="CA">
                              {branch.companyBusinessGroupName} &gt;{' '}
                              {branch.companyBusinessGroupBranchName} &gt;{' '}
                              {branch.areaName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">시행사</label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={''}
                      >
                        <option>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        defaultValue={''}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="form-checkbox"
                          defaultValue={''}
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          My billing address is different than above.
                        </label>
                      </div>
                    </div>

                    {/* <div className="md:col-span-2">
                      <label htmlFor="soda">How many soda pops?</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <button className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                          defaultValue={'0'}
                        />
                        <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-2 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div> */}

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BidForm;
