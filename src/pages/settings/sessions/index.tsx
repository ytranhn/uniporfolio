import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface ActiveSessionsProps {}

export default function ActiveSessions(props: ActiveSessionsProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Active Sessions" />
			<div className="mt-20">
				<h3 className=" font-bold text-xl">Current session</h3>
				<div className="rounded-2xl bg-primary mt-4 p-4">
					<p className="font-bold">Opera Browser</p>
					<p className="text-gray-500">online</p>
				</div>
			</div>
		</Layout>
	);
}
