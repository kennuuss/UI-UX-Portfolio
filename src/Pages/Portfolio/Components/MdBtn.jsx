import React from 'react'

export default function MdBtn(props) {
	return (
		<button
			className={`rounded-3xl bg-abstract px-[2rem] py-[1rem] text-[1.4rem] font-bold text-secondary transition-all   active:bg-opacity-80 dark:bg-darkAbstract pc:px-[2.4vw] pc:py-[1.6vh] pc:text-[1.4vw] ${
				props.className ? props.className : undefined
			}`}
		>
			{props.children}
		</button>
	)
}
