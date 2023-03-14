import React from 'react'
import BigProject from '../Components/BigProject'

export default function Projects(props) {
	return (
		<div className='flex flex-col h-full items-center pc:items-start justify-between w-full'>
			{props.projects.map((project, i) => (
				<BigProject
					project={project}
					projectsRefs={props.projectsRefs}
					key={i}
				/>
			))}
		</div>
	)
}
