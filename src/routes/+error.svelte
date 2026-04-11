<script lang="ts">
	import { page } from '$app/stores';
	import { errorStyles } from '$lib/style';
</script>

<div class={errorStyles.wrapper}>
	<h1 class={errorStyles.status}>{$page.status}</h1>
	<p class={errorStyles.message}>{$page.error?.message || 'Page not found'}</p>
	<a
		href="/"
		class={errorStyles.cta}
	>
		Go back home
	</a>
</div>
