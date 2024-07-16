import { convertDuration } from '../utils/helpers';

export default function ActivityDetail({ activity }) {
	console.log(activity);

	const direction =
		activity.direction === 'inbound' ? 'Incoming' : 'Outgoing';
	const duration = convertDuration(activity.duration);

	return (
		<div className='activity-container' id='activity-detail '>
			<div className='activity-detail__hero'></div>
			<div className='__date'>
				<p>
					{activity.created_at} |{' '}
					{activity.call_type === 'missed' && <b>Missed</b>}
					{activity.call_type === 'answered' && (
						<>
							<b>{direction} Call</b> / {duration}
						</>
					)}
				</p>
			</div>
		</div>
	);
}
