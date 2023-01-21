import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface SponsorInfoProps {}

export default function SponsorInfo(props: SponsorInfoProps) {
	return (
		<Layout>
			<HeaderLayout iconBack iconEdit linkEdit="/subscriptions/personal" title="Sponsors" />
			<div className="mt-20 rounded-xl bg-primary w-full">
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Status</span>
					<span className="text-gray-500 text-base">Activated</span>
				</div>
				<div className="ml-3 pl-0 p-3 border-b border-gray-700 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Price</span>
					<span className="text-gray-500 text-base">1 BALSA</span>
				</div>
				<div className="ml-3 pl-0 p-3 flex items-center justify-between cursor-pointer">
					<span className="font-medium text-lg">Subscribers</span>
					<span className="text-gray-500 text-base">0</span>
				</div>
			</div>
			<div className="mt-5 py-5 rounded-xl bg-primary w-full">
				<p className=" mb-4 text-gray-500 font-normal text-base text-center">
					Share your personal membership link with your followers.
				</p>
				<div className="px-4 w-full">
					<button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-full p-3 text-sm font-semibold">
						Share
					</button>
				</div>
			</div>
			<div className="pt-20">
				<div className="pt-40 flex flex-col justify-center text-center">
					<p className="text-base text-gray-500">You do not have subscribers</p>
				</div>
			</div>
		</Layout>
	);
}
