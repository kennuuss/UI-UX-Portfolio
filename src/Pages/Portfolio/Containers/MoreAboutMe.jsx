import React from 'react'
import { H3, P } from '../Components/Headlines'
import MdBtn from './../Components/MdBtn'

export default function MoreAboutMe(props) {
	const blocksList = [
		{
			title: 'Why me?',
			content: [
				'I will provide you a design that will make the growth of your business 3x faster.',
			],
		},
		{
			title: 'What you get?',
			content: [
				'I have experience with React and AdobeXD, which will help you quickly make a prototype of the project.',
			],
		},
	]
	return (
		<div className='flex min-h-[70vh] w-full flex-col justify-between'>
			<div className='flex w-full flex-col items-center pc:flex-row pc:items-baseline pc:justify-between '>
				{blocksList.map((item) => (
					<div className='flex flex-col pc:items-start'>
						<H3>{item.title}</H3>
						<ul className='flex flex-col'>
							{item.content.map((li) => (
								<li className='mb-[3rem] pc:mb-[3vh]'>
									<P>{li}</P>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='flex flex-col gap-[1rem] pc:gap-[3vh] items-center'>
				<MdBtn className=' mt-[3rem] pc:mt-0'>Contact Me</MdBtn>
			</div>
		</div>
	)
}
