import * as React from 'react';
import {
	Cog6ToothIcon,
	BellIcon,
	NoSymbolIcon,
	ChevronRightIcon,
	ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Layout from 'sections/Layout';
import HeaderLayout from 'components/HeaderLayout';

export interface SettingsProps {}

export default function Settings(props: SettingsProps) {
	const router = useRouter();
	return (
		<Layout>
			<HeaderLayout iconBack title="Settings" />
			<div className="mt-20">
				<div className="mt-4 pl-3 rounded-xl bg-primary">
					<div className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Profile URL</span>
						<span className="text-gray-500 text-base">id515944</span>
					</div>
				</div>
				<div className="mt-4 pl-3 rounded-xl bg-primary">
					<div
						className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
						onClick={() => router.push('/settings/language')}
					>
						<span className="font-medium text-lg">Language</span>
						<span className="text-gray-500 text-base">English (EN)</span>
					</div>
					<div
						className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
						onClick={() => router.push('/settings/notify')}
					>
						<span className="font-medium text-lg">Notifications</span>
						<BellIcon className="h-6 w-6 text-gray-500" />
					</div>
					<div
						className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
						onClick={() => router.push('/settings/website_setting')}
					>
						<span className="font-medium text-lg">Website settings</span>
						<Cog6ToothIcon className="h-6 w-6 text-gray-500" />
					</div>
					<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Blocked countries</span>
						<NoSymbolIcon className="h-6 w-6 text-gray-500" />
					</div>
					<div
						className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer"
						onClick={() => router.push('/settings/sessions')}
					>
						<span className="font-medium text-lg">Active sessions</span>
					</div>
					<div
						className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer"
						onClick={() => router.push('/settings/content_priority')}
					>
						<span className="font-medium text-lg">Content type</span>
						<span className="text-gray-500 text-base">Info & Entertaiment</span>
					</div>
				</div>
				<div className="mt-4 pl-3 rounded-xl bg-primary">
					<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Terms and Conditions</span>
						<ChevronRightIcon className="h-6 w-6 text-gray-500" />
					</div>
					<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Privacy Policy</span>
						<ChevronRightIcon className="h-6 w-6 text-gray-500" />
					</div>
					<div className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Copyright ownership</span>
						<ChevronRightIcon className="h-6 w-6 text-gray-500" />
					</div>
				</div>
				<div className="mt-4 pl-3 rounded-xl bg-primary">
					<div className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Logout</span>
						<ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-500" />
					</div>
				</div>
			</div>
		</Layout>
	);
}
