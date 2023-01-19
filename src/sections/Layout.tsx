import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import SideNavBar from 'components/SideNavBar';

export declare interface LayoutProps {
	children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;
}

export default function Layout(props: LayoutProps) {
	const { children } = props;
	return (
		<>
			<Head>
				<title>Nextjs-Dev Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="min-h-screen mx-auto max-w-3xl flex">
				<div className="w-60 fixed top-0">
					<SideNavBar />
				</div>
				<main className="px-4 ml-60 overflow-hidden w-full">{children}</main>
			</div>
		</>
	);
}
