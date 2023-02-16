import { browser } from '$app/environment'
import { writable } from 'svelte/store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsonOutput = writable<unknown>({
	example: [{ name: 'Kim Namjoon' }, { message: 'Stan jungkook for clear skin' }]
})

interface Settings {
	editorWidth: number
}

export const settings = writable<Settings>({
	editorWidth: 300
})
