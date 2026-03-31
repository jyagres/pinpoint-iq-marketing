'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width: number
  height: number
}

export default function ExpandableImage({ src, alt, width, height }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <div className="max-w-7xl w-full">
            <Image
              src={src}
              alt={alt}
              width={width * 2}
              height={height * 2}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
