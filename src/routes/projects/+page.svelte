<script>
	// @ts-ignore
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<svelte:head>
	<title>My Projects - Matthew Wilks</title>
</svelte:head>

<div class="text-center mt-3">
	<h1 class="text-4xl font-bold">My Projects</h1>
	<p class="py-6">Below you will find my projects and others that I have contributed to.</p>
</div>

<ProjectCard
	projectName="kanidm"
	projectDesc="Kanidm is a simple and secure identity management platform, which provides services to allow
		other systems and application to authenticate against. The project aims for the highest levels
		of reliability, security and ease of use."
	projectImgPath="/img/kanidm-logo.png"
	projectLink="https://github.com/kanidm/kanidm"
/>
<ProjectCard
	projectName="tetris-clone"
	projectDesc="tetris-clone is my remake of tetris using the Phaser game framework."
	projectImgPath="/img/phaser-logo.png"
	projectLink="https://github.com/Water261/tetris-clone"
/>
<ProjectCard
	projectName="mattwilks-id-au"
	projectDesc="This is the repository for my portfolio, which is what you're seeing now. If you've got any queries or contributions feel free to open an issue."
	projectImgPath="/img/portfolio-logo.png"
	projectLink="https://github.com/Water261/mattwilks-id-au"
/>
