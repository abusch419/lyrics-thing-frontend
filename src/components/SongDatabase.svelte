<script lang="ts">
	import type { Song } from '$lib/types';

	export let songs: Song[];
	let visibleLyrics: Set<string> = new Set();

	function toggleLyrics(songTitle: string) {
		if (visibleLyrics.has(songTitle)) {
			visibleLyrics.delete(songTitle);
		} else {
			visibleLyrics.add(songTitle);
		}
		visibleLyrics = visibleLyrics; // Trigger reactivity
	}
</script>

<div class="space-y-6">
	{#each songs as song}
		<div class="border rounded-lg p-4">
			<h3 class="text-lg font-medium">{song.title}</h3>

			<div class="mt-2 flex gap-4">
				<div>
					<h4 class="text-sm font-medium">Moods</h4>
					<div class="flex gap-2 mt-1">
						{#each song.moods as mood}
							<span
								class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
							>
								{mood}
							</span>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="text-sm font-medium">Themes</h4>
					<div class="flex gap-2 mt-1">
						{#each song.themes as theme}
							<span
								class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
							>
								{theme}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="mt-2">
				<button
					class="text-sm text-gray-500 hover:text-gray-700"
					on:click={() => toggleLyrics(song.title)}
				>
					{visibleLyrics.has(song.title) ? 'Hide Lyrics' : 'Show Lyrics'}
				</button>

				{#if visibleLyrics.has(song.title)}
					<pre class="mt-2 whitespace-pre-wrap font-mono text-sm">{song.lyrics}</pre>
				{/if}
			</div>
		</div>
	{/each}
</div>
