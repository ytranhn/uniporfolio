import { StarIcon } from '@heroicons/react/24/solid';
import HeaderLayout from 'components/HeaderLayout';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import Layout from 'sections/Layout';

export interface SponsorsProps {}

export default function Sponsors(props: SponsorsProps) {
	const router = useRouter();
	const [count, setCount] = React.useState(0);
	return (
		<Layout>
			<HeaderLayout iconBack title="Sponsors" />
			<div className="mt-32">
				<div className="text-center px-14 cursor-default">
					<div className="flex items-center justify-center">
						<div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-3">
							<StarIcon className="h-10 w-10" />
						</div>
					</div>
					<p className="mt-6 font-bold text-2xl">Sponsors Membership</p>
					<p className="mt-3 font-normal text-base text-gray-500">
						You can activate sponsor membership, and start creating content for your most loyal
						audience.
					</p>
				</div>
				<div className="mt-20">
					<form action="">
						<div className="py-2">
							<p className="font-bold text-lg mb-2">Price</p>
							<div className="flex items-center">
								<p className="h-12 bg-primary flex items-center px-3 rounded-tl-xl rounded-bl-xl text-gray-400 text-lg">
									BALSA
								</p>
								<input
									className="!rounded-tl-none !rounded-bl-none"
									type="number"
									placeholder="Set a price..."
								/>
							</div>
							<p className="mt-2 text-sm text-gray-500">At least 1 BALSA</p>
						</div>
						<div className="py-2">
							<p className="font-bold text-lg mb-2">Description</p>
							<textarea
								name=""
								id=""
								maxLength={250}
								onChange={(e) => setCount(e.target.value.length)}
							></textarea>
							<p className="text-sm text-gray-500">Description will be displayed on your profile</p>
							<p className="text-sm text-gray-500">{250 - count} charactor left</p>
						</div>
					</form>
					<div
						className="px-4 pt-5 w-full"
						onClick={() => router.push('/subscriptions/personal/info')}
					>
						<button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-full p-3 text-sm font-semibold">
							Save
						</button>
					</div>
					<div className="px-4 pt-5 w-full">
						<button className="bg-primary rounded-3xl w-full p-3 text-sm font-semibold">
							Disable
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
