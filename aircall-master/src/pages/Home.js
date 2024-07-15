import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import Activity from '../components/Activity';

export default function HomePage() {
	const { userCalls } = useLoaderData();
	console.log(userCalls);
	return (
		<Suspense fallback={<p className='loader'>Loading...</p>}>
			<Await resolve={userCalls}>
				{(calls) => <Activity data={calls} />}
			</Await>
		</Suspense>
	);
}

async function loadActivityFeed() {
	const response = await fetch(
		'https://aircall-backend.onrender.com/activities'
	);
	if (!response.ok) {
		throw json({ message: 'Could not fetch call logs.' }, { status: 500 });
	} else {
		const data = await response.json();
		console.log(data);
		return data;
	}
}

export function loader() {
	return defer({
		userCalls: loadActivityFeed(),
	});
}
