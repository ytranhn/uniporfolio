import * as React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
export interface TopMoreProps {}

export default function TopMore(props: TopMoreProps) {
	return (
		<div className="mt-4 p-4 rounded-xl flex items-center bg-primary">
			<div className="p-3 rounded-xl bg-tertiary">
				<UserIcon className="h-7 w-7 text-gray-500" />
			</div>
			<div className="ml-4">
				<p className="text-lg font-bold">Erik</p>
				<a className="flex items-center text-gray-400 text-base cursor-pointer">
					<span>Go to profile</span>
					<ChevronRightIcon className="h-5 text-gray-400" />
				</a>
			</div>
		</div>
	);
}
