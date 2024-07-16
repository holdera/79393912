import { useDispatch } from 'react-redux';
import { callActions } from '../store/call-slice';
import { archiveCall } from '../store/call-actions';
import { NavLink } from 'react-router-dom';
import Button from './ui/Button';
import { formatDate } from '../utils/helpers';

import ArchiveIcon from './svgs/ArchiveIcon';
import InboundIcon from './svgs/InboundIcon';
import OutboundIcon from './svgs/OutboundIcon';

export default function ActivityItem({ call }) {
	const dispatch = useDispatch();
	const callDate = call.created_at.split('T')[0].toString();

	async function archiveCallHandler(id) {
		dispatch(archiveCall({ call_id: id }));
	}

	return (
		<div className='activity-feed__call-details'>
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
			<NavLink to={call.id}>
				<div className='activity-feed__from'>
					<p>{call.from}</p>
					<p>{call.id}</p>
				</div>
				<div className='activity-feed__date'>
					<p>{formatDate(callDate)}</p>
				</div>
			</NavLink>
			<div>
				<Button onClick={() => archiveCallHandler(call.id)}>
					<ArchiveIcon />
				</Button>
			</div>
		</div>
	);
}
