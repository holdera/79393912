import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINT } from '../utils/endpoint';
import { callActions } from './call-slice';

export const getActivityFeed = createAsyncThunk(
	'calls/getActivityFeed',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${ENDPOINT}/activities`);
			if (!response.ok) {
				throw new Error('Failed to fetch call activities.');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const unarchiveCalls = createAsyncThunk(
	'calls/unarchiveAllCalls',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${ENDPOINT}/reset`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Failed to unarchive all calls.');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const archiveCall = createAsyncThunk(
	'calls/archiveCall',
	async ({ call_id, navigate }, { rejectWithValue }) => {
		try {
			const response = await fetch(`${ENDPOINT}/activities/${call_id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ is_archived: true }),
			});
			if (!response.ok) {
				throw new Error('Failed to archive the call.');
			}
			const call = await response.json();
			navigate('/'); // Redirect after successful archive
			return call;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const archiveAllCalls = () => {
	return (dispatch, getState) => {
		const { callActivity } = getState().calls;
		dispatch(callActions.archiveAllCalls(callActivity));
	};
};
