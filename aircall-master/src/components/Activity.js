import ActivityItem from './ActivityItem';
import { defer, json } from 'react-router-dom';
import { ENDPOINT } from '../utils/endpoint';

export default function Activity({ data }) {
	return (
		<div className='activity-container' id='activity-feed'>
			<ul>
				{data
					.sort(
						(a, b) =>
							new Date(b.created_at) - new Date(a.created_at)
					)
					.map((call) => (
						<ActivityItem key={call.id} call={call} />
					))}
			</ul>
		</div>
	);
}

export async function action({ params }) {
	const { callId } = params;
	const response = await fetch(`${ENDPOINT}/${callId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ is_archived: true }),
	});

	if (!response.ok) {
		throw json({ message: 'Could not archive call' }, { status: 500 });
	}

	const archivedCall = await response.json();

	return defer({ archivedCall });
}
