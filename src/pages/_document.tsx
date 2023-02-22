import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="pl" className="scroll-smooth">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Trictic" />
				<meta name="author" content="@ssynowiec" />
				<meta name="keywords" content="Trictic" />

				<meta name="title" content="Trictic" />
				<meta
					name="description"
					content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://trictic.vercel.app/" />
				<meta property="og:title" content="Trictic" />
				<meta
					property="og:description"
					content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
				/>
				<meta
					property="og:image"
					content="https://trictic.vercel.app/trictic.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://trictic.vercel.app/" />
				<meta property="twitter:title" content="Trictic" />
				<meta
					property="twitter:description"
					content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
				/>
				<meta
					property="twitter:image"
					content="https://trictic.vercel.app/trictic.png"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
