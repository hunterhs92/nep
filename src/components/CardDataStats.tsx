"use client";
import React, { ReactNode, useState } from 'react';
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  colors: ["#10B981", "#375E83"],
  labels: ["Fill", "UnFill"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
      //customScale: 0.8
    },
  },
  dataLabels: {
    enabled: false,
  }
};

interface CardDataStatsProps {
  action: string;
  total: string;
  token: string;
  price: number;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  action,
  total,
  token,
  price,
  children,
}) => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 35],
  });
  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className='flex justify-between pb-1'>
        <div className='flex space-x-2'>
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
            {children}
          </div>
          <div>
            <div className='flex space-x-1'>
              <h3 className='uppercase font-bold'>SUI</h3>
              <Image src={'/images/logo/chain/sui.svg'} width={12} height={12} alt='chain-logo' className='w-6 h-6 p-1 rounded-full bg-bodydark1 dark:bg-black' />
            </div>
            <p className='text-xs uppercase bg-bodydark1 dark:bg-graydark rounded-md p-0.5 mt-0.5 dark:text-bodydark1'>Single fill</p>
          </div>
        </div>
        <div className='-mr-4 -mt-2'>
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
            height={80}
            width={80}
          />
        </div>
      </div>
      <hr />
      <div className="mt-4 flex justify-between pb-4">
        <div>
          <h4 className="text-title-xsm font-bold text-slate-500 dark:text-slate-100">
            {total} {token}
          </h4>
          <span className="text-sm font-medium">${price}/Token</span>
        </div>

        <div className='mt-3.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>

        <div>
          <h4 className="text-title-xsm font-bold text-slate-500 dark:text-slate-100 flex">
            <span>{total}</span> <Image src={'/images/logo/token/usdc.svg'} width={12} height={12} alt='chain-logo' className='w-6 h-6 p-1 rounded-full bg-bodydark1 dark:bg-black' />
          </h4>
          <span className="text-sm font-medium">${total}</span>
        </div>
      </div>
      <hr />
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-sm uppercase font-bold text-slate-500 dark:text-slate-100">
            #501
          </h4>
          <span className="text-sm">6 hours ago</span>
        </div>

        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-black py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            {action}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
