<script lang="ts">
	import '../app.css';
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
	<nav class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Matthew Wilks</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/about">About Me</a></li>
				<li><a href="/projects">Projects</a></li>
			</ul>
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

<style lang="postcss">
	div#wrapper {
		font-family: 'Roboto', sans-serif;
	}
</style>
