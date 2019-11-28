import React, { useState } from "react"
import LazyLoad from "react-lazy-load"

type ImageLoaderProps = {
  alt: string
  className?: string
  height?: number
  loadedClassName?: string
  loadingClassName?: string
  offset?: number
  onClick?: any
  src: string
  width?: number
}

const ImageLoader = ({
  alt,
  className,
  height,
  loadedClassName,
  loadingClassName,
  offset,
  onClick,
  src,
  width,
}: ImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false)

  //image onLoad handler to update state to loaded
  const onLoad = () => {
    _loaded[src] = true
    setLoaded(true)
  }

  const _loaded = {}
  const imageClass = `${className} ${
    loaded ? loadedClassName : loadingClassName
  }`

  return (
    <LazyLoad
      debounce={false}
      height={height ? height : undefined}
      offsetVertical={offset ? offset : 500}
      width={width ? width : undefined}
    >
      <img
        alt={alt ? alt : ``}
        className={imageClass}
        onClick={onClick}
        onLoad={onLoad}
        src={src}
      />
    </LazyLoad>
  )
}

export default ImageLoader
