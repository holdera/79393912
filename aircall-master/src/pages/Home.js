import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityFeed, archiveCall } from '../store/call-actions';
import { ENDPOINT } from '../utils/endpoint';
import Activity from '../components/Activity';
import Button from '../components/ui/Button';

export default function HomePage() {
	const dispatch = useDispatch();
	const callActivity = useSelector((state) => state.calls.callActivity);

	useEffect(() => {
		dispatch(getActivityFeed());
	}, [dispatch]);

	function archiveAllCallsHandler() {
		//dispatch(archiveAllCalls());
		activeCalls.map((item) => {
			dispatch(archiveCall({ call_id: item.id }));
		});
		console.log(activeCalls);
	}

	// Filter out archived calls
	const activeCalls = callActivity.filter((call) => !call.is_archived);

	return (
		<>
			<Button onClick={archiveAllCallsHandler}>Archive all calls</Button>
			{activeCalls.length > 0 && <Activity data={activeCalls} />}
		</>
	);
}

// export async function loader() {
// 	const response = await fetch(`${ENDPOINT}/activities`);
// 	if (!response.ok) {
// 		throw json({ message: 'Failed to load activities' }, { status: 500 });
// 	}
// 	const data = await response.json();
// 	return data;
// }
