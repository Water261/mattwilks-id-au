<script lang="ts">
	export let projectName: string;
	export let projectDesc: string;
	export let projectImgPath: string;
	export let projectLink: string;
	let projectLinkNoProto = projectLink.replace('https://', '');
</script>

<div class="m-auto w-2/5 shadow-xl border-2 rounded-lg h-72 text-center flex mt-4">
	<img src={projectImgPath} alt={`${projectName} Logo`} class="h-full aspect-square rounded-l-lg" />
	<div class="p-4 flex flex-col gap-4">
		<div class="h-1/4">
			<h1 class="text-3xl text-bold">{projectName}</h1>
			<a href={projectLink} class="link-info">
				{projectLinkNoProto}
				<i class="fa-solid fa-arrow-up-right-from-square fa-2xs relative bottom-1" />
			</a>
		</div>
		<p class="text-md h-2/4">
			{projectDesc}
		</p>
		<div class="h-1/4">
			<a href={projectLink} target="_blank" rel="noreferrer" class="btn btn-primary"
				>Visit Project</a
			>
		</div>	
	</div>
</div>
