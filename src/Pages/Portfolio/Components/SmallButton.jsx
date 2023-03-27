import React from 'react'

export default function SmallButton(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : null}
			className={`flex h-[36px] w-[36px] items-center justify-center text-secondary transition-transform dark:text-darkSecondary pc:h-[3vw] pc:w-[3vw]   
			${props.className ? props.className : undefined} 
			${props.Footer === true ? '' : ' pc:hover:scale-110 pc:active:scale-100 '}}`}
			role={props.role ? props.role : undefined}
		>
			{props.children}
		</button>
	)
}
