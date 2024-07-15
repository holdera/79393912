import { NavLink } from 'react-router-dom';
import InboundIcon from './Svgs/InboundIcon';
import OutboundIcon from './Svgs/OutboundIcon';

export default function Activity({ data }) {
	return (
		<div className='activity-feed'>
			<ul>
				{data.map((call) => (
					<li className='activity-feed__call-details' key={call.id}>
						<NavLink to={call.id}>
							<div className='activity-feed__phone-icon'>
								{call.direction === 'inbound' ? (
									<InboundIcon
										fill={
											call.call_type === 'answered'
												? '#229d1a'
												: '#9d1d1a'
										}
									/>
								) : (
									<OutboundIcon
										fill={
											call.call_type === 'answered'
												? '#229d1a'
												: '#9d1d1a'
										}
									/>
								)}
							</div>
							<div>
								Duration : {call.duration}
								<br />
								caller's number {call.from}
								<br />
								callees number: {call.to}
								<br />
								created at: {call.created_at}
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
