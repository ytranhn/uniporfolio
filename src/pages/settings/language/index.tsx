import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export interface LanguageProps {}

export default function Language(props: LanguageProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Language" />
			<div className="mt-20">
				<p className="font-normal text-base">Choose your language</p>
				<div className="mt-4 pl-3 rounded-xl bg-primary">
					<div className="pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">English (EN)</span>
						<CheckCircleIcon className="h-6 w-6 text-cyan-500" />
					</div>
					<div className="pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Русский (RU)</span>
						{/* <CheckCircleIcon className="h-6 w-6 text-cyan-500" /> */}
					</div>
					<div className="pl-0 p-3 flex items-center justify-between cursor-pointer">
						<span className="font-medium text-lg">Indonesian (ID)</span>
						{/* <CheckCircleIcon className="h-6 w-6 text-cyan-500" /> */}
					</div>
				</div>
			</div>
		</Layout>
	);
}
