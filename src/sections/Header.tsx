import Logo from 'components/logo/logo';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { useEffect, useState } from 'react';

export interface HeaderSectionProps {}

export default function HeaderSection(props: HeaderSectionProps) {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className="w-10 h-10 text-yellow-500 "
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-10 h-10 text-gray-900 "
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return (
		<header className="h-15 dark:border-gray-700">
			<div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<Logo />
				{renderThemeChanger()}
			</div>
		</header>
	);
}
