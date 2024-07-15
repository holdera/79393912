import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function RootLayout({ children }) {
	return (
		<>
			<div className='container'>
				<Header />
				<main id='content'>
					<Outlet />
				</main>
			</div>
		</>
	);
}
