'use client'

import { useRouter } from 'next/navigation';

import { Button, Card, TextInput } from 'flowbite-react';
import { HiChevronDown, HiArrowDown } from 'react-icons/hi';

export default function PreMarketsNewOffer({ params }: { params: { type: string } }) {
  const router = useRouter()

  if (params.type != 'buy' && params.type != 'sell') {
    router.push('/');
    return;
  }
  return (
    <div className='flex justify-center'>
      <Card className="max-w-xl">
        <h5 className='text-center text-meta-3 font-bold'>BUYING</h5>
        <Card className="max-w-xl">
          <div className='flex space-x-2 w-full'>
            <TextInput type="number" required className='w-full' placeholder='Enter amount' />
            <Button color='dark' className='whitespace-nowrap'>
              Select token
              <HiChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Card>
        <div className='text-center py-2'>
          <div className='inline-flex p-2 rounded-full border border-bodydark2'><HiArrowDown className="h-4 w-4"/></div>
        </div>
        <Card className="max-w-xl">
          <div className='flex space-x-2 w-full'>
            <TextInput type="number" required className='w-full' placeholder='Enter amount' />
            <Button color='dark' className='whitespace-nowrap'>
              Select token
              <HiChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Card>
        <Button color='blue'>
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
    </div>
  );
}
