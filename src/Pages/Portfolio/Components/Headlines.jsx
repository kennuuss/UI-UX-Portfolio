import React from 'react'

export function H1(props) {
	return (
		<h1 className='mb-[3rem] text-center text-[6rem] pc:mb-[7vh] pc:text-[7vw]'>
			{props.children}
		</h1>
	)
}

export function H2(props) {
	return (
		<h2 className='mb-[3rem] text-center font-bold text-[4rem] pc:mb-[5vh] pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3
			className='mb-[1.5rem] text-start font-[500] text-[3rem] 
  pc:mb-[2.5vh] pc:text-[4vw]'
		>
			{props.children}
		</h3>
	)
}

export function P(props) {
	return (
		<p className='max-w-[60vw] text-[1.6rem] text-black-2 dark:text-white-3 pc:max-w-[20vw] text-left pc:text-[1.2vw]'>
			{props.children}
		</p>
	)
}
