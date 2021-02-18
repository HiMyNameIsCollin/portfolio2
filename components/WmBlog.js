const WmBlog = ({setOverlay}) => {
	return(
		<div onClick={() => setOverlay(1)} className='projectCard flex' id='project1'>
			<div>
				<img src="/wm.png" alt=""/>
			</div>
			<article>
				<h2>
					Freelance blog
				</h2>
				<div className='flex'>
					<div>
						<img
							alt='Next Icon'
							src='/next-js.svg'
							height='48px'
							width='48px'
							/>
						<p> Next.js </p>
					</div>
					<div>
						<img
							alt='Sass icon'
							src='/sass.png'
							height='48px'
							width='48px'
							/>
						<p> SASS</p>
					</div>

				</div>
			</article>
		</div>
	)
}

export default WmBlog