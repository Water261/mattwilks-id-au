import './globals.scss'
import { Navbar } from '@/components/Navbar';

export const metadata = {
	title: 'Matthew Wilks',
	description: 'The website for Matthew Wilks',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<Navbar />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
