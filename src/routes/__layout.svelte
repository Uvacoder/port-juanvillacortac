<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
  import { Gradient } from '$lib'
  import Hoverable from '$lib/components/Hoverable.svelte'

  import Base from '$lib/_components/styles/Base.svelte'
  import Components from '$lib/_components/styles/Components.svelte'

  let y = 0
  export let key
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
  <div class="flex w-full p-8 top-0 z-90 fixed justify-between items-center">
    <Hoverable>
      <a class="flex space-x-4 logo relative" href="/" class:big={y == 0}>
        <h1
          class="font-title text-4xl pointer-events-none relative sm:text-6xl !leading-none"
        >
          JV
        </h1>
        <h1
          class="font-black text-xs self-end pointer-events-none relative sm:text-xl !leading-none"
        >
          Juan<br />Villacorta
        </h1>
      </a>
    </Hoverable>
    <div class="hidden sm:block">
      <Hoverable size="sm">
        <div class="flex space-x-4 links items-center relative">
          <a href="/work" class="font-black text-white relative">Work</a>
          <a href="/about" class="font-black text-white relative">About</a>
          <a href="/blog" class="font-black text-white relative">Blog</a>
        </div>
      </Hoverable>
    </div>
  </div>
  <slot />
</div>

<style windi:preflights:global windi:safelist:global>
  .logo {
    @apply font-bold text-white leading-none transform select-none antialiased;
    @apply origin-top-left;
    will-change: filter;
  }

  .links a {
    @apply duration-400;
  }
  .links:hover a {
    filter: blur(4px);
  }
  .links a:hover {
    filter: none;
  }
</style>
