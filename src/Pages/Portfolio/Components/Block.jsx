import React from 'react'
import { H2 } from './Headlines'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className={`flex min-h-screen flex-col items-center 
		 	px-[3rem] py-[8vh] box-border
			pc:px-[10vw] ${
				props.item.header === 'Hello' && ' justify-between '
			} `}
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
