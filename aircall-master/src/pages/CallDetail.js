import { Suspense } from 'react';
import { Await, defer, json, useRouteLoaderData } from 'react-router-dom';
import ActivityDetail from '../components/ActivityDetail';
import { ENDPOINT } from '../utils/endpoint';

export default function CallDetailPage() {
	const { callDetail } = useRouteLoaderData('call-detail');
	console.log(callDetail);

	return (
		<Suspense fallback={<p className='loading'>Loading....</p>}>
			<Await resolve={callDetail}>
				{(loadedCallDetail) => (
					<ActivityDetail activity={loadedCallDetail} />
				)}
			</Await>
		</Suspense>
	);
}

async function loadSingleActivityFeed(id) {
	const response = await fetch(`${ENDPOINT}/activities/${id}`);
	if (!response.ok) {
		throw json({ message: 'Fetch call log details.' }, { status: 500 });
	} else {
		const data = await response.json();
		return data;
	}
}

export async function loader({ request, params }) {
	const id = params.callId;

	return defer({
		callDetail: await loadSingleActivityFeed(id),
	});
}
