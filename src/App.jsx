import {
	BrowserRouter as Router,
	Routes,
	Route,
	HashRouter,
} from 'react-router-dom'
import Portfolio from './Pages/Portfolio/Portfolio'
import Restaurant from './Pages/Restaurant/Restaurant'
import Error from './Error'
import Loading from './Loading.jsx'
import { useState, useEffect } from 'react'

export default function App() {
	const [loading, setLoading] = useState(true)

	const setTheme = (themeName) => {
		themeName === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	useEffect(() => {
		async function loadCSS() {
			/* when websites starts */
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? setTheme('dark')
				: setTheme('light')

			/* at the time of work */
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', (e) => {
					e.matches ? setTheme('dark') : setTheme('light')
				})

			setLoading(false)
		}

		loadCSS()
	}, [window.location.pathname])
	return loading === true ? (
		<Loading />
	) : (
		<HashRouter>
			<Routes>
				<Route exact path='/' element={<Portfolio />} />
				<Route exact path='/Restaurant' element={<Restaurant />} />
				<Route exact path='*' element={<Error />} />
			</Routes>
		</HashRouter>
	)
}
