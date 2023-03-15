import React from 'react'

export default function Dot(props) {
	return (
		<button
			onClick={() => props.setImg(props.i)}
			className='
			mx-3 flex h-[1rem] 
			w-[1rem] items-center justify-center rounded-full bg-white transition-transform 
			pc:mx-1 pc:h-[1vw] pc:w-[1vw]'
		>
			{props.isActive && (
				<span
					className='h-[60%] w-[60%] rounded-full
				 bg-restaurant__primary dark:bg-restaurant__darkPrimary'
				/>
			)}
		</button>
	)
}
