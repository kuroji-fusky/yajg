import { writable } from 'svelte/store'

export const jsonOutput = writable<any>({
	example: [{ name: 'Kim Namjoon' }, { message: 'Stan jungkook for clear skin' }]
})
