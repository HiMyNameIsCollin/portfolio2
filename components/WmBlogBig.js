import Image from 'next/image'

const WmBlogBig = ({setOverlay}) => {
	return(
		<div className='projectCardBig' id='project1Big flex'>
			<span className='closeProject' onClick={() => setOverlay(undefined)}>
				<span>close</span> X
			</span>
			<div className='pcbImg'>
				<img src="/wm.png" alt=""/>
			</div>
			<article>
				<h2>
					Freelance blog
				</h2>
				<p>Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sapiente laboriosam facilis eligendi, ipsum cupiditate magni iste est corporis explicabo totam saepe exercitationem, sed fugiat excepturi in tempora nesciunt, error. Ut, obcaecati, officia quia quasi quo deserunt nihil eveniet consequatur doloremque! Esse voluptate nisi quo natus harum labore nostrum perspiciatis!</p>		
				<div className='flex'>
					<div className='flex'>
						<img
							alt='Next Icon'
							src='/next-js.svg'
							height='48px'
							width='48px'
							/>
						<p> Next.js </p>
					</div>
					<div className='flex'>
						<img
							alt='Sass icon'
							src='/sass.png'
							height='48px'
							width='48px'
							/>
						<p> SASS</p>
					</div>
				</div>
				<div className='flex'>
					<a href='http://bit.ly/3s8yNNg' target='_blank' className='button flex'>
						<p>Live</p>
						<span>
							<Image 
								alt='Project icon'
								height='64px'
								width='64px'
								src='/atom.png' />
						</span>
					</a>
					<a href='https://github.com/HiMyNameIsCollin/wm-blog' target='_blank' className='button flex'>
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

export default WmBlogBig