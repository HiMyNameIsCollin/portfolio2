
const JibJab = ({setOverlay}) => {
	return(
		<div onClick={() => setOverlay(2)} className='projectCard flex' id='project2'>
			<div>
				<img src="/jj.png" alt=""/>
			</div>
			<article>
				<h2>
					Jib-Jab
				</h2>
				<div className='flex'>
					<div>
						<img
							alt='React Icon'
							src='/atom.png'
							height='48px'
							width='48px'
							/>
						<p> React.js </p>
					</div>
					<div>
						<img
							alt='Express Icon'
							src='/express.svg'
							height='48px'
							width='48px'
							/>
						<p> Express.js </p>
					</div>
					<div>
						<img
							alt='Node icon'
							src='/nodejs.png'
							height='48px'
							width='48px'
							/>
						<p> Node.js</p>
					</div>
					<div>
						<img
							alt='Mongo icon'
							src='/mongodb.svg'
							height='48px'
							width='48px'
							/>
						<p> Mongo DB</p>

					</div>
					<div>
						<img
							alt='Mongo icon'
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

export default JibJab