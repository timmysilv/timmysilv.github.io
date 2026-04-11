<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { layoutStyles } from '$lib/style';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class={layoutStyles.shell}>
	<nav class={layoutStyles.nav}>
		<div class={layoutStyles.navContainer}>
			<div class={layoutStyles.navLinks}>
				<a href="/" class={layoutStyles.navLink}>Home</a>
				<a href="/apps" class={layoutStyles.navLink}>Apps</a>
				<a href="/games" class={layoutStyles.navLink}>Games</a>
				<a href="/blog" class={layoutStyles.navLink}>Blog Posts</a>
				<a href="/memes" class={layoutStyles.navLink}>Memes</a>
			</div>
		</div>
	</nav>

	<main class={layoutStyles.main}>
		{@render children()}
	</main>
</div>
