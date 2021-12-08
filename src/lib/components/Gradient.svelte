<script lang="ts">
  import { Gradient } from './_gradient'

  // color helpers
  const gl = (node: HTMLCanvasElement) => {
    const gradient = new Gradient() as any
    gradient.initGradient(node)
  }
</script>

<div class="bg-black relative">
  <canvas class="h-screen w-full z-[-1] fixed" use:gl />
  <div class="relative">
    <slot />
  </div>
</div>

<style>
  canvas {
    --gradient-color-1: #6ec3f4;
    --gradient-color-2: #3a3aff;
    --gradient-color-3: #7cffb3;
    --gradient-color-4: #ff61ab;
  }
</style>
