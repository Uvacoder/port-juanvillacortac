<script context="module" lang="ts">
  import XScroller from '$lib/components/XScroller.svelte'

  import type { Load } from '@sveltejs/kit'
  export const load: Load = async ({ fetch }) => {
    return { props: await (await fetch('/date.json')).json() }
  }
</script>

<div
  class="flex flex-col h-screen space-y-2 c items-center justify-center sm:space-y-4"
>
  <p class="font-black text-white text-center text-3xl sm:text-5xl">
    SvelteKit
  </p>
  <p class="font-black text-white text-center text-3xl sm:text-5xl">
    Motion Components
  </p>
</div>

<XScroller>
  <div class="flex w-full">
    <div class="flex h-screen py-24 px-[5vw] gap-16">
      <div class="flex h-6/10 self-end">
        <div class="rounded-xl flex h-full bg-red-500 w-[80vw]" />
      </div>
      <div class="flex h-6/10 self-center">
        <div class="rounded-xl flex h-full bg-red-500 w-[80vw]" />
      </div>
      <div class="flex h-6/10 self-start">
        <div class="rounded-xl bg-red-500 w-[80vw]" />
      </div>
    </div>
  </div>
</XScroller>
