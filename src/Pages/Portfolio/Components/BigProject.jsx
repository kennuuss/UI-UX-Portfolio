import React from 'react'
import { Link } from 'react-router-dom'
import { H3, P } from './Headlines'

export default function BigProject(props) {
	return (
		<div ref={(project) => props.projectsRefs.push(project)}>
			<H3>{props.project.title}</H3>
			<P>{props.project.description}</P> 
			
			<Link
				to={props.project.path}
				onClick={() => reload()}
				className='absolute bottom-0'
			>
				<button
					className='rounded-2xl bg-white-3 px-[2rem] text-[1.4rem] font-bold text-white transition-colors dark:bg-black-1 dark:text-gray-text pc:py-[2vh]
    pc:px-[2.3vw] pc:text-[1.4vw] pc:hover:bg-black pc:dark:hover:bg-black-2'
				>
					{props.project.btnText}
				</button>
			</Link>
		</div>
	)
}
