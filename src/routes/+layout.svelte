<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/games">Games</a>
	<a href="/blog">Blog Posts</a>
	<a href="/memes">Memes</a>
</nav>

{@render children()}
