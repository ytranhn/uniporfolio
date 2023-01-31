import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface NotifyProps {}

export default function Notify(props: NotifyProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Notifications" />
			<div className="mt-20">
				<h3 className=" font-bold text-xl">Setting types</h3>
				<div className="flex items-center w-full mt-4">
					<input
						className=" w-4 h-4 mr-2 cursor-pointer checked:bg-cyan-500 rounded-none"
						type="checkbox"
						id="new_message"
						name="new_message"
					/>
					<label className="cursor-pointer" htmlFor="new_message">
						New Messages
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="sold_a_message" name="sold_a_message" />
					<label className="cursor-pointer" htmlFor="sold_a_message">
						Sold a Messages
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="new_reply" name="new_reply" />
					<label className="cursor-pointer" htmlFor="new_reply">
						New Reply
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="reply_subscription" name="reply_subscription" />
					<label className="cursor-pointer" htmlFor="reply_subscription">
						Replies only from my subscriptions
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="new_like" name="new_like" />
					<label className="cursor-pointer" htmlFor="new_like">
						New like
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="like_subscription" name="like_subscription" />
					<label className="cursor-pointer" htmlFor="like_subscription">
						Likes only from my subscriptions
					</label>
				</div>
				<div className="flex items-center w-full mt-2">
					<input type="checkbox" id="new_follow" name="new_follow" />
					<label className="cursor-pointer" htmlFor="new_follow">
						New follow
					</label>
				</div>
			</div>
		</Layout>
	);
}
