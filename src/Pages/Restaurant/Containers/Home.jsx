import React from 'react'
import { H1, P } from '../Components/Headlines'

function Home(props) {
	return (
		<>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='h-[120vh] w-screen object-cover blur-md dark:brightness-50'
				alt='Brooklyn`s restaurant'
			/>

			<div className='absolute top-[16vh] items-center px-[2rem] pc:top-[5vh] '>
				<H1>Restaurant</H1>
			</div>
			<button
				onClick={props.toMain}
				className='absolute bottom-[4vh] w-[3rem] 
				transition-transform pc:bottom-[5vh] pc:w-[3vw]'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</>
	)
}

export default Home
