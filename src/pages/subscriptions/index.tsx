import * as React from 'react';
import Layout from 'sections/Layout';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import HeaderLayout from 'components/HeaderLayout';
export interface SubscriptionsProps {}

export default function Subscriptions(props: SubscriptionsProps) {
	const router = useRouter();
	return (
		<Layout>
			<HeaderLayout iconBack title="Subscriptions" />
			<div className="bg-primary rounded-xl mt-20">
				<div
					className="flex items-center justify-between py-3 ml-4 pr-4 cursor-pointer"
					onClick={() => router.push('/subscriptions/media')}
				>
					<div className="flex item-center">
						<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
							<StarIcon className="h-7 w-7" />
						</div>
						<div className="ml-4">
							<p className=" text-lg font-bold ">Balsa Media</p>
							<p className="text-gray-500 text-base font-normal">Subscribe</p>
						</div>
					</div>
					<ChevronRightIcon className="h-6 w-6" />
				</div>
			</div>
			<div className="bg-primary rounded-xl mt-4">
				<div
					className="flex items-center justify-between py-3 ml-4 pr-4 cursor-pointer"
					onClick={() => router.push('/subscriptions/adult')}
				>
					<div className="flex item-center">
						<div className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3">
							<StarIcon className="h-7 w-7" />
						</div>
						<div className="ml-4">
							<p className=" text-lg font-bold ">Balsa Erotic</p>
							<p className="text-gray-500 text-base font-normal">Subscribe</p>
						</div>
					</div>
					<ChevronRightIcon className="h-6 w-6" />
				</div>
			</div>
		</Layout>
	);
}
