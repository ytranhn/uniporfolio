import {
	ChatBubbleOvalLeftIcon,
	ChevronLeftIcon,
	FireIcon,
	PhoneIcon,
	StarIcon,
} from '@heroicons/react/24/solid';
import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

export interface AdultSubscriptionProps {}

export default function AdultSubscription(props: AdultSubscriptionProps) {
	return (
		<Layout>
			<div className="flex flex-col justify-between h-full">
				<HeaderLayout iconEsc title="Get Balsa Erotic" />
				<Swiper className="my-44 slideAdult w-full" pagination={true} modules={[Pagination]}>
					<SwiperSlide className="text-center px-14 pb-16 cursor-default">
						<div className="flex items-center justify-center">
							<div className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3">
								<StarIcon className="h-10 w-10" />
							</div>
						</div>
						<p className="mt-6 font-bold text-2xl">All Models — One Subscription</p>
						<p className="mt-3 font-normal text-base text-gray-500">
							Unlock full access to exclusive content — subscribe to all models
						</p>
					</SwiperSlide>
					<SwiperSlide className="text-center px-14 pb-16 cursor-default">
						<div className="flex items-center justify-center">
							<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
								<ChatBubbleOvalLeftIcon className="h-10 w-10" />
							</div>
						</div>
						<p className="mt-6 font-bold text-2xl">Private messages</p>
						<p className="mt-3 font-normal text-base text-gray-500">
							Chat with all models on any topic.
						</p>
					</SwiperSlide>
					<SwiperSlide className="text-center px-14 pb-16 cursor-default">
						<div className="flex items-center justify-center">
							<div className="rounded-full bg-gradient-to-r from-lime-500 to-green-500 p-3">
								<PhoneIcon className="h-10 w-10" />
							</div>
						</div>
						<p className="mt-6 font-bold text-2xl">Audio and video calls</p>
						<p className="mt-3 font-normal text-base text-gray-500">
							Talk to any girl by voice or video call.
						</p>
					</SwiperSlide>
					<SwiperSlide className="text-center px-14 pb-16 cursor-default">
						<div className="flex items-center justify-center">
							<div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-3">
								<FireIcon className="h-10 w-10" />
							</div>
						</div>
						<p className="mt-6 font-bold text-2xl">Access to 400+ models</p>
						<p className="mt-3 font-normal text-base text-gray-500">
							Access to the feed with content from the best models.
						</p>
					</SwiperSlide>
				</Swiper>
				<div className="px-4 py-5 w-full">
					<div className="flex items-center justify-center mb-10">
						<div className="flex flex-col justify-center h-36 w-32 py-3 px-6 m-1 bg-primary rounded-xl text-center relative cursor-pointer focus:border-2 focus:border-purple-500">
							<p className="font-bold text-2xl">12</p>
							<p className="font-normal text-sm">months</p>
							<p className="font-normal text-sm mt-3">$2.41/month</p>
							<p className="font-bold text-sm mt-1">Save 40%</p>
						</div>
						<div className="flex flex-col justify-center h-36 w-32 py-3 px-6 m-1 bg-primary rounded-xl text-center relative cursor-pointer border-2 border-purple-500">
							<p className="font-bold text-2xl">6</p>
							<p className="font-normal text-sm">months</p>
							<p className="font-normal text-sm mt-3">$3.16/month</p>
							<p className="font-bold text-sm mt-1">Save 21%</p>
							<div className="absolute -top-2.5 left-1/2 -translate-x-2/4 whitespace-nowrap font-bold text-xs bg-purple-600 py-0.5 px-2 rounded-xl">
								Most popular
							</div>
						</div>
						<div className="flex flex-col justify-center h-36 w-32 py-3 px-6 m-1 bg-primary rounded-xl text-center relative cursor-pointer">
							<p className="font-bold text-2xl">1</p>
							<p className="font-normal text-sm">months</p>
							<p className="font-normal text-sm mt-3">$4/month</p>
						</div>
					</div>
					<button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl w-full p-3 text-sm font-semibold">
						Continue
					</button>
				</div>
			</div>
		</Layout>
	);
}
