import { NavLink } from 'react-router-dom';
import { convertDuration } from '../utils/helpers';
import {
	formatLongDate,
	formatDateTime,
	formatPhoneNumber,
} from '../utils/helpers';

import PersonIcon from '../images/icons/person-icon.svg';
import PhoneIcon from '../images/icons/phone-icon.svg';

export default function ActivityDetail({ activity }) {
	console.log(activity);

	const direction =
		activity.direction === 'inbound' ? 'Incoming' : 'Outgoing';
	const duration = convertDuration(activity.duration);
	const callDate = activity.created_at.split('T')[0].toString();
	const callTime = formatDateTime(activity.created_at);

	return (
		<div className='activity-container' id='activity-detail'>
			<div className='activity-detail__hero'>
				<img src={PersonIcon} alt='caller' />
				<h1>{formatPhoneNumber(activity.to)}</h1>
			</div>
			<div className='activity-detail__details'>
				<p>
					<b>{formatLongDate(callDate)}</b>
				</p>
				<div className='activity-detail__call-details'>
					{activity.call_type === 'missed' && (
						<p>
							{callTime} | <b>Missed</b>
						</p>
					)}

					{activity.call_type === 'answered' && (
						<div className='activity-detail__call-answer'>
							<p>{callTime} | </p>
							<p>
								<b>{direction} Call</b>
								<br />
								<span>{duration}</span>
							</p>
						</div>
					)}
				</div>
			</div>
			<div className='activity-detail__actions'>
				<NavLink
					to={`tel:${activity.to}`}
					className='activity-detail__action'
				>
					<img src={PhoneIcon} />
					Call
				</NavLink>
				<NavLink
					to={`sms:${activity.to}`}
					className='activity-detail__action'
				>
					<img src={PhoneIcon} />
					Message
				</NavLink>
				<button className='activity-detail__action'>Block</button>
			</div>
		</div>
	);
}
