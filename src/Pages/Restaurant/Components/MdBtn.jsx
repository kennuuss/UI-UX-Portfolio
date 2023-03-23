import React from 'react'

export default function MdBtn(props) {
	return (
		<button
			type='submit'
			className={`pc:rounded--full mx-auto rounded-full  bg-restaurant__secondary py-[0.8rem] px-[1.6rem] text-[1.5rem] font-bold transition-all hover:scale-100 dark:bg-restaurant__darkSecondary pc:w-[30%] pc:py-[1.5vh] pc:text-[1.6vw] pc:hover:w-[35%] pc:active:w-[30%] ${
				props.className && props.className
			}`}
		>
			{props.children}
		</button>
	)
}
