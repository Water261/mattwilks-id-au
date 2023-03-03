import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
