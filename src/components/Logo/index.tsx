import * as React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export interface LogoProps {}

export default function Logo(props: LogoProps) {
	return (
		<Link href="/" className="my-2 flex items-center space-x-1">
			<BoltIcon className="h-10 w-10 flex-shrink-0 mr-1 text-cyan-500" />
			<span className="font-bold text-3xl tracking-tight whitespace-nowrap">Balsa</span>
		</Link>
	);
}
