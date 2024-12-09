export interface Song {
	title: string;
	lyrics: string;
	moods: string[];
	themes: string[];
	showLyrics?: boolean;
}

export interface GeneratedLyrics {
	lyrics: string;
	explanation: string;
	suggested_moods: string[];
	suggested_themes: string[];
}

export interface ApiResponse<T> {
	status: 'success' | 'error';
	message?: string;
	data?: T;
}
