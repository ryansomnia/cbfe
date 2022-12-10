import React from 'react'

export default function Youtube() {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div class="flex flex-col justify-center">
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox<br class="hidden md:block" />
              jumps over
              <span class="inline-block text-deep-purple-accent-400">a lazy dog</span>
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
            </p>
          </div>
          
        </div>
        <div>
          <iframe class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://www.youtube.com/embed/_qXEDnBBCRs" title="Seventeen - Cinta Jangan Sembunyi (Official Lyric)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
