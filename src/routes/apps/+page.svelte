<script lang="ts">
	import { appsStyles, gradientStyles, sectionStyles } from '$lib/style';
</script>

<div class={sectionStyles.wideContainer}>
	<h1 class={`${sectionStyles.title} ${gradientStyles.apps}`}>
		Apps that I have made
	</h1>
	<p class={appsStyles.description}>
		Small tools and side projects live here.
	</p>

	<div class={appsStyles.grid}>
		<a
			href="/apps/setlist"
			class={appsStyles.card}
		>
			<h2 class={appsStyles.cardTitle}>Setlist</h2>
			<p class={appsStyles.cardDescription}>
				A metronome app boilerplate page.
			</p>
		</a>
	</div>
</div>
