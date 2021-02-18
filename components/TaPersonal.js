
const TaPersonal = ({setOverlay}) => {
	return(
		<div onClick={() => setOverlay(3)} className='projectCard flex' id='project3'>
			<div>
				<img src="/TA.png" alt=""/>
			</div>
			<article>
				<h2>
					Freelance personal page
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

export default TaPersonal