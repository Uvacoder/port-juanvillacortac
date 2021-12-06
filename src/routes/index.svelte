<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  export const load: Load = async ({ fetch }) => {
    return { props: await (await fetch('/date.json')).json() }
  }
</script>

<script lang="ts">
  import { XScroller } from '$lib'
  export let date: string

  $: console.log(date)
</script>

<div class="flex h-screen bg-yellow-100 w-full" />
<div class="flex h-screen bg-yellow-900 w-full" />
<XScroller>
  <div class="flex w-full">
    <div class="flex h-screen py-24 px-[5vw] gap-16">
      <div class="flex h-6/10 self-end">
        <div class="rounded-xl h-full bg-red-500 min-w-[80vw]" />
      </div>
      <div class="flex h-6/10 self-center">
        <div class="rounded-xl bg-red-500 min-w-[80vw]" />
      </div>
      <div class="flex h-6/10 self-start">
        <div class="rounded-xl h-full bg-red-500 min-w-[80vw]" />
      </div>
    </div>
  </div>
</XScroller>
<div class="flex h-screen bg-yellow-100 w-full" />
<div class="flex h-screen bg-yellow-900 w-full" />
