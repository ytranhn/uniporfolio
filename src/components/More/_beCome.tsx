import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export interface BeComeMemberProps {}

export default function BeComeMember(props: BeComeMemberProps) {
	const router = useRouter();
	return (
		<div
			className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center p-3 mt-4 cursor-pointer"
			onClick={() => router.push('/subscriptions/media')}
		>
			<div className="pr-1">
				<p className="text-lg font-bold">Become a member</p>
				<p className="text-base font-light mt-2 opacity-68">
					Higher income, bigger limits and unique username — become member now to get this features!
				</p>
			</div>
			<ChevronRightIcon className="h-8" />
		</div>
	);
}
