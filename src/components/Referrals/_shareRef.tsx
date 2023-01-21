import Image from 'next/image';
import * as React from 'react';

export interface ShareRefProps {}

export default function ShareRef(props: ShareRefProps) {
	return (
		<div>
			<h1 className="mt-10 mb-5 font-bold text-xl">Share on social media</h1>
			<div className="flex gap-5">
				<a
					href="https://t.me/share/url?url=https://balsa.space/id501221?ref=7bc22"
					target="_blank"
					rel="noreferrer"
				>
					<div className="flex flex-col items-center">
						<Image src={'/ic-telegram.svg'} className="w-14 rounded-xl" alt="" />
						<p className="mt-2 font-semibold text-sm">Telegram</p>
					</div>
				</a>
				<a
					href="https://www.facebook.com/sharer/sharer.php?u=https://balsa.space/id501221?ref=7bc22"
					target="_blank"
					rel="noreferrer"
				>
					<div className="flex flex-col items-center">
						<Image src={'/ic-facebook.svg'} className="w-14 rounded-xl" alt="" />
						<p className="mt-2 font-semibold text-sm">Facebook</p>
					</div>
				</a>
				<a
					href="https://twitter.com/intent/tweet?url=https://balsa.space/id501221?ref=7bc22"
					target="_blank"
					rel="noreferrer"
				>
					<div className="flex flex-col items-center">
						<Image src={'/ic-twitter.jpg'} className="w-14 rounded-xl" alt="" />
						<p className="mt-2 font-semibold text-sm">Twitter</p>
					</div>
				</a>
			</div>
		</div>
	);
}
