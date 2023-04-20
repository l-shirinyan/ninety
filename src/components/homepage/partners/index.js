import Image from 'next/image'
import liquid_crypto from '../../../assets/partners/liquid_crypto.png'
import fight_legends from '../../../assets/partners/fight_legends.png'
import york_capital from '../../../assets/partners/york_capital.png'
import universal from '../../../assets/partners/universal.png'
import burger_king from '../../../assets/partners/burger_king.png'
import unnings from '../../../assets/partners/unnings.png'
import fairfax from '../../../assets/partners/fairfax.png'

const partenrs = [liquid_crypto, fight_legends, york_capital, universal, burger_king, unnings, fairfax]

export default function OurTeam() {
  return (
    <main className='h-[746px] lg:px-36 md:px-20 px-10 pt-28'>
      <h2 className='title-gradient text-[80px] font-bold pb-24'>
          Our  Partners
      </h2>
      <div>
        <p className="text-2xl text-[#272323] font-light">
          By engaging ninety3, you will benefit from the seasoned experience of our professional senior experts 
          who have worked with and for some of the biggest companies across the globe.
        </p>
      </div>
      <div className='flex gap-36 mt-32'>
        {partenrs.map((item) => (
            <div className="h-36">
              <Image
              src={item}
              alt='img'
              width={130}
              />  
            </div>
          ))}
      </div>
    </main>
  )
}