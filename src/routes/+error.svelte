<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
	<h1 class="text-6xl font-bold text-slate-200 mb-4">{$page.status}</h1>
	<p class="text-xl text-slate-400 mb-8">{$page.error?.message || 'Page not found'}</p>
	<a
		href="/"
		class="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 font-medium"
	>
		Go back home
	</a>
</div>
