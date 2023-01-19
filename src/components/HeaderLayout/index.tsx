import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

export interface HeaderLayoutProps {
	title?: string;
	iconBack?: boolean;
	iconEsc?: boolean;
}

export default function HeaderLayout(props: HeaderLayoutProps) {
	const { title, iconBack, iconEsc } = props;
	return (
		<div className="cursor-pointer fixed top-0 h-20 flex items-center justify-center bg-black max-w-lg w-full z-10">
			{iconEsc && (
				<div className="flex absolute left-0" onClick={() => history.back()}>
					<XMarkIcon className="h-8 w-8" />
				</div>
			)}
			{iconBack && (
				<div className="flex absolute left-0" onClick={() => history.back()}>
					<ChevronLeftIcon className="h-8 w-8" />
				</div>
			)}
			{title && <h3 className="text-xl font-bold">{title}</h3>}
		</div>
	);
}
