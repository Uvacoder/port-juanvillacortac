<script lang="ts">
  export let ready = false
  const gl = (node: HTMLCanvasElement) => {
    import('./_gradient').then((m) => {
      const gradient = new m.Gradient() as any
      gradient.initGradient(node)
      ready = true
    })
  }
</script>

<div class="bg-black relative">
  <canvas class="h-screen w-full z-[-1] duration-800 fixed" use:gl class:opacity-0={!ready} />
</div>
<slot />

<style>
  canvas {
    --gradient-color-1: #6ec3f4;
    --gradient-color-2: #3a3aff;
    --gradient-color-3: #7cffb3;
    --gradient-color-4: #ff61ab;
  }
</style>
