import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url: string) => url !== router.asPath && setLoading(true);
		const handleComplete = (url: string) =>
			url === router.asPath &&
			setTimeout(() => {
				setLoading(false);
			}, 500);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	});

	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{loading && (
				<div className="spinner-wrapper">
					<div className="spinner"></div>
				</div>
			)}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
