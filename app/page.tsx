import { Inter } from 'next/font/google'
import styles from "./home.module.scss"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className="has-text-centered">
			<section className={`hero is-fullheight-with-navbar ${styles.herobg}`}>
				<div className="hero-body is-flex is-justify-content-center is-align-items-start mt-6">
					<div>
						<h1 className="is-size-1 title">Matthew Wilks</h1>
						<h3 className="is-size-3 subtitle">A hobby developer</h3>
					</div>
				</div>
			</section>
			<p>Photo by Eberhard Grossgasteiger</p>
			<section id="about" className="section is-small">
				<h2 className="title is-size-2">About Me</h2>
				<p>Hi there! I&apos;m Matthew, a hobby developer who&apos;s interested in Rust, C# &amp; Typescript.</p>
			</section>
			<section id="projects" className="section is-small">
				<h2 className="title is-size-2">Projects</h2>
			</section>
			<section id="contact" className="section is-small">
				<h2 className="title is-size-2">Contact Me</h2>
			</section>
		</main>
	)
}
