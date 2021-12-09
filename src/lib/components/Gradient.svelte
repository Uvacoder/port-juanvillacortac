<script lang="ts">
  export let ready = false
  export let animateOnLoad = true
  export let fixed = false
  const gl = (node: HTMLCanvasElement) => {
    import('./_gradient').then((m) => {
      const gradient = new m.Gradient() as any
      gradient.initGradient(node)
      ready = true
      return {
        update: () => {
          gradient.initGradient(node)
        },
      }
    })
  }
</script>

<div class="bg-black h-screen w-full top-0 z-[-1]" class:fixed>
  <canvas
    class="h-full w-full transform duration-2000"
    use:gl
    class:scale-120={!ready && animateOnLoad}
    class:opacity-0={!ready && animateOnLoad}
  />
</div>
<slot />

<style>
  .fixed {
    @apply fixed;
  }
  canvas {
    --gradient-color-1: var(--c-1, #6ec3f4);
    --gradient-color-2: var(--c-2, #3a3aff);
    --gradient-color-3: var(--c-3, #7cffb3);
    --gradient-color-4: var(--c-4, #ff61ab);

    will-change: transform, opacity;
  }
</style>
