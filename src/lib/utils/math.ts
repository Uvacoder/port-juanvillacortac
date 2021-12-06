export const clamp = ({ min, max, val }: Record<'min' | 'max' | 'val', number>) =>
  Math.min(Math.max(min, val), max)
