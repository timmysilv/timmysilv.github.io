<script lang="ts">
	import { page } from '$app/state';
	import { gradientStyles, sectionStyles, setlistStyles } from '$lib/style';
	import { onMount } from 'svelte';

	type Song = {
		id: string;
		title: string;
		bpm: number;
	};

	type Setlist = {
		id: string;
		name: string;
		updatedAt: string;
		songs?: Song[];
	};

	const STORAGE_KEY = 'setlist-app:setlists';

	let setlist: Setlist | null = null;
	let songTitle = '';
	let songBpm = '';
	let isAddSongModalOpen = false;
	let dragSourceId = '';

	onMount(() => {
		loadSetlist();
	});

	function loadSetlist() {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			setlist = null;
			return;
		}

		try {
			const parsed = JSON.parse(raw) as Setlist[];
			if (!Array.isArray(parsed)) {
				setlist = null;
				return;
			}

			const found = parsed.find((entry) => entry.id === page.params.id) ?? null;
			if (found) {
				setlist = {
					...found,
					songs: Array.isArray(found.songs) ? found.songs : []
				};
			} else {
				setlist = null;
			}
		} catch {
			setlist = null;
		}
	}

	function persistSetlist(updateFn: (entry: Setlist) => Setlist) {
		if (!setlist) return;

		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return;

		try {
			const parsed = JSON.parse(raw) as Setlist[];
			if (!Array.isArray(parsed)) return;

			const nextSetlists = parsed.map((entry) => {
				if (entry.id !== setlist?.id) return entry;
				return updateFn({ ...entry, songs: Array.isArray(entry.songs) ? entry.songs : [] });
			});

			localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSetlists));
			loadSetlist();
		} catch {
			// Ignore malformed storage data.
		}
	}

	function openAddSongModal() {
		songTitle = '';
		songBpm = '';
		isAddSongModalOpen = true;
	}

	function closeAddSongModal() {
		isAddSongModalOpen = false;
		songTitle = '';
		songBpm = '';
	}

	function onWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isAddSongModalOpen) {
			closeAddSongModal();
		}
	}

	function addSong() {
		if (!setlist) return;

		const sanitizedTitle = songTitle.trim();
		const parsedBpm = Number(songBpm);
		if (!sanitizedTitle || Number.isNaN(parsedBpm) || parsedBpm <= 0) return;

		const newSong: Song = {
			id: crypto.randomUUID(),
			title: sanitizedTitle,
			bpm: Math.round(parsedBpm)
		};

		persistSetlist((entry) => ({
			...entry,
			updatedAt: new Date().toISOString(),
			songs: [...(entry.songs ?? []), newSong]
		}));

		closeAddSongModal();
	}

	function onSongDragStart(songId: string) {
		dragSourceId = songId;
	}

	function onSongDrop(targetSongId: string) {
		if (!setlist || !dragSourceId || dragSourceId === targetSongId) return;
		const songs = setlist.songs ?? [];
		const fromIndex = songs.findIndex((song) => song.id === dragSourceId);
		const toIndex = songs.findIndex((song) => song.id === targetSongId);
		if (fromIndex < 0 || toIndex < 0) return;

		const reordered = [...songs];
		const [movedSong] = reordered.splice(fromIndex, 1);
		reordered.splice(toIndex, 0, movedSong);

		persistSetlist((entry) => ({
			...entry,
			updatedAt: new Date().toISOString(),
			songs: reordered
		}));

		dragSourceId = '';
	}
</script>

<svelte:window on:keydown={onWindowKeydown} />

<div class={sectionStyles.container}>
	{#if setlist}
		<h1 class={`${sectionStyles.title} ${gradientStyles.setlist}`}>{setlist.name}</h1>

		{#if (setlist.songs?.length ?? 0) === 0}
			<div class={setlistStyles.emptyState}>No songs yet.</div>
		{:else}
			<ul class={setlistStyles.songList}>
				{#each setlist.songs ?? [] as song}
					<li
						class={`${setlistStyles.songCard} ${dragSourceId === song.id ? setlistStyles.songCardDragging : ''}`}
						on:dragover|preventDefault
						on:drop={() => onSongDrop(song.id)}
					>
						<div class={setlistStyles.songRow}>
							<button
								type="button"
								class={setlistStyles.dragHandle}
								draggable="true"
								aria-label="Drag to reorder song"
								on:dragstart={() => onSongDragStart(song.id)}
								on:dragend={() => (dragSourceId = '')}
							>
								☰
							</button>
							<div>
								<p class={setlistStyles.songTitle}>{song.title}</p>
								<p class={setlistStyles.songBpm}>{song.bpm} BPM</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		{/if}

		<button class={setlistStyles.addSongButton} on:click={openAddSongModal}>Add song</button>
	{:else}
		<h1 class={`${sectionStyles.title} ${gradientStyles.setlist}`}>Setlist not found</h1>
		<a href="/apps/setlist" class={setlistStyles.notFoundLink}>Back to setlists</a>
	{/if}

	{#if isAddSongModalOpen}
		<div class={setlistStyles.modalOverlay}>
			<div class={setlistStyles.modalCard} role="dialog" aria-modal="true" aria-labelledby="add-song-title" tabindex="-1">
				<h2 id="add-song-title" class={setlistStyles.modalTitle}>Add song</h2>
				<div class={setlistStyles.form}>
					<label class={setlistStyles.label} for="song-title">Title</label>
					<input
						id="song-title"
						type="text"
						bind:value={songTitle}
						placeholder="Song title"
						class={setlistStyles.input}
						on:keydown={(event) => event.key === 'Enter' && addSong()}
					/>
					<label class={setlistStyles.label} for="song-bpm">BPM</label>
					<input
						id="song-bpm"
						type="number"
						min="1"
						bind:value={songBpm}
						placeholder="120"
						class={setlistStyles.input}
						on:keydown={(event) => event.key === 'Enter' && addSong()}
					/>
					<div class={setlistStyles.modalActions}>
						<button class={setlistStyles.cancelButton} on:click={closeAddSongModal}>Cancel</button>
						<button
							class={setlistStyles.modalCreateButton}
							on:click={addSong}
							disabled={!songTitle.trim() || !songBpm || Number(songBpm) <= 0}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
