
const Portfoliov1 = ({setOverlay}) => {
	return(
		<div onClick={() => setOverlay(4)} className='projectCard flex' id='project4'>
			<div>
				<img src="/portfolio.png" alt=""/>
			</div>
			<article>
				<h2>
					Portfolio v1
				</h2>
				<div className='flex'>
					<div>
						<img
							alt='Html Icon'
							src='/html.png'
							height='48px'
							width='48px'
							/>
						<p>HTML</p>
					</div>
					<div>
						<img
							alt='ass icon'
							src='/sass.png'
							height='48px'
							width='48px'
							/>
						<p> SASS</p>
					</div>
					<div>
						<img
							alt='Javascript icon'
							src='/javascript.png'
							height='48px'
							width='48px'
							/>
						<p> Javascript</p>
					</div>
				</div>
			</article>
		</div>
	)
}

export default Portfoliov1