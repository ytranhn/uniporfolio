import * as React from 'react';
import {
	PlusCircleIcon,
	BoltIcon,
	PencilIcon,
	UserPlusIcon,
	SparklesIcon,
	UserGroupIcon,
	QuestionMarkCircleIcon,
	Cog6ToothIcon,
	MegaphoneIcon,
} from '@heroicons/react/24/solid';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface MenuMoreProps {}

export default function MenuMore(props: MenuMoreProps) {
	const router = useRouter();
	return (
		<div>
			<div className="mt-4 p-3 rounded-xl flex items-center bg-primary cursor-pointer">
				<PlusCircleIcon className="h-6 text-gray-500" />
				<span className="ml-4 font-bold text-gray-500 text-lg">Add Account</span>
			</div>
			<div className="mt-4 pl-3 rounded-xl bg-primary">
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Balance</span>
					<span className="text-gray-500 text-base">0 BALSA</span>
				</div>
				<div
					className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
					onClick={() => router.push('/subscriptions')}
				>
					<span className="font-medium text-lg">Subscriptions</span>
					<BoltIcon className="h-6 w-6 text-cyan-500" />
				</div>
				<div
					className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
					onClick={() => router.push('/storage')}
				>
					<span className="font-medium text-lg">Purchased Content</span>
					<CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
				</div>
				<Link
					href={{
						pathname: '/other',
						query: { w: 'edit' },
					}}
					className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer"
				>
					<span className="font-medium text-lg">Edit profile</span>
					<PencilIcon className="h-6 w-6 text-gray-500" />
				</Link>
			</div>
			<div className="mt-4 pl-3 rounded-xl bg-primary">
				<div
					className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
					onClick={() => router.push('/invite')}
				>
					<span className="font-medium text-lg">Referral program</span>
					<UserPlusIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Sponsors</span>
					<SparklesIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Groups</span>
					<UserGroupIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Help</span>
					<QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Ads</span>
					<MegaphoneIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Settings</span>
					<Cog6ToothIcon className="h-6 w-6 text-gray-500" />
				</div>
			</div>
		</div>
	);
}
