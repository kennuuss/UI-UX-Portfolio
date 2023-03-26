import React from 'react'

export default function MdBtn(props) {
	return (
		<button
			className={`rounded-2xl pc:rounded-[2vw] bg-abstract px-[2rem] py-[1rem] text-[1.4rem] font-bold text-secondary transition-all pc:text-[1.6vw] hover:opacity-80 active:opacity-60 dark:bg-darkAbstract pc:px-[2.4vw] pc:py-[1.6vh] ${
				props.className ? props.className : undefined
			}`}
		>
			{props.children}
		</button>
	)
}
