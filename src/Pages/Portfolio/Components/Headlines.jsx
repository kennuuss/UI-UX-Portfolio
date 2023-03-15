import React from 'react'

export function H1(props) {
	return (
		<h1 className='mb-[3rem] text-center text-[6rem] text-secondary dark:text-darkSecondary pc:mb-[7vh] pc:text-[7vw]'>
			{props.children}
		</h1>
	)
}

export function H2(props) {
	return (
		<h2 className='text-center text-[4rem] font-bold text-secondary dark:text-darkSecondary pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3
			className={`my-[3rem]	text-center
			 text-[3rem] font-[500] text-secondary dark:text-darkSecondary pc:my-[3vh] pc:text-start
			pc:text-[4vw] ${props.className ? props.className : null}`}
		>
			{props.children}
		</h3>
	)
}

export function P(props) {
	return (
		<p className='mx-auto max-w-[70vw] text-center text-[1.6rem] text-secondary dark:text-darkSecondary pc:max-w-[20vw] pc:text-left pc:text-[1.2vw]'>
			{props.children}
		</p>
	)
}
