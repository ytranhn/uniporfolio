import * as React from 'react';
import Layout from 'sections/Layout';
import {
	StarIcon,
	ArrowTrendingUpIcon,
	WalletIcon,
	UserIcon,
	PhotoIcon,
} from '@heroicons/react/24/solid';
import HeaderLayout from 'components/HeaderLayout';
export interface MediaScriptionProps {}

export default function MediaScription(props: MediaScriptionProps) {
	return (
		<Layout>
			<div className="h-full relative">
				<HeaderLayout iconBack />
				<div className="flex flex-col justify-between h-full">
					<div className="pt-20">
						<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-16 h-16 flex items-center justify-center">
							<StarIcon className="h-9 w-9" />
						</div>
						<div className="mt-4">
							<p className=" text-2xl font-bold mb-2">Balsa.co Media</p>
							<p className=" text-base font-normal">
								Discover premium opportunities and benefits with a Balsa Media membership.
							</p>
						</div>
						<div className="bg-primary rounded-xl mt-5 px-3">
							<div className="item-media flex items-start border-b border-gray-700 py-3">
								<div className=" rounded-full p-2 bg-gradient-to-r from-lime-500 to-lime-600">
									<ArrowTrendingUpIcon className="h-4 w-4" />
								</div>
								<div className="ml-4">
									<p className="text-base font-bold mb-1">Extra profits</p>
									<p className="text-sm font-normal text-gray-400">
										Get payouts not only from ads revenue but from other Media users' engagement in
										your profile.
									</p>
								</div>
							</div>
							<div className="item-media flex items-start border-b border-gray-700 py-3">
								<div className=" rounded-full p-2 bg-gradient-to-r from-blue-500 to-blue-600">
									<WalletIcon className="h-4 w-4" />
								</div>
								<div className="ml-4">
									<p className="text-base font-bold mb-1">Staking</p>
									<p className="text-sm font-normal text-gray-400">
										Earn regular passive income by keeping at least 1 BALSA on your balance.
									</p>
								</div>
							</div>
							<div className="item-media flex items-start border-b border-gray-700 py-3">
								<div className=" rounded-full p-2 bg-gradient-to-r from-pink-500 to-pink-600">
									<UserIcon className="h-4 w-4" />
								</div>
								<div className="ml-4">
									<p className="text-base font-bold mb-1">Unique URL</p>
									<p className="text-sm font-normal text-gray-400">
										Change your profile ID to something beautiful and memorable.
									</p>
								</div>
							</div>
							<div className="item-media flex items-start border-b border-gray-700 py-3">
								<div className=" rounded-full p-2 bg-gradient-to-r from-orange-500 to-orange-600">
									<PhotoIcon className="h-4 w-4" />
								</div>
								<div className="ml-4">
									<p className="text-base font-bold mb-1">Higher limits</p>
									<p className="text-sm font-normal text-gray-400">
										Only 10 posts a day are allowed without a membership. Becoming a Media user
										doubles that number to 20 posts.
									</p>
								</div>
							</div>
							<div className="item-media flex items-start py-3">
								<div className=" rounded-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
									<StarIcon className="h-4 w-4" />
								</div>
								<div className="ml-4">
									<p className="text-base font-bold mb-1">Media Badge</p>
									<p className="text-sm font-normal text-gray-400">
										Stand out among other profiles with a unique badge next to your name.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 py-5 w-full">
						<button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-full p-3 text-sm font-semibold">
							Activate subscription
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
