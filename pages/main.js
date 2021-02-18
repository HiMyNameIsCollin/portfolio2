import Head from 'next/head'
import Name from '../components/Name'
import MyImgBox from '../components/MyImgBox'
import WmBlog from '../components/WmBlog'
import JibJab from '../components/JibJab'
import TaPersonal from '../components/TaPersonal'
import Portfoliov1 from '../components/Portfoliov1'
import WmBlogBig from '../components/WmBlogBig'
import JibJabBig from '../components/JibJabBig'
import TaPersonalBig from '../components/TaPersonalBig'
import Portfoliov1Big from '../components/Portfoliov1Big'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Overlay = ({type, setOverlay}) => {
	return(
		<div className='overlay flex'>
			<div className='projectContainer'>
				{
				type === 1 ?
					<WmBlogBig setOverlay={setOverlay}/> :
				type === 2 ?
					<JibJabBig setOverlay={setOverlay}/> :
				type === 3 ?
					<TaPersonalBig setOverlay={setOverlay}/> :
				type === 4 ?
					<Portfoliov1Big setOverlay={setOverlay}/> :
					null
				}
			</div>
		</div>
	)
}

const Main = () => {

	const [overlay, setOverlay] = useState(undefined)

	const typeText = function(){
		const dataText = [  'Full Stack', 'Web Developer', 'Former', 'Chef', 'Award winning', 'Broadway Performer','Just kidding','about that last one', 'Full Stack', 'Web Developer']
		const topTypeWriter = (text, i, fnCallback) => {
			if(i < (text.length)){
				document.getElementById('typeWriter1').innerHTML = text.substring(0, i+1)
			    setTimeout(function() {
			    	topTypeWriter(text, i + 1, fnCallback)
			    }, 100)
			}
			else if (typeof fnCallback == 'function') {
		      	setTimeout(fnCallback, 350);
		    }
		}
		const bottomTypeWriter = (text, i, fnCallback) => {
			if(i < (text.length)){
				document.getElementById('typeWriter2').innerHTML = text.substring(0, i+1)
			    setTimeout(function() {
			    	bottomTypeWriter(text, i + 1, fnCallback)
			    }, 100)
			}
			else if (typeof fnCallback == 'function') {
		      	setTimeout(() => {
		      		fnCallback()

		      	}, 700);
		    }
		}
		const startTextAnimation = (i) => {
			const isEven = (num) => {
				return(num % 2 === 0)
			}
			if (dataText[i] && i < dataText[i].length) {
				if(!isEven(i)){
					bottomTypeWriter(dataText[i], 0, function(){
						startTextAnimation(i + 1);
					})
				}else {
					document.getElementById('typeWriter1').innerHTML = ''
					document.getElementById('typeWriter2').innerHTML = ''
					topTypeWriter(dataText[i], 0, function(){
						startTextAnimation(i + 1);
					})
				}
			}
		}
		startTextAnimation(0);
	}

	useEffect(() => {
		const tl = gsap.timeline()
		tl.to('.mainPage', {opacity: 1, duration: 1})
		.from('.svgBox', {height: '100%', width: '100%', duration: 1})
		.set('.svgBox', {clearProps: 'all'})
		if(window.innerWidth >=920){
			tl.fromTo('#me1, #me2', {opacity: 0, x: '100%'}, {opacity: '1', x: '0%', duration: 1})
			.fromTo('.intro', {x: '100%', visibility: 'hidden'}, {x: '0%', visibility: 'visible', duration: 1, ease: 'Bounce.easeOut'}, '-=1')
			setTimeout(() => {
				typeText()
			}, 3000)
		} else {
			tl.fromTo('#me1, #me2', {opacity: 0, y: '100%'}, {opacity: '1', y: '0%', duration: 1},'-=1')
			const animation = gsap.fromTo('.intro',
			{
				x: '100%', 
				visibility: 'hidden'	
			},
			{
				x: '0%',
				visibility: 'visible', 
				duration: 1,
				ease: 'Bounce.easeOut'
			})
			ScrollTrigger.create({
				trigger: '.intro',
				start: 'top center',
				onEnter: typeText,
				animation: animation,
				once: true
			})

		}
	},[])

	useEffect(() => {

		const header1 = gsap.fromTo('#projectHeader',
		{
			y: '10rem',
			visibility: 'hidden'
		},
		{
			y: '-2.5rem',
			visibility: 'visible',
			duration: 1
		})
		ScrollTrigger.create({
			trigger: '#projectSection',
			start: 'top 90%',
			animation: header1,
		})
		const header2 = gsap.fromTo('#contactHeader',
		{
			y: '10rem',
			visibility: 'hidden'
		},
		{
			y: '-2.5rem',
			visibility: 'visible',
			duration: 1
		})
		ScrollTrigger.create({
			trigger: '#contactHeader',
			start: 'top bottom+=100px',
			animation: header2, buttonSlide,
		})
		const animation1 = gsap.from('#project1',
		{
			clipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			webkitClipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			duration: .5,
			ease: 'Bounce.easeOut'
		})

		ScrollTrigger.create({
			trigger: '#project1',
			start: 'center center',
			animation: animation1
		})
		const animation2 = gsap.from('#project2',
		{
			clipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			webkitClipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			duration: .5,
			ease: 'Bounce.easeOut'
		})

		ScrollTrigger.create({
			trigger: '#project2',
			start: 'center center',
			animation: animation2
		})
		const animation3 = gsap.from('#project3',
		{
			clipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			webkitClipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			duration: .5,
			ease: 'Bounce.easeOut'
		})

		ScrollTrigger.create({
			trigger: '#project3',
			start: 'center center',
			animation: animation3
		})
		const animation4 = gsap.from('#project4',
		{
			clipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			webkitClipPath: 'polygon(100% 90%, 100% 90%, 0 10%, 0 10%)',
			duration: .5,
			ease: 'Bounce.easeOut'
		})

		ScrollTrigger.create({
			trigger: '#project4',
			start: 'center center',
			animation: animation4
		})

		const contactSlide = gsap.fromTo('.contactCard',
		{
			x: '100%',
			visibility: 'hidden',
		},
		{
			x: '0%',
			visibility: 'visible',
			duration: 1,
			ease: 'Bounce.easeOut'

		})
		ScrollTrigger.create({
			trigger: '.contactCard',
			start: 'top center',
			animation: contactSlide
		})

		const buttonSlide = gsap.fromTo('.button',
		{
			y: '-100%',
			visibility: 'hidden'
		},
		{
			y: '0',
			visibility: 'visible',
			duration: 1,
			stagger: .5,
			ease: 'Bounce.easeOut'
		})

		ScrollTrigger.create({
			trigger: '.button',
			start: 'top center',
			animation: buttonSlide
		})

	},[])

	return(
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
			</Head>
			<main className='mainPage'>
			{overlay !== undefined && <Overlay type={overlay} setOverlay={setOverlay}/>}
				<section >
			        <Name />
			        <MyImgBox />
			        <div className='filler'>
			        </div>
			        <div className='intro flex'>
						<p>Hi, my name is </p>
						<h1> <span>Collin</span> Stone </h1>
						<p><span id='typeWriter1'> </span> <span id='typeWriter2'></span></p>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a doloribus ab totam eaque, ipsam? Nobis odit quos incidunt eveniet ullam, veniam non doloribus. Veniam ratione deleniti porro repudiandae non et odit eligendi voluptas voluptate quae culpa ullam, reiciendis quibusdam nihil expedita, commodi provident velit libero perferendis sit. Voluptate, odit! </p>

			        </div>
				</section>

				<section id='projectSection'>
					<div id='projectHeader' className='sectionHeader flex'>
						<h2> Projects </h2>
						<span>
						<Image 
							alt='Project icon'
							height='128px'
							width='128px'
							src='/coding.png' />
						</span>
					</div>
					<WmBlog setOverlay={setOverlay} />
					<JibJab setOverlay={setOverlay} />
					<TaPersonal setOverlay={setOverlay} />
					<Portfoliov1 setOverlay={setOverlay} />
				</section>
				<section id='contactSection flex'>
					<div id='contactHeader' className='sectionHeader flex'>
						<h2> Contact </h2>
						<span>
						<Image 
							alt='Contact icon'
							height='128px'
							width='128px'
							src='/contact.png' />
						</span>
					</div>
					<div className='socialMediaCard flex'>

								<a href='#' target='_blank' className='button flex'>
									<p>LinkedIn</p> 
									<span>
										<Image 
											alt='LinkedIn Icon'
											src='/linkedin-round.png'
											height='64px'
											width='64px' />
									</span>
								</a>
								<a href='#' target='_blank' className='button flex'>
									<p> Git Hub </p> 
									<span>
										<Image 
											alt='GitHub Icon'
											src='/github.png'
											height='64px'
											width='64px' />
									</span>
								</a>
								<a href='#' target='_blank' className='button flex'>
									<p>Twitter </p> 
									<span>
										<Image 
											alt='Twitter Icon'
											src='/twitter-round.png'
											height='64px'
											width='64px' />
									</span>
								</a>

							</div>

					<div className='contactCard flex'>
						<p> Need a website? </p>
						<p> A Web Developer? </p>
						<p> A free ride while you're already late?</p>
						<h3>Let's get in touch!</h3>
						<form action="https://getform.io/f/18ff3710-3b37-447a-99da-36b4132715c8" method="POST" className='flex' >
							<div className='formGroup flex'>
								<label htmlFor="name">Your name</label>
								<input type="text" name='name' placeholder='Eleanor Batman'/>							
							</div>
							<div className='formGroup flex'>
								<label htmlFor="email"> Your email</label>
								<input type="email" name='email' placeholder='E_Batman@gotham.com'/>								
							</div>
							<div className='formGroup flex'>
								<label htmlFor="message"> What can I help you with?</label>
								<textarea type="text" name='message' rows='4' placeholder='Hey! I need a website.'/>								
							</div>
							<button type='submit'> Send </button>
						</form>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Main