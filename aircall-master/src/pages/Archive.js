import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { unarchiveCalls, getActivityFeed } from '../store/call-actions';
import Archives from '../components/Archives';
import Button from '../components/ui/Button';

export default function ArchivePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const callActivity = useSelector((state) => state.calls.callActivity);

	useEffect(() => {
		dispatch(getActivityFeed());
	}, [dispatch]);

	function unarchiveHandler() {
		dispatch(unarchiveCalls()).then(() => {
			navigate('/');
		});
	}

	return (
		<>
			<Button onClick={unarchiveHandler}>Unarchive all calls</Button>
			<section className='activity-container'>
				{callActivity && <Archives data={callActivity} />}
			</section>
		</>
	);
}

export async function loader() {
	const response = await fetch(`${ENDPOINT}/activities`);
	if (!response.ok) {
		throw json({ message: 'Failed to load activities' }, { status: 500 });
	}
	const data = await response.json();
	return data;
}

export async function action() {
	const response = await fetch(ENDPOINT + '/reset', {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw json({ message: 'archive reset failed.' }, { status: 500 });
	}

	return redirect('/');
}
