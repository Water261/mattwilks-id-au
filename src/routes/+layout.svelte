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

<div id="wrapper">
	<nav class="navbar bg-base-100 sticky">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Matthew Wilks</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/about">About Me</a></li>
				<li><a href="/projects">My Projects</a></li>
			</ul>
		</div>
	</nav>
	<main class="text-center">
		<slot />
	</main>
	<footer class="footer text-center flex justify-center py-4 bg-base-100">
		<p class="block">
			&copy; {new Date().getFullYear()} - Matthew Wilks. Licensed under 
			<a href="https://creativecommons.org/licenses/by-nd/4.0/" class="link link-info link-hover">CC BY-ND 4.0</a>
		</p>
	</footer>
</div>

<style lang="postcss">
	div#wrapper {
		font-family: 'Roboto', sans-serif;
	}
</style>
