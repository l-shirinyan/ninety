import Link from 'next/link'
import Banner from '../components/homepage/banner'
import Services from '../components/homepage/services'
import Works from '@/components/homepage/works'
import OurTeam from '@/components/homepage/ourTeam'
import Partners from '@/components/homepage/partners'

export default function Home() {
  return (
    <main>
      <main>
        <Banner />
        <Services />
        <Works />
        <OurTeam />
        <Partners />
      </main>
    </main>
  )
}
