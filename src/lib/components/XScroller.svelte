<script lang="ts">
  import { browser } from '$app/env'
  import { clamp } from '$lib/utils/math'

  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'
  import { writable } from 'svelte/store'

  export let damping = 1
  export let precision = 1
  export let stiffness = 0.1

  const x = spring(0, {
    damping,
    precision,
    stiffness,
  })

  let parent: HTMLDivElement
  let node: HTMLDivElement
  const height = writable(0)

  const getTranslate = () => {
    const offsetTop = parent.getBoundingClientRect().top + window.scrollY
    const virtualWidth = node.offsetWidth
    const width = node.scrollWidth - virtualWidth
    $height =
      node.scrollWidth +
      (window.innerWidth < window.outerHeight
        ? virtualWidth * 2
        : (virtualWidth / 2) * -1)
    return clamp({ min: 0, max: width, val: window.scrollY - offsetTop }) * -1
  }

  const handler = () => {
    $x = getTranslate()
  }

  onMount(() => {
    if (browser) {
      x.set(getTranslate(), { hard: true })
    }
  })
</script>

<svelte:window on:scroll|passive={handler} on:resize|resize={handler} />

<div
  class="main"
  style="height: {$height ? $height + 'px' : '100%'}"
  bind:this={parent}
>
  <div class="outer">
    <div class="wrapper">
      <div
        bind:this={node}
        style="transform: translate3d({$x}px, 0, 0); will-change: transform"
      >
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    position: relative;
  }
  .outer {
    top: 0;
    position: sticky;
  }
  .wrapper {
    overflow: hidden;
  }
</style>
