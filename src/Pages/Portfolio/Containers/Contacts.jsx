import React from 'react'
import {
	codeSVG,
	linktreeSVG,
} from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'
import { useState } from 'react'

export default function Contacts() {
	const [activeTooltip, setActiveTooltip] = useState(-1)

	const linksList = [
		{
			svg: codeSVG,
			link: 'https://github.com/kennuuss/UI-UX-Portfolio/fork',
			tooltip: 'Fork this project',
		},
		{
			svg: linktreeSVG,
			link: 'https://linktr.ee/kennuuss',
			tooltip: 'Socials / Linktree',
		}
	]
	return (
		<footer className='flex h-max flex-col items-center'>
			<ul className='my-[1.6rem] flex justify-between pc:my-[2vw] w-max pc:gap-[3vw] gap-[3rem]'>
				{linksList.map((item, i) => (
					<li className='flex items-center' key={i}>
						<SmallButton Footer={true} className=' relative '>
							<div
								className={`absolute top-[-130%] cursor-default whitespace-nowrap rounded-lg bg-abstract bg-opacity-50 px-2 py-1 font-bold 
								transition-all dark:bg-darkAbstract pc:rounded-[0.8vw] pc:px-[1vw] pc:py-[0.5vw] ${
									activeTooltip === i
										? ' translate-y-0 opacity-0 pc:opacity-100 '
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
