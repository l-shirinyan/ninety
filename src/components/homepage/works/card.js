import Image from 'next/image';
import fight_legends from '../../../assets/works/fight_legends.jpg'
import funtime from '../../../assets/works/funtime.jpg'
import liquid from '../../../assets/works/liquid.jpg'

const images = [fight_legends, funtime, liquid]

export default function Banner() {
  return (
    <div className='w-full flex justify-between gap-4'>  
        {images.map((item) => (
          <div className="h-80 border-b-[3px] border-primary">
            <Image
            src={item}
            alt='img'
            width={373}
            height={285}
            />  
          </div>
        ))}
    </div>
  )
} 