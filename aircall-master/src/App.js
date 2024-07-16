import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/structure/RootLayout.js';
import Home, { loader as activityFeedLoader } from './pages/Home.js';
import CallDetailPage, {
	loader as callDetailLoader,
} from './pages/CallDetail.js';
import ArchivePage, { action as unarchiveAction } from './pages/Archive.js';
import { action as activityAction } from './components/Activity.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: ':callId',
				id: 'call-detail',
				loader: callDetailLoader,
				children: [
					{
						index: true,
						element: <CallDetailPage />,
					},
				],
			},
			{
				path: 'archive',
				element: <ArchivePage />,
				action: unarchiveAction,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
