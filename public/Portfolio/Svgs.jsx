import React from 'react'

export const linktreeSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z'
		/>
	</svg>
)

export const githubSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-full w-full'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
		/>
	</svg>
)

export const codeSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-full w-full'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z'
		/>
	</svg>
)



export const arrowDownSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 20 20'
		className='w-full'
		fill='currentColor'
	>
		<path
			fillRule='evenodd'
			d='M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z'
			clipRule='evenodd'
		/>
	</svg>
)

export const loadSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='2.4rem'
		height='2.4rem'
		viewBox='0 0 24 24'
	>
		<path
			fill='none'
			stroke='currentColor'
			strokeDasharray='15'
			strokeDashoffset='15'
			strokeLinecap='round'
			strokeWidth='3'
			d='M12 3C16.9706 3 21 7.02944 21 12'
		>
			<animate
				fill='freeze'
				attributeName='stroke-dashoffset'
				dur='0.3s'
				values='15;0'
			/>
			<animateTransform
				attributeName='transform'
				dur='0.9s'
				repeatCount='indefinite'
				type='rotate'
				values='0 12 12;360 12 12'
			/>
		</path>
	</svg>
)

export const closeSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z'
		/>
	</svg>
)

export const arrowRightSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-full w-full'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			d='M5.7 17.3q-.275-.275-.275-.7t.275-.7L9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3Zm6.6 0q-.275-.275-.275-.7t.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3Z'
		/>
	</svg>
)

export const arrowTopSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 24 24'
		className='h-[32px] w-[32px] pc:h-full pc:w-full'
	>
		<path
			fillRule='evenodd'
			d='M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z'
			clipRule='evenodd'
		/>
	</svg>
)

export const sunSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className='hidden w-[32px] dark:block pc:w-full'
	>
		<path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
	</svg>
)

export const moonSVG = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className='h-[32px] w-[32px] dark:hidden pc:h-full pc:w-full'
	>
		<path
			fillRule='evenodd'
			d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
			clipRule='evenodd'
		/>
	</svg>
)
