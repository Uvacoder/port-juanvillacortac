<script lang="ts">
  import { tweened } from 'svelte/motion'
  let className = ''
  export { className as class }

  let viewing = false
  export { viewing as hovered }

  const coords = tweened({ x: 0, y: 0 }, { duration: 600 })

  let scene: HTMLDivElement

  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md'

  export let as = 'div'
</script>

<div
  class="relative {className}"
  on:mouseenter={(e) => {
    coords.set(
      { x: e.pageX - scene.offsetLeft, y: e.pageY - scene.getBoundingClientRect().top - window.scrollY },
      { duration: 0 }
    )
    viewing = true
  }}
  on:mouseleave={(e) => {
    viewing = false
  }}
  on:mousemove={(e) => {
    $coords = { x: e.pageX - scene.offsetLeft, y: e.pageY - scene.getBoundingClientRect().top - window.scrollY }
  }}
  bind:this={scene}
>
  <div
    class="rounded-full bg-purple-500 transition-opacity duration-700 absolute pointer-events-none hidden sm:block"
    class:w-10={size == 'sm'}
    class:h-10={size == 'sm'}
    class:w-20={size == 'md'}
    class:h-20={size == 'md'}
    class:w-32={size == 'lg'}
    class:h-32={size == 'lg'}
    class:w-48={size == 'xl'}
    class:h-48={size == 'xl'}
    class:!opacity-0={!viewing}
    style="filter: blur(0.9rem); transform: translate3d(calc({$coords.x}px - 50%), calc({$coords.y}px - 50%), 0)"
  />
  <div class="relative">
    <slot />
  </div>
</div>
