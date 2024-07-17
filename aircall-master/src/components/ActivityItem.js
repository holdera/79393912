import { useDispatch } from 'react-redux';
import { archiveCall } from '../store/call-actions';
import { NavLink } from 'react-router-dom';
import Button from './ui/Button';
import { formatDate, formatPhoneNumber } from '../utils/helpers';

import ArchiveIcon from './Svgs/ArchiveIcon';
import InboundIcon from './Svgs/InboundIcon';
import OutboundIcon from './Svgs/OutboundIcon';

export default function ActivityItem({ call }) {
	const dispatch = useDispatch();
	const callDate = call.created_at.split('T')[0].toString();

	async function archiveCallHandler(id) {
		dispatch(archiveCall({ call_id: id }));
	}

	const callType = call.call_type === 'answered';

	return (
		<div className='activity-feed__call-details'>
			<div className='activity-feed__phone'>
				<div className='activity-feed__phone-icon'>
					{call.direction === 'inbound' ? (
						<InboundIcon fill={callType ? '#229d1a' : '#9d1d1a'} />
					) : (
						<OutboundIcon fill={callType ? '#229d1a' : '#9d1d1a'} />
					)}
				</div>
				<span>
					{call.direction === 'inbound' ? 'Incoming' : 'Outgoing'}
				</span>
			</div>
			<NavLink to={call.id}>
				<div className='activity-feed__from'>
					<p>{formatPhoneNumber(call.to)}</p>
				</div>
				<div className='activity-feed__date'>
					<p>{formatDate(callDate)}</p>
				</div>
			</NavLink>
			<div>
				<Button
					className='activity-feed__button'
					onClick={() => archiveCallHandler(call.id)}
				>
					<ArchiveIcon />
				</Button>
			</div>
		</div>
	);
}
