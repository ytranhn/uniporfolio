import {
	UserIcon,
	HomeIcon,
	ChatBubbleOvalLeftIcon,
	BellIcon,
	UserGroupIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { CurrencyDollarIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Logo from 'components/Logo';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface SideNavBarProps {}

export default function SideNavBar(props: SideNavBarProps) {
	const router = useRouter();
	return (
		<div className="w-60 h-15 py-2 px-2 navBar-main">
			<Logo />
			<div className="flex flex-col py-5">
				<ul>
					<li
						className={router.pathname == '/profile' ? 'active' : ''}
						onClick={() => router.push('/profile')}
					>
						<UserIcon />
						<span>My Page</span>
					</li>
					<li className={router.pathname == '/' ? 'active' : ''} onClick={() => router.push('/')}>
						<HomeIcon />
						<span>Feed</span>
					</li>
					<li
						className={router.pathname == '/message' ? 'active' : ''}
						onClick={() => router.push('/message')}
					>
						<ChatBubbleOvalLeftIcon />
						<span>Messages</span>
					</li>
					<li
						className={router.pathname == '/notify' ? 'active' : ''}
						onClick={() => router.push('/notify')}
					>
						<BellIcon />
						<span>Updates</span>
					</li>
					<li
						className={router.pathname == '/groups' ? 'active' : ''}
						onClick={() => router.push('/groups')}
					>
						<UserGroupIcon />
						<span>Groups</span>
					</li>
					<li
						className={router.pathname == '/search' ? 'active' : ''}
						onClick={() => router.push('/search')}
					>
						<MagnifyingGlassIcon />
						<span>Search</span>
					</li>
					<li
						className={router.pathname == '/storage' ? 'active' : ''}
						onClick={() => router.push('/storage')}
					>
						<CurrencyDollarIcon />
						<span>Purchased Content</span>
					</li>
					<li
						className={router.pathname == '/other' ? 'active' : ''}
						onClick={() => router.push('/other')}
					>
						<Bars3Icon />
						<span>More</span>
					</li>
				</ul>
			</div>
			<div className="footer-nav">
				<Link className="link-nav" href="">
					Help
				</Link>
				<Link className="link-nav" href="">
					Terms
				</Link>
				<Link className="link-nav" href="">
					Privacy
				</Link>
				<Link className="link-nav" href="">
					English (EN)
				</Link>
			</div>
		</div>
	);
}
