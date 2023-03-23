import React from 'react'
import { H2 } from './Headlines'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className={`box-border flex min-h-screen flex-col 
		 	items-center px-[3rem] py-[8vh]
			pc:px-[10vw] ${props.item.header === 'Hello' && ' h-screen justify-between '} `}
		>
			<H2>{props.item.header}</H2>
			<div
				className={`relative flex w-full flex-col items-start ${
					props.item.header === 'Hello' && ' items-center '
				}`}
			>
				{props.children}
			</div>
		</section>
	)
}
