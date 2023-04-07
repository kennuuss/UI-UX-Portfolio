import React from 'react'
import { H3, P, H4 } from '../Components/Headlines'
import MdBtn from './../Components/MdBtn'

export default function MoreAboutMe() {
	const blocksList = [
		{
			title: 'Why me?',
			content: [
				'You will ensure three times faster growth of your business with my UI design.',
				'All my clients have been amazed at how quickly I respond to their needs.',
			],
		},
		{
			title: 'My expertise',
			content: ['UI Design', 'UX Design', 'Visual Design', 'Mobile Design'],
		},
	]
	return (
		<div className='flex w-full flex-col items-start justify-between'>
			<div className='flex w-full flex-col justify-between pc:gap-[6vh]'>
				{blocksList.map((item, i) => (
					<div key={i} className='flex flex-col'>
						<H3>{item.title}</H3>
						<ul className='flex w-full flex-col gap-[1.5rem] pc:gap-[3vh]'>
							{item.content.map((li, i) => (
								<li key={i}>
									<P>{li}</P>
								</li>
							))}
						</ul>
					</div>
				))}
				<MdBtn className=' mt-[4rem] w-max pc:mt-[6vh] '>
					<a href='mailto:kennuuss1@gmail.com?subject=Hey!&body=What%27s up%3F'>
						Contact Me
					</a>{' '}
				</MdBtn>
			</div>
		</div>
	)
}
