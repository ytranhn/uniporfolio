import { ChevronLeftIcon, XMarkIcon, PencilIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface HeaderLayoutProps {
	title?: string;
	iconBack?: boolean;
	iconEsc?: boolean;
	iconEdit?: boolean;
	linkEdit?: string;
}

export default function HeaderLayout(props: HeaderLayoutProps) {
	const router = useRouter();
	const { title, iconBack, iconEsc, iconEdit, linkEdit } = props;
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
			{iconEdit && (
				<div className="flex absolute right-0" onClick={() => router.push(`${linkEdit}`)}>
					<PencilIcon className="h-6 w-6" />
				</div>
			)}
		</div>
	);
}
