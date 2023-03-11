<script lang="ts">
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	export let projectName: string;
	export let projectDesc: string;
	export let projectImgPath: string;
	export let projectLink: string;
	let projectLinkNoProto = projectLink.replace('https://', '');

	const windowSize = writable(browser && window.innerWidth);

	function onWindowResize() {
		windowSize.set(browser && window.innerWidth);
	}
</script>

<svelte:window on:resize={onWindowResize} />

{#if $windowSize >= 1024}
	<div class="m-auto max-w-3xl shadow-xl border-2 rounded-lg h-72 text-center flex mt-4">
		<img
			src={projectImgPath}
			alt={`${projectName} Logo`}
			class="h-full aspect-square rounded-l-lg"
		/>
		<div class="p-4 flex flex-col gap-4">
			<div class="h-1/4">
				<h1 class="text-3xl text-bold">{projectName}</h1>
				<a href={projectLink} target="_blank" rel="noreferrer" class="link-info">
					{projectLinkNoProto}
					<i class="fa-solid fa-arrow-up-right-from-square fa-2xs relative bottom-1" />
				</a>
			</div>
			<p class="text-md h-2/4">
				{projectDesc}
			</p>
			<div class="h-1/4">
				<a href={projectLink} target="_blank" rel="noreferrer" class="btn btn-primary">
					Visit Project
				</a>
			</div>
		</div>
	</div>
{:else}
	<div class="card max-w-[21rem] bg-base-100 shadow-xl my-4 m-auto">
		<figure><img src={projectImgPath} alt={`${projectName} Logo`} /></figure>
		<div class="card-body">
			<h2 class="card-title justify-center">{projectName}</h2>
			<a href={projectLink} target="_blank" rel="noreferrer" class="link-info">
				{projectLinkNoProto}
				<i class="fa-solid fa-arrow-up-right-from-square fa-2xs relative bottom-1" />
			</a>
			<p>{projectDesc}</p>
			<div class="card-actions justify-center">
				<a href={projectLink} target="_blank" rel="noreferrer" class="btn btn-primary">
					Visit Project
				</a>
			</div>
		</div>
	</div>
{/if}
