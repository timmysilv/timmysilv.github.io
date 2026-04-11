<script lang="ts">
	import { gradientStyles, panelStyles, sectionStyles } from '$lib/style';
</script>

<div class={sectionStyles.container}>
	<h1 class={`${sectionStyles.title} ${gradientStyles.setlist}`}>
		Setlist
	</h1>
	<p class={sectionStyles.paragraphWithMargin}>
		A simple metronome app is coming soon.
	</p>
	<div class={panelStyles.card}>
		<p class={panelStyles.heading}>Boilerplate checklist</p>
		<ul class={panelStyles.list}>
			<li>Set tempo control (BPM)</li>
			<li>Start and stop playback</li>
			<li>Visual beat indicator</li>
			<li>Optional accent on downbeat</li>
		</ul>
	</div>
</div>
