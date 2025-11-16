<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
	<nav class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-center gap-6 py-4">
				<a href="/" class="px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 font-medium">Home</a>
				<a href="/games" class="px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 font-medium">Games</a>
				<a href="/blog" class="px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 font-medium">Blog Posts</a>
				<a href="/memes" class="px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 font-medium">Memes</a>
			</div>
		</div>
	</nav>

	<main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		{@render children()}
	</main>
</div>
