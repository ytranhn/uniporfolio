import * as React from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export interface LinkRefProps {}

export default function LinkRef(props: LinkRefProps) {
	return (
		<div className="bg-primary rounded-xl p-5">
			<h4 className="font-normal text-base">
				Share the link to receive 50% of the profit from the purchased Media membership. You will
				also get 5% from purchases and profits of those invited.
			</h4>
			<div className="mt-10 flex flex-col items-center">
				<p className="text-gray-500 font-semibold text-sm text-center">Your link:</p>
				<p className="bg-tertiary py-2 px-5 text-base font-medium rounded-xl mt-1 w-fit">
					https://balsa.space/id501221?ref=7bc22
				</p>
			</div>
			<div className="px-4 pt-5 w-full">
				<CopyToClipboard text="https://balsa.space/id501221?ref=7bc22">
					<button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-full p-3 text-sm font-bold text-primary flex items-center justify-center">
						<DocumentDuplicateIcon className="h-6 w-6 mr-2" /> Copy link
					</button>
				</CopyToClipboard>
				<div className="text-gray-500 font-base text-xs text-center mt-3">
					Before sharing the link, please read{' '}
					<a className="underline" href="">
						the Terms
					</a>
				</div>
			</div>
		</div>
	);
}
