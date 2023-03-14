import React from 'react'
import { Link } from 'react-router-dom'
import { H3, P } from './Headlines'
import MdBtn from './MdBtn'

export default function BigProject(props) {
	return (
		<div
			className='flex flex-col min-h-[70vh] items-center pc:items-start justify-between h-full'
			ref={(project) => props.projectsRefs.push(project)}
		>
			<div className=''>
				<H3>{props.project.title}</H3>
				<P>{props.project.description}</P>
			</div>

			<Link to={props.project.path}>
				<MdBtn> {props.project.btnText}</MdBtn>
			</Link>
		</div>
	)
}
