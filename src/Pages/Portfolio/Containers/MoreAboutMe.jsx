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
			content: [
				<H4>UI Design</H4>,
				<H4>UX Design</H4>,
				<H4>Visual Design</H4>,
				<H4>Mobile Design</H4>,
			],
		},
	]
	return (
		<div className='flex min-h-[70vh] w-full flex-col items-start pc:items-center justify-between'>
			<div className='flex w-full flex-col justify-between pc:flex-row'>
				{blocksList.map((item, i) => (
					<div className='flex flex-col'>
						<H3
							className={`w-full ${
								i === blocksList.length - 1 && ' pc:text-right '
							}`}
						>
							{item.title}
						</H3>
						<ul className='flex w-full flex-col gap-[1.5rem] pc:gap-[3vh]'>
							{item.content.map((li) => (
								<li>
									<P
										className={`${
											i === blocksList.length - 1 && ' pc:text-right '
										}`}
									>
										{li}
									</P>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<MdBtn className=' mt-[3rem] pc:mt-[3vw] '>Contact Me</MdBtn>
		</div>
	)
}
