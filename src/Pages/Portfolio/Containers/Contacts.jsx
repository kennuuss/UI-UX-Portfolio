import React from 'react'
import {
	githubSVG,
	telegramSVG,
	upworkSVG,
} from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

export default function Contacts() {
	const linksList = [
		{
			svg: githubSVG,
			link: 'https://github.com/kennuuss',
		},
		{
			svg: telegramSVG,
			link: 'https://t.me/kennuuss',
		},
		{
			svg: upworkSVG,
			link: 'https://www.upwork.com/freelancers/~01b7322956d1e3f011',
		},
	]
	return (
		<footer className='flex h-max flex-col items-center'>
			<nav className='flex h-full justify-center'>
				<ul className='mb-[1.6rem] flex w-[50vw] justify-between pc:mb-[2vw] pc:w-[20vw] pc:gap-[3vw]'>
					{linksList.map((item, i) => (
						<li className='flex items-center' key={i}>
							<SmallButton>
								<a
									target='_blank'
									className='text-secondary hover:opacity-90 active:opacity-80 dark:text-darkSecondary'
									href={item.link}
								>
									{item.svg}
								</a>
							</SmallButton>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}
