import { CheckCircleIcon } from '@heroicons/react/20/solid';
import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface ContentPriorityProps {}

export default function ContentPriority(props: ContentPriorityProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Content type" />
			<div className="mt-20">
				<div>
					<h4 className="font-bold text-base mb-1">Info & Entertainment:</h4>
					<div className=" text-sm">
						— see posts on different topics;
						<br />— follow creators that you truly like;
						<br />— interact, discuss and have fun without limits.
					</div>
				</div>
				<div className="mt-4">
					<h4 className="font-bold text-base mb-1">Erotic:</h4>
					<div className="text-sm">
						— see erotic photos and videos;
						<br />— chat in private messages;
						<br />— only real girls and men who verified their identity.
					</div>
				</div>
			</div>
			<div className="mt-4 pl-3 rounded-xl bg-primary">
				<div className="pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Info & Entertainment</span>
					<CheckCircleIcon className="h-6 w-6 text-cyan-500" />
				</div>
				<div className="pl-0 p-3 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Erotic</span>
					{/* <CheckCircleIcon className="h-6 w-6 text-cyan-500" /> */}
				</div>
			</div>
		</Layout>
	);
}
