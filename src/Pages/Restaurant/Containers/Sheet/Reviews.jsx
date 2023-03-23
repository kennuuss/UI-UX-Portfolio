import React from 'react'
import Review from '../../Components/Reviews/Review'
import { H2, H3, P } from '../../Components/Headlines'
import MdBtn from './../../Components/MdBtn'

export default function Reviews(props) {
	const reviewsList = [
		{
			name: 'Carlo S.',
			description:
				"The food didn't take as long to prepare as other restaurants nearby and the environment is very cozy.",
		},
		{
			name: 'Stepan G.',
			description:
				"I really liked the atmosphere, it's a quiet place where the lighting is perfectly adjusted and the food is beautifully served. 10/10 for these prices.",
		},
		{
			name: 'Roman P.',
			description:
				'I liked that there is a subway near the restaurant, and if you need to leave, it does not take long to return.',
		},
	]
	return (
		<div ref={props.refReviews} className='flex flex-col items-center'>
			<H2>Feedback</H2>
			<div className='flex flex-col gap-[1rem] pc:flex-row pc:gap-[2vw] '>
				{reviewsList.map((item, i) => (
					<Review {...item} key={i}>
						<div className='flex flex-col justify-center'>
							<H3>{item.name}</H3>
						</div>
						<P className=' text-left '>{item.description}</P>
					</Review>
				))}
			</div>
			<MdBtn className=' mt-[1rem] pc:mt-[4vw]'>View More</MdBtn>
		</div>
	)
}
