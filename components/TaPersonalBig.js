import Image from 'next/image'
const TaPersonalBig = ({setOverlay}) => {
	return(
		<div className='projectCardBig flex' id='project3Big'>
			<span className='closeProject' onClick={() => setOverlay(undefined)}>
				<span>close</span> X
			</span>
			<div className='pcbImg'>
				<img src="/TA.png" alt=""/>
			</div>
			<article>
				<h2>
					Freelance personal page
				</h2>
				<p>Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sapiente laboriosam facilis eligendi, ipsum cupiditate magni iste est corporis explicabo totam saepe exercitationem, sed fugiat excepturi in tempora nesciunt, error. Ut, obcaecati, officia quia quasi quo deserunt nihil eveniet consequatur doloremque! Esse voluptate nisi quo natus harum labore nostrum perspiciatis!</p>		
				<div className='flex'>
					<div className='flex'>
						<img
							alt='Html Icon'
							src='/html.png'
							height='48px'
							width='48px'
							/>
						<p>HTML</p>
					</div>
					<div className='flex'>
						<img
							alt='ass icon'
							src='/sass.png'
							height='48px'
							width='48px'
							/>
						<p> SASS</p>
					</div>
					<div className='flex'>
						<img
							alt='Javascript icon'
							src='/javascript.png'
							height='48px'
							width='48px'
							/>
						<p> Javascript</p>
					</div>
				</div>

				<div className='flex'>
					<a href='http://bit.ly/37pfbwa' target='_blank' className='button flex'>
						<p>Live</p>
						<span>
							<Image 
								alt='Project icon'
								height='64px'
								width='64px'
								src='/atom.png' />
						</span>
					</a>
					<a href='https://github.com/HiMyNameIsCollin/TApersonal' target='_blank' className='button flex'>
						<p>Repo</p>
						<span>
							<Image 
								alt='Project icon'
								height='64px'
								width='64px'
								src='/github.png' />
						</span>
					</a>
				</div>
			</article>
		</div>
	)
}

export default TaPersonalBig