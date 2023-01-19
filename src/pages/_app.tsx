import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
