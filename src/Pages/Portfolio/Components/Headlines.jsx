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
		<h2 className='text-center text-[4rem] font-bold pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3
			className={`my-[3rem]	pc:my-[3vh]
			 text-center pc:text-start text-[3rem] font-[500]
			pc:text-[4vw] ${props.className ? props.className : null}`}
		>
			{props.children}
		</h3>
	)
}

export function P(props) {
	return (
		<p className='max-w-[70vw] mx-auto text-center pc:text-left text-[1.6rem] text-black-2 dark:text-white-3 pc:max-w-[20vw] pc:text-[1.2vw]'>
			{props.children}
		</p>
	)
}
