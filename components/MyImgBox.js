import Image from 'next/image'

const MyImgBox = () => {
	return(
		<div className='myImgBox'>
			<img 
				id='me1'
				src='/me.png'
				alt='Me'
				/>
			<img 
				id='me2'
				src='/sketchme.png'
				alt='Me two'
				/>
		</div>
	)
}

export default MyImgBox