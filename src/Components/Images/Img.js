import React from 'react'

export default function Img({ src, fallback, classes, alt }) {
  let _IMG
  let i = 0

  return (
    <img
      src={src}
      className={classes}
      alt={alt}
      ref={img => (_IMG = img)}
      onError={() => !i && (_IMG.src = fallback) + i++}
    />
  )
}
