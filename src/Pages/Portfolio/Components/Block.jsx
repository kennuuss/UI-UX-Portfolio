import React from 'react'
import { H2 } from './Headlines'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className='relative flex min-h-[100vh] flex-col items-center py-[3rem] pc:py-[5vh] pc:px-[10vw] px-[3rem] '
		>
			<H2>{props.item.header}</H2>
			<div className='relative flex min-h-[70vh] w-[100%] flex-col items-start'>
				{props.children}
			</div>
		</section>
	)
}
