import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityFeed, archiveCall } from '../store/call-actions';
import Activity from '../components/Activity';
import Button from '../components/ui/Button';

export default function HomePage() {
	const dispatch = useDispatch();
	const callActivity = useSelector((state) => state.calls.callActivity);

	useEffect(() => {
		dispatch(getActivityFeed());
	}, [dispatch]);

	function archiveAllCallsHandler() {
		activeCalls.map((item) => {
			dispatch(archiveCall({ call_id: item.id }));
		});
		console.log(activeCalls);
	}

	const activeCalls = callActivity.filter((call) => !call.is_archived);

	return (
		<>
			<Button onClick={archiveAllCallsHandler}>Archive All</Button>
			{activeCalls.length > 0 && <Activity data={activeCalls} />}
		</>
	);
}
