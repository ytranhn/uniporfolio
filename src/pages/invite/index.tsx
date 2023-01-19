import HeaderLayout from 'components/HeaderLayout';
import LinkRef from 'components/Referrals/_linkRef';
import ListRef from 'components/Referrals/_listRef';
import ShareRef from 'components/Referrals/_shareRef';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface InviteProps {}

export default function Invite(props: InviteProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Referral program" />
			<div className="mt-20">
				<LinkRef />
				{/* Share on Social */}
				<ShareRef />
				{/* Member referral */}
				<ListRef />
			</div>
		</Layout>
	);
}
