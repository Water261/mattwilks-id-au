<script lang="ts">
	import { writable } from 'svelte/store';

	const navbarState = writable(false);
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b08b27e57b.js" crossorigin="anonymous"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="wrapper" class="has-navbar-fixed-top">
	<nav class="navbar is-fixed-top">
		<div class="navbar-brand">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" class="navbar-item">
				<h1>Matthew Wilks</h1>
			</a>
			<button
				class={`navbar-burger ${$navbarState ? 'is-active' : ''}`}
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarMenu"
				on:click={() => ($navbarState = !$navbarState)}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</button>
		</div>
		<div id="navbarMenu" class={`navbar-menu ${$navbarState ? 'is-active' : ''}`}>
			<div class="navbar-end">
				<a href="#about" class="navbar-item">About Me</a>
				<a href="#projects" class="navbar-item">My Projects</a>
				<a href="#contact" class="navbar-item">Contact Me</a>
			</div>
		</div>
	</nav>
	<main class="has-text-centered">
		<slot />
	</main>
	<footer class="footer has-text-centered">
		<p>
			<span>&copy; 2023 - Matthew Wilks. Licensed under </span>
			<a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>
		</p>
	</footer>
</div>

<style lang="scss">
	@import '../../node_modules/bulma/bulma.sass';

	div#wrapper {
		font-family: 'Roboto', sans-serif;
	}
</style>
