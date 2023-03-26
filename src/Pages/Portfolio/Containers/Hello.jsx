import React from 'react'
import { arrowDownSVG } from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'
import { useState, useEffect } from 'react'

export default function Hello(props) {
	const [isUp, setIsUp] = useState(false)

	useEffect(() => {
		setTimeout(() => setIsUp(true), 200)
	}, [])

	return (
		<>
			<SmallButton
				className={` transition-all ${
					isUp ? ' translate-y-0 ' : ' translate-y-32 '
				}  `}
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
