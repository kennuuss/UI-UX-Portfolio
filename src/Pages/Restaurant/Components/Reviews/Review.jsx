import React from 'react'

export default function Review(props) {
	return (
		<div
			className='relative flex h-full
			w-full flex-col rounded-3xl pc:rounded-[1.6vw] bg-restaurant__secondary
			dark:bg-restaurant__darkSecondary
			p-[1rem]
			pc:p-[2vh]'
		>
			{props.children}
		</div>
	)
}
