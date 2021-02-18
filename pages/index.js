import Head from 'next/head'
import Name from '../components/Name'
import MyImgBox from '../components/MyImgBox'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Home() {

  const router = useRouter()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.collinPath', {strokeDashoffset: 0, strokeWidth: '0.36px', opacity: 0,  duration: 2, stagger: 0.25, ease: 'Power2.easeOut'})
      .set('.collinPath', {fill: 'white'})
      .to('.myImgBox', {opacity: 1, duration: 2, ease: 'Sine.easein'}, '-=1.5')
      .to('#me1', {filter: 'grayscale(1) contrast(200%) brightness(10)',  opacity: 0, ease: 'Power.easeOut', duration: .5}, '-=1')
      .set('#me2', {filter: 'none'})
      .to('main', {background: 'white', duration: 1}, '-=1')
      setTimeout(() => {
        router.push('/main')
      },5500)
  },[])

  return (
    <div >

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
      </Head>

      <main className='indexPage'>
        <section>
          <Name />
          <MyImgBox />
        </section>
      </main>


    </div>
  )
}

export default Home