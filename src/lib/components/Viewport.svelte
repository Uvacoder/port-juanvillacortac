<script lang="ts">
  let className = ''
  export let style = ''
  export { className as class }
  let intersecting = false
  export let oneWay = false

  const viewport = (node: HTMLDivElement) => {
    const observer = new IntersectionObserver((entries) => {
      if (oneWay && entries[0].boundingClientRect.y < 0) {
        if (!intersecting) {
          intersecting = true
        }
        return
      }
      intersecting = entries[0].isIntersecting
    })
    observer.observe(node)
    return {
      destroy: () => {
        observer.unobserve(node)
      },
    }
  }
</script>

<div class={className} {style} use:viewport class:intersecting>
  <slot />
</div>

<style>
  div {
    --anim-x: 0;
    --anim-y: 0;
    --anim-s: 1;
    --anim-s-x: var(--anim-s);
    --anim-s-y: var(--anim-s);
    --anim-r: 0deg;
    --anim-r-x: 0deg;
    --anim-r-y: 0deg;
    --anim-t: 0.8s;
    --anim-d: 0s;
  }
  div :global(.anim),
  div:global(.anim) {
    transition: transform var(--anim-t) var(--anim-d),
      opacity var(--anim-t) var(--anim-d);
  }

  div:not(.intersecting) :global(.anim),
  div:not(.intersecting):global(.anim) {
    transition: transform var(--anim-t) 0s, opacity var(--anim-t) 0s;
    opacity: 0;
    transform: scale3d(var(--anim-s-x), var(--anim-s-y), 0)
      translate3d(var(--anim-x), var(--anim-y), 0) rotateX(var(--anim-r-x))
      rotateY(var(--anim-r-y)) rotateZ(var(--anim-r));
  }

  div:not(.intersecting) :global(.anim:not(.animOut)),
  div:not(.intersecting):global(.anim:not(.animOut)) {
    transition: transform 0s 0s, opacity 0s 0s !important;
  }
</style>
