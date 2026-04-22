<script lang="ts">
	import { gradientStyles, sectionStyles, setlistStyles } from '$lib/style';
	import { onMount } from 'svelte';

	type Setlist = {
		id: string;
		name: string;
		updatedAt: string;
	};

	const STORAGE_KEY = 'setlist-app:setlists';

	let setlists: Setlist[] = [];
	let newSetlistName = '';
	let activeSetlistId = '';
	let isCreateModalOpen = false;

	onMount(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return;

		try {
			const parsed = JSON.parse(raw) as Setlist[];
			if (Array.isArray(parsed)) {
				setlists = parsed;
			}
		} catch {
			setlists = [];
		}
	});

	function saveSetlists(nextSetlists: Setlist[]) {
		setlists = nextSetlists;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSetlists));
	}

	function createSetlist() {
		const sanitizedName = newSetlistName.trim();
		if (!sanitizedName) return;

		const setlist: Setlist = {
			id: crypto.randomUUID(),
			name: sanitizedName,
			updatedAt: new Date().toISOString()
		};

		saveSetlists([setlist, ...setlists]);
		activeSetlistId = setlist.id;
		newSetlistName = '';
		isCreateModalOpen = false;
	}

	function openCreateModal() {
		newSetlistName = '';
		isCreateModalOpen = true;
	}

	function closeCreateModal() {
		isCreateModalOpen = false;
		newSetlistName = '';
	}

	function onWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isCreateModalOpen) {
			closeCreateModal();
		}
	}

	function openSetlist(id: string) {
		activeSetlistId = id;
		window.location.href = `/apps/setlist/${id}`;
	}
</script>

<svelte:window on:keydown={onWindowKeydown} />

<div class={sectionStyles.container}>
	<h1 class={`${sectionStyles.title} ${gradientStyles.setlist}`}>
		Setlist
	</h1>

	<section class={setlistStyles.listSection}>
		{#if setlists.length === 0}
			<div class={setlistStyles.emptyState}>No setlists yet.</div>
		{:else}
			<ul class={setlistStyles.list}>
				{#each setlists as setlist}
					<li>
						<button class={setlistStyles.listItemButton} on:click={() => openSetlist(setlist.id)}>
							<div class={setlistStyles.listHeader}>
								<div>
									<p class={setlistStyles.setlistName}>{setlist.name}</p>
									<p class={setlistStyles.meta}>Last updated: {new Date(setlist.updatedAt).toLocaleString()}</p>
								</div>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</section>

	<button class={setlistStyles.createButton} on:click={openCreateModal}>Create new setlist</button>

	{#if isCreateModalOpen}
		<div class={setlistStyles.modalOverlay}>
			<div
				class={setlistStyles.modalCard}
				role="dialog"
				aria-modal="true"
				aria-labelledby="create-setlist-title"
				tabindex="-1"
			>
				<h2 id="create-setlist-title" class={setlistStyles.modalTitle}>Create new setlist</h2>
				<div class={setlistStyles.form}>
					<label class={setlistStyles.label} for="setlist-name">Setlist name</label>
					<input
						id="setlist-name"
						type="text"
						bind:value={newSetlistName}
						placeholder="Friday rehearsal"
						class={setlistStyles.input}
						on:keydown={(event) => event.key === 'Enter' && createSetlist()}
					/>
					<div class={setlistStyles.modalActions}>
						<button class={setlistStyles.cancelButton} on:click={closeCreateModal}>Cancel</button>
						<button class={setlistStyles.modalCreateButton} on:click={createSetlist} disabled={!newSetlistName.trim()}>
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
