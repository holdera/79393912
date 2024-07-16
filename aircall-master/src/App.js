import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/structure/RootLayout';
import Home from './pages/Home';
import CallDetailPage, { loader as callDetailLoader } from './pages/CallDetail';
import ArchivePage, { action as unarchiveAction } from './pages/Archive';
import ChatPage from './pages/Chats';
import UserPage from './pages/User';

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
			{
				path: 'chat',
				element: <ChatPage />,
			},
			{
				path: 'user',
				element: <UserPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
