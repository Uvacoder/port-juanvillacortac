<script>
  import { Gradient } from '$lib'

  import Base from '$lib/_components/styles/Base.svelte'
  import Components from '$lib/_components/styles/Components.svelte'

  let y = 0
</script>

<svelte:head>
  <title>Motion-Kit</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
</svelte:head>

<svelte:window bind:scrollY={y} />

<Base />
<Components />

<Gradient fixed />
<div class="relative">
  <div class="flex w-full p-6 top-0 fixed justify-between">
    <div class="flex space-x-4 logo" class:big={y == 0}>
      <h1 class="font-title !leading-none">JV</h1>
      <h1 class="font-black self-end !text-xs !leading-none">
        Juan<br />Villacorta
      </h1>
    </div>
    <div class="flex space-x-4 links items-center">
      <a
        href="https://github.com/juanvillacortac/motion-kit"
        class="font-black text-white">Github</a
      >
      <a
        href="https://github.com/juanvillacortac"
        class="font-bold font-title text-white">JV</a
      >
    </div>
  </div>
  <slot />
</div>

<style windi:preflights:global windi:safelist:global>
  .logo {
    @apply font-bold text-white leading-none transform text-4xl duration-400 select-none antialiased;
    @apply origin-top-left;
    will-change: filter;
  }

  .links a {
    @apply duration-400;
  }
  .links:hover a {
    filter: blur(2px);
  }
  .links a:hover {
    filter: none;
  }

  .big {
    @apply sm:scale-200;
  }
</style>
