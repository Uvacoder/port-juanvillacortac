<style global windi:global>
  .c,
  .c-lg {
    @apply px-6;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @screen lg {
    .c {
      width: 80%;
    }
    .c-lg {
      width: 90%;
    }
  }

  .input {
    @apply p-2;
    @apply border-b;
    @apply border-x-gray-300;
    @apply bg-transparent;
    height: 41px;
  }

  select:required:invalid {
    color: #a9a9a9;
  }

  input[type='color'] {
    width: 20px;
    height: 20px;
    border-radius: 3px;
  }

  input[type='color']::-webkit-color-swatch {
    border-radius: 3px;
    padding: 0;
    @apply border;
    @apply border-x-gray-300;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    border-radius: 3px;
    padding: 0;
    @apply border;
    @apply border-x-gray-300;
  }

  .input-label {
    @apply text-xs;
    @apply font-bold;
    @apply mb-2;
  }

  .t-p {
    font-size: 1rem;
  }

  .t-h1,
  .t-h2,
  .t-h3 {
    @apply leading-none;
    font-weight: bold;
  }

  .t-h1 {
    font-size: 2.5rem;
  }

  .t-h2 {
    font-size: 2rem;
  }

  .t-h3 {
    font-size: 1.33rem;
  }

  .skeleton {
    display: flex;
    position: relative;
    overflow: hidden;
    @apply bg-gray-500;
    @apply opacity-25;
  }

  @keyframes skeleton-loading {
    0% {
      transform: skewX(-10deg) translateX(-100%);
    }
    100% {
      transform: skewX(-10deg) translateX(200%);
    }
  }

  .skeleton::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    width: 70%;
    height: 100%;
    top: 0;
    left: 0;
    animation: skeleton-loading 1.2s infinite;
  }
</style>
