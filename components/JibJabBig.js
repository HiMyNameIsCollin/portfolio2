import Image from 'next/image'
const JibJabBig = ({setOverlay}) => {
	return(
		<div className='projectCardBig flex' id='project2Big'>
			<span className='closeProject' onClick={() => setOverlay(undefined)}>
				<span>close</span> X
			</span>
			<div className='pcbImg'>
				<img src="/jj.png" alt=""/>
			</div>
			<article>
				<h2>
					Jib-Jab
				</h2>
				<p>Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sapiente laboriosam facilis eligendi, ipsum cupiditate magni iste est corporis explicabo totam saepe exercitationem, sed fugiat excepturi in tempora nesciunt, error. Ut, obcaecati, officia quia quasi quo deserunt nihil eveniet consequatur doloremque! Esse voluptate nisi quo natus harum labore nostrum perspiciatis!</p>		
				<div className='flex'>
					<div className='flex'>
						<img
							alt='React Icon'
							src='/atom.png'
							height='48px'
							width='48px'
							/>
						<p> React.js </p>
					</div>
					<div className='flex'>
						<img
							alt='Express Icon'
							src='/express.svg'
							height='48px'
							width='48px'
							/>
						<p> Express.js </p>
					</div>
					<div className='flex'>
						<img
							alt='Node icon'
							src='/nodejs.png'
							height='48px'
							width='48px'
							/>
						<p> Node.js</p>
					</div>
					<div className='flex'>
						<img
							alt='Mongo icon'
							src='/mongodb.svg'
							height='48px'
							width='48px'
							/>
						<p> Mongo DB</p>

					</div>
					<div className='flex'>
						<img
							alt='Mongo icon'
							src='/sass.png'
							height='48px'
							width='48px'
							/>
						<p> SASS</p>

					</div>
				</div>
				<div className='flex'>
					<a  href='http://bit.ly/2NEu46Z' target='_blank'  className='button flex'>
						<p>Live</p>
						<span>
							<Image 
								alt='Project icon'
								height='64px'
								width='64px'
								src='/atom.png' />
						</span>
					</a>
					<a href='https://github.com/HiMyNameIsCollin/jib-jab' target='_blank' className='button flex'>
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

export default JibJabBig