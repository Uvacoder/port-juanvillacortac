<script context="module" lang="ts">
  import type { ErrorLoad } from '@sveltejs/kit'
  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        error,
        status,
      },
    }
  }
</script>

<script lang="ts">
  import Hoverable from '$lib/components/Hoverable.svelte'
  import Viewport from '$lib/components/Viewport.svelte'

  export let status: number
  export let error: { frame: string; stack: string; message: string }
</script>

<div
  class="flex flex-col h-screen text-4xl c justify-center sm:space-y-4 sm:text-7xl"
>
  <Viewport
    class="flex flex-col space-y-10"
    style="--anim-y: 0.5rem; --anim-t: 0.5s"
    oneWay
  >
    <h1 class="font-black text-white -ml-2 anim">
      Oops, error <Hoverable class="inline-flex">{status}</Hoverable>
    </h1>
    <p class="font-bold text-white text-xl anim" style="--anim-d: 200ms">
      {error.message}
    </p>
  </Viewport>
</div>

<style windi:global>
</style>
