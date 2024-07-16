import { createSlice } from '@reduxjs/toolkit';
import { getActivityFeed, unarchiveCalls, archiveCall } from './call-actions';

const callSlice = createSlice({
	name: 'calls',
	initialState: {
		callActivity: [],
		archivedCalls: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		updateCallActivity(state, action) {
			const updatedCall = action.payload;
			state.callActivity = state.callActivity.map((call) =>
				call.id === updatedCall.id ? updatedCall : call
			);
		},
		archiveCallState(state, action) {
			const callId = action.payload;
			const callIndex = state.callActivity.findIndex(
				(call) => call.id === callId
			);
			if (callIndex !== -1) {
				state.callActivity[callIndex].is_archived = true;
				state.archivedCalls.push(state.callActivity[callIndex]);
				state.callActivity.splice(callIndex, 1);
			}
		},
		archiveAllCalls(state, action) {
			state.callActivity = [...state.archivedCalls, ...action.payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getActivityFeed.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getActivityFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.callActivity = action.payload;
			})
			.addCase(getActivityFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(unarchiveCalls.fulfilled, (state, action) => {
				state.archivedCalls = [];
				state.callActivity = action.payload;
			})
			.addCase(archiveCall.fulfilled, (state, action) => {
				state.archivedCalls.push(action.payload);
				state.callActivity = state.callActivity.filter(
					(call) => call.id !== action.payload.id
				);
			});
	},
});

export const callActions = callSlice.actions;
export const callReducer = callSlice.reducer;

export default callSlice;
