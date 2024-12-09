<script lang="ts">
	import { onMount } from 'svelte';
	import type { GeneratedLyrics } from '$lib/types';
	import LyricGenerator from '../components/LyricGenerator.svelte';
</script>

<!-- Futuristic background with gradient -->
<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
	<div class="container mx-auto px-4 py-8">
		<!-- Glowing title with cyberpunk effect -->
		<h1
			class="text-5xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
		>
			Neural Lyric Engine
		</h1>

		<div class="max-w-3xl mx-auto">
			<!-- Glassmorphism card effect -->
			<div
				class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-500"
			>
				<h2
					class="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
				>
					Generate New Lyrics
				</h2>
				<LyricGenerator />
			</div>
		</div>
	</div>
</div>
