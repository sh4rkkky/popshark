import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const count = writable(+((browser && localStorage.getItem('count')) || '99999999999999'));

count.subscribe((val) => {
  if (browser) return (localStorage.count = `${val}`);
});

