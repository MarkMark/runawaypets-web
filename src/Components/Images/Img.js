import React from 'react'

export default function Img({ src, fallback, classes, alt }) {
  let IMG
  return (
    <img
      src={src}
      class={classes}
      alt={alt}
      ref={img => (IMG = img)}
      onError={() => (IMG.src = fallback)}
    />
  )
}
