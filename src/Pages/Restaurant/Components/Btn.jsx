import React from 'react'

export default function Btn(props) {
	return (
		<button
			className={`w-[1.2rem] transition-transform pc:w-[3vw] hover:pc:scale-[1.75] scale-150 active:pc:scale-150
			${props.className ? props.className : undefined}`}
			onClick={props.onClick ? props.onClick : null}
		>
			{props.children}
		</button>
	)
}
