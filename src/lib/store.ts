import { browser } from '$app/env'
import { writable } from 'svelte/store'
export const pageProps = browser ? writable(null) : null
