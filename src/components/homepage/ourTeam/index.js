import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function OurTeam() {
  return (
    <main>
      <div className="bg-[url('../assets/our_team.jpg')] h-[958px] w-full object-cover py-[195px] px-[150px]">
        <div className='bg-white/25 md:w-[815px] w-[448px] border border-white md:h-80 h-44 opacity-50 md:px-11 md:py-11 p-8'>
          <p className='w-[595px] text-white md:text-6xl text-lg text-left leading-[90px]'>
            Highly experienced strategists, design engineers and marketing experts.
          </p>
        </div>
        <div className="flex text-white text-2xl font-semibold mt-16 h-12 max-w-max">
          <p className='border-b-2 border-white'>Meet our team</p>  
          <ChevronRightIcon className="h-7 w-7 pt-1.5" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}