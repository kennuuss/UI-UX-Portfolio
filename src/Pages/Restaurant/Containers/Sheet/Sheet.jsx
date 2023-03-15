import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='
			z-[10] mt-[-10vh] flex flex-col gap-[8rem]
			bg-restaurant__primary
			p-[2rem]
			dark:bg-restaurant__darkPrimary pc:w-[70vw]
			pc:gap-[15vh] pc:rounded-t-3xl pc:py-[5vh] pc:px-[3vw]'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
