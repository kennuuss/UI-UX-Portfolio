import React from 'react'

export function H1(props) {
	return (
		<h1 className='mb-[3rem] pc:mb-[2.5vh] text-center text-[3.6rem] font-bold text-restaurant__text  pc:text-[7vw]'>
			{props.children}
		</h1>
	)
}

export function H2(props) {
	return (
		<h2 className='mb-[2rem] text-center text-[3rem] font-bold text-restaurant__text pc:mb-[5vh] pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3 className='mb-[1rem] text-center text-[2rem] font-bold text-restaurant__text pc:mb-[3vh] pc:text-[2.4vw]'>
			{props.children}
		</h3>
	)
}
