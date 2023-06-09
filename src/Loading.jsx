import React from 'react'
import { loadSVG } from '../public/Portfolio/Svgs'
import { H1 } from './Pages/Portfolio/Components/Headlines'

export default function Loading() {
	return (
		<div
			className='flex h-screen items-center 
    justify-center bg-white text-black dark:bg-black dark:text-white'
		>
			<div className='mb-[10vh] flex flex-col items-center justify-between gap-[3vh]'>
				<H1>Loading</H1>
				{loadSVG}
			</div>
		</div>
	)
}
