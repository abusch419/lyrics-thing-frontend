<script lang="ts">
	import type { GeneratedLyrics } from '$lib/types';

	let prompt = '';
	let loading = false;
	let error: string | null = null;
	let generatedLyrics: GeneratedLyrics | null = null;

	async function generateLyrics() {
		if (!prompt.trim()) return;

		loading = true;
		error = null;

		try {
			const response = await fetch('/api/generate-lyrics', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt })
			});

			const data = await response.json();
			if (response.ok) {
				generatedLyrics = data;
			} else {
				error = data.detail || 'Failed to generate lyrics';
			}
		} catch (e) {
			error = 'Failed to generate lyrics';
		} finally {
			loading = false;
		}
	}
</script>

<div class="space-y-6">
	<div>
		<label for="prompt" class="block text-sm font-medium text-cyan-300 mb-2">
			What kind of song would you like to write?
		</label>
		<textarea
			id="prompt"
			bind:value={prompt}
			class="w-full rounded-xl bg-gray-900/50 border-2 border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-white placeholder-gray-400 transition-all duration-300"
			rows="4"
			placeholder="E.g., Write me a joyful song about friendship with robots and aliens"
		/>
	</div>

	<button
		on:click={generateLyrics}
		disabled={loading}
		class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold
               shadow-lg hover:shadow-cyan-500/25 transition-all duration-300
               disabled:opacity-50 disabled:cursor-not-allowed
               relative overflow-hidden group"
	>
		<span
			class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
		/>
		<span class="relative">
			{loading ? 'Generating...' : 'Generate Lyrics'}
		</span>
	</button>

	{#if error}
		<div class="text-red-400 bg-red-900/20 rounded-lg p-4 border border-red-500/50">
			{error}
		</div>
	{/if}

	{#if generatedLyrics}
		<div
			class="mt-8 rounded-xl backdrop-blur-sm bg-black/30 p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
		>
			<h3 class="text-xl font-medium mb-4 text-cyan-300">Generated Lyrics</h3>
			<pre
				class="whitespace-pre-wrap font-mono text-sm text-white/90 bg-black/30 rounded-lg p-4 border border-white/10">{generatedLyrics.lyrics}</pre>

			<div class="mt-6">
				<h4 class="font-medium text-purple-300 mb-2">AI's Thoughts</h4>
				<p class="text-sm text-white/80">{generatedLyrics.explanation}</p>
			</div>

			<div class="mt-6 flex flex-wrap gap-6">
				<div>
					<h4 class="font-medium text-cyan-300 mb-2">Suggested Moods</h4>
					<div class="flex flex-wrap gap-2">
						{#each generatedLyrics.suggested_moods as mood}
							<span
								class="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
							>
								{mood}
							</span>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="font-medium text-purple-300 mb-2">Suggested Themes</h4>
					<div class="flex flex-wrap gap-2">
						{#each generatedLyrics.suggested_themes as theme}
							<span
								class="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"
							>
								{theme}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
