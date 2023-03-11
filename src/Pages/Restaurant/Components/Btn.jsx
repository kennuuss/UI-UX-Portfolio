import React from 'react'

export default function Btn(props) {
	return (
		<button
			className={`text-[1.2rem] h-max transition-transform pc:text-[1.2vw] hover:pc:scale-125 hover:pc:duration-75 active:pc:scale-100 active:pc:duration-[50] ${
				props.className ? props.className : undefined
			}`}
			onClick={props.onClick ? props.onClick : null}
		>
			{props.children}
		</button>
	)
}
