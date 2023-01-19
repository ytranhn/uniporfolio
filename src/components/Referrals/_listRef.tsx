import * as React from 'react';
import { useState } from 'react';

export interface ListRefProps {}

export default function ListRef(props: ListRefProps) {
	const [data, setData] = useState<any>();
	return (
		<div>
			<h1 className="mt-10 mb-1 font-bold text-xl">My referrals</h1>
			<p className="text-gray-500 font-light text-xs">Showing last 100 people</p>
			{!data && (
				<div className="py-20 flex flex-col justify-center text-center">
					<p className="text-base text-gray-500">You do not have any referrals yet</p>
				</div>
			)}
		</div>
	);
}
