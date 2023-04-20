import Image from 'next/image';
import ellipse from '../../../assets/ellipse.png'

export default function Services() {
  return (
    <main>
      <div className='h-[1174px] background-gradient lg:px-36 md:px-20 px-10'>
        <div className='text-[45px] text-white m-auto text-center max-w-[1023px] py-20 '>
          <p>
            ​We’re problem solvers and strategic thinkers. See what we can do for you.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='relative w-96'>
            <Image
              src={ ellipse }
              width={200}
              height={200}
              alt="ellipse"
              className='absolute top-[-70px] left-[-90px]'
            />
            <h2 className='text-7xl text-white font-bold h-20 !z-20'>
              Services
            </h2>
          </div>
        </div>
        <div className='grid grid-cols-12 text-2xl mt-32'>
          <div className='col-span-5 flex flex-col justify-start text-left text-[70px] leading-[105px] font-bold text-white/20 -mt-10 cursor-pointer'>
            <p className='title-gradient'>Digital</p>
            <p className="">Ventures</p>
            <p className="">Marketing</p>
          </div>
          <div className='col-span-7 text-white text-left -pl-5'>
            <p>
              Our digital product studio combines leading technology and cutting-edge design to create products that are stylish, powerful and functional. 
              We believe great products that work and solve real-world problems is key to long-lasting growth and success.
            </p><br />
            <p>
              Whether you have a bold idea and are just starting out, or an already established business, we partner with you to help you build, 
              elevate your strengths, and realise your vision.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}