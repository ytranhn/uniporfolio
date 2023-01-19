import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import { useState } from 'react';
import Layout from 'sections/Layout';

export interface StorageProps {}

export default function Storage(props: StorageProps) {
	const [data, setData] = useState<any>();
	return (
		<Layout>
			<HeaderLayout iconBack title="Purchased Content" />
			<div className="pt-20">
				{!data && (
					<div className="pt-40 flex flex-col justify-center text-center">
						<p className="text-base text-gray-500">You haven't purchased any media yet</p>
						<p className="text-base text-gray-500">Purchased private media will appear here</p>
					</div>
				)}
			</div>
		</Layout>
	);
}
