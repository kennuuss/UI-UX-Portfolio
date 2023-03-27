import React from 'react'
import {
	githubSVG,
	telegramSVG,
	upworkSVG,
	codeSVG,
} from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'
import { useState } from 'react'

export default function Contacts() {
	const [activeTooltip, setActiveTooltip] = useState(-1)

	const linksList = [
		{
			svg: codeSVG,
			link: 'https://github.com/kennuuss/UI-UX-Portfolio',
			tooltip: 'Fork this project',
		},
		{
			svg: githubSVG,
			link: 'https://github.com/kennuuss',
			tooltip: 'Github',
		},
		{
			svg: telegramSVG,
			link: 'https://t.me/kennuuss',
			tooltip: 'Telegram',
		},
		{
			svg: upworkSVG,
			link: 'https://www.upwork.com/freelancers/~01b7322956d1e3f011',
			tooltip: 'Upwork Profile',
		},
	]
	return (
		<footer className='flex h-max flex-col items-center'>
			<ul className='my-[1.6rem] flex w-[50vw] justify-between pc:my-[2vw] pc:w-[20vw] pc:gap-[3vw]'>
				{linksList.map((item, i) => (
					<li className='flex items-center' key={i}>
						<SmallButton Footer={true} className=' relative '>
							<div
								className={`absolute top-[-130%] cursor-default whitespace-nowrap rounded-lg pc:rounded-[0.8vw] bg-abstract bg-opacity-50 px-2 py-1 
								font-bold transition-all dark:bg-darkAbstract pc:px-[1vw] pc:py-[0.5vw] ${
									activeTooltip === i
										? ' translate-y-0 pc:opacity-100 opacity-0 '
										: ' translate-y-2 opacity-0 '
								}`}
							>
								{item.tooltip}
							</div>
							<a
								target='_blank'
								className='text-secondary dark:text-darkSecondary'
								href={item.link}
								onMouseEnter={() => setActiveTooltip(i)}
								onMouseLeave={() => setActiveTooltip(-1)}
							>
								{item.svg}
							</a>
						</SmallButton>
					</li>
				))}
			</ul>
		</footer>
	)
}
