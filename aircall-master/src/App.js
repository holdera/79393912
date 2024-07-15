import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/structure/RootLayout.js';
import Home, { loader as activityFeedLoader } from './pages/Home.js';
import CallDetailPage, {
	loader as callDetailLoader,
} from './pages/CallDetail.js';
import Archive from './pages/Archive.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: activityFeedLoader,
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
			{ path: 'archive', element: <Archive /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
