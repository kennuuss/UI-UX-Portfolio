import React from 'react'

export default function SmallButton(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : null}
			className={`flex h-[36px] w-[36px] items-center justify-center p-0 transition-transform pc:w-[3vw] pc:hover:scale-110 pc:active:scale-100  
			${props.className ? props.className : undefined}}`}
			role={props.role ? props.role : undefined}
		>
			{props.children}
		</button>
	)
}
