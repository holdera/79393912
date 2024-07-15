import { NavLink } from 'react-router-dom';

export default function Navigation() {
	const navLinks = [
		{
			url: '/',
			name: 'Activity',
		},

		{
			url: '/archive',
			name: 'Archive',
		},
	];
	return (
		<>
			<nav>
				<ul>
					{navLinks.map((link) => (
						<li key={link.name}>
							{' '}
							<NavLink
								to={link.url}
								className={({ isActive }) =>
									isActive ? 'active' : undefined
								}
								end
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
