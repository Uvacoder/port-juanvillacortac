<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

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

  const getTranslate = () => {
    const offsetTop = parent.getBoundingClientRect().top + window.scrollY
    const width = node.clientWidth
    const height = node.scrollWidth - width
    const xx = Math.max(0, window.scrollY - offsetTop)
    return Math.min(xx, height) * -1
  }

  const handler = () => {
    $x = getTranslate()
  }

  onMount(() => {
    x.set(getTranslate(), { hard: true })
  })
</script>

<svelte:window on:scroll|passive={handler} on:resize|passive={handler} />

<div
  class="main"
  style="height: {node?.scrollWidth ? node.scrollWidth + 'px' : '100%'}"
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
