import React from 'react'

export default function MdBtn(props) {
	return (
		<button
			className={`rounded-3xl bg-green px-[2rem] py-[1rem] text-[1.4rem] font-bold text-white opacity-60 transition-opacity hover:opacity-75 active:opacity-60 dark:bg-black-2 pc:px-[2.4vw] pc:py-[1.6vh] pc:text-[1.4vw] ${
				props.className ? props.className : undefined
			}`}
		>
			{props.children}
		</button>
	)
}
