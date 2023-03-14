import React from 'react'

export function H1(props) {
	return (
		<h1 className='mb-[3rem] text-center text-[3.6rem] font-bold pc:mb-[7vh] pc:text-[7vw]'>
			{props.children}
		</h1>
	)
}

export function H2(props) {
	return (
		<h2 className='mb-[2rem] text-center text-[3rem] font-bold pc:mb-[5vh] pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3 className='text-center font-bold text-[2rem] mb-[1rem] pc:mb-[3vh] pc:text-[2.4vw]'>
			{props.children}
		</h3>
	)
}
