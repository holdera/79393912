import { NavLink } from 'react-router-dom';

import ArchiveIcon from '../../images/icons/archive-icon.svg';
import ChatIcon from '../../images/icons/chat-icon.svg';
import PhoneIcon from '../../images/icons/phone-icon.svg';
import UserIcon from '../../images/icons/user-icon.svg';

export default function Navigation() {
	const navLinks = [
		{
			icon: PhoneIcon,
			name: 'Calls',
			url: '/',
		},
		{
			icon: UserIcon,
			name: 'User',
			url: '/user',
		},
		{
			icon: ChatIcon,
			name: 'Chat',
			url: '/chat',
		},
		{
			icon: ArchiveIcon,
			name: 'Archive',
			url: '/archive',
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
								<img src={link.icon} alt={link.name} />
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
