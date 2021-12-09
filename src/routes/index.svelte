<script context="module" lang="ts">
  import Hoverable from '$lib/components/Hoverable.svelte'
  import Viewport from '$lib/components/Viewport.svelte'
  import XScroller from '$lib/components/XScroller.svelte'

  export const prerender = true
</script>

<div
  class="flex flex-col h-screen text-4xl c justify-center sm:space-y-4 sm:text-7xl"
>
  <Viewport style="--anim-y: 0.5rem; --anim-t: 0.5s" oneWay>
    <p class="font-black text-white anim">
      I'm <Hoverable class="font-title inline-flex">Juan Villacorta</Hoverable>
    </p>
    <p class="font-black text-white anim" style="--anim-d: 200ms">
      and I make web stuff
    </p>
  </Viewport>
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

<style windi:global>
</style>
