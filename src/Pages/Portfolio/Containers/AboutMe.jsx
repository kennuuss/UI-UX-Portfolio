import React from 'react'
import { arrowDownSVG } from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

function AboutMe(props) {
	return (
		<>
			<SmallButton
				className='ml-[50%] absolute bottom-[3rem] translate-x-[-50%] pc:bottom-[5vh] '
				aria-label='Scroll to projects'
				onClick={() =>
					props.blockRefs[1].scrollIntoView({ behavior: 'smooth' })
				}
			>
				{arrowDownSVG}
			</SmallButton>
		</>
	)
}

export default AboutMe
