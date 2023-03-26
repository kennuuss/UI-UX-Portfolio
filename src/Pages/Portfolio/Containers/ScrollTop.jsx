import React from 'react'
import { useState, useEffect } from 'react'
import { arrowTopSVG } from '../../../../public/Portfolio/Svgs'
import SmallButton from '../Components/SmallButton'

export default function ScrollTop(props) {
	const [showBtn, setShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const topOffset = props.blockRefs[1].offsetTop - 10
			const scrollTop = document.documentElement.scrollTop
			setShow(scrollTop > topOffset)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<SmallButton
			onClick={() => {
				props.blockRefs[0].scrollIntoView({ behavior: 'smooth' })
			}}
			aria-label='Scroll to top'
			className={`fixed pc:bottom-[4vh] right-[1.6rem] bottom-[60vh] pc:right-[4vh] ${showBtn ? ' translate-y-0 ' : ' pc:translate-y-20 translate-y-[100vh] '}`}
		>
			{arrowTopSVG}
		</SmallButton>
	)
}
