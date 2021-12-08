<script>
  import { Gradient } from '$lib'

  import Base from '$lib/_components/styles/Base.svelte'
  import Components from '$lib/_components/styles/Components.svelte'

  let y = 0
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window bind:scrollY={y} />

<Base />
<Components />

<Gradient>
  <div class="relative">
    <div class="flex w-full p-6 top-0 fixed justify-between">
      <h1 class="font-title logo" class:big={y == 0}>JV</h1>
      <div class="flex space-x-4 links">
        <a href="/work" class="font-black text-white">Work</a>
        <a href="/about" class="font-black text-white">About</a>
        <a href="/blog" class="font-black text-white">Blog</a>
      </div>
    </div>
    <slot />
  </div>
</Gradient>

<style windi:preflights:global windi:safelist:global>
  .logo {
    @apply  font-bold text-white leading-none transform text-4xl duration-800 select-none antialiased;
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
  .logo:hover {
    filter: blur(2px);

  }
  .big {
    @apply scale-200;
  }
</style>
