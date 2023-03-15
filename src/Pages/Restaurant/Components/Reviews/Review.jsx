import React from 'react'

export default function Review(props) {
	return (
		<div
			className='relative flex h-full
			w-full flex-col rounded-md bg-restaurant__secondary
			dark:bg-restaurant__darkSecondary
			p-[1rem]
			pc:px-[1vw] pc:py-[3vh]'
		>
			{props.children}
		</div>
	)
}
