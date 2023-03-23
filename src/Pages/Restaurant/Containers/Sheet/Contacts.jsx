import React from 'react'
import { H2 } from '../../Components/Headlines'
import MdBtn from '../../Components/MdBtn'

export default function Contacts(props) {
	return (
		<div className='flex flex-col justify-center' ref={props.refContacts}>
			<H2>Contacts</H2>

			<form onSubmit={console.log('Form was submited')}>
				<div className='flex flex-col items-center gap-[1rem]  pc:gap-[2vw]'>
					<input
						type='text'
						className='w-full  rounded-3xl bg-restaurant__secondary px-4 py-[0.5rem] text-[1.4rem] placeholder-restaurant__lessImportantText outline-none dark:bg-restaurant__darkSecondary pc:rounded-[1.6vw] pc:px-[1vw]  pc:py-[1.5vh] pc:text-[1.6vw]'
						placeholder='Your Name'
						required
					/>
					<input
						className='w-full  rounded-3xl bg-restaurant__secondary px-4 py-[0.5rem] text-[1.4rem] placeholder-restaurant__lessImportantText outline-none dark:bg-restaurant__darkSecondary pc:rounded-[1.6vw] pc:px-[1vw]  pc:py-[1.5vh] pc:text-[1.6vw]'
						type='mail'
						placeholder='Your Mail'
						required
					/>
					<textarea
						className={`w-full rounded-3xl bg-restaurant__secondary px-4 py-[0.5rem] text-[1.4rem] placeholder-restaurant__lessImportantText outline-none dark:bg-restaurant__darkSecondary pc:rounded-[1.6vw] pc:px-[1vw] pc:py-[1.5vh]  pc:text-[1.6vw]`}
						rows={4}
						placeholder='Your Feedback'
						required
					/>
				</div>
			</form>
			<MdBtn className=' mt-[2rem] pc:mt-[4vw] '>Send</MdBtn>
		</div>
	)
}
