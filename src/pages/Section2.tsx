import React, { forwardRef } from 'react';

const Section2 = forwardRef<HTMLDivElement>((props, ref) => (
  <>
    <div className='h-full w-full bg-gray-900' ref={ref}>
      <svg
        width='100%'
        height='100%'
        id='svg'
        viewBox='0 0 1440 250'
        className='transition duration-300 ease-in-out delay-150'
      >
        <path
          d='M 0,400 C 0,400 0,200 0,200 C 126.42857142857142,177.60714285714286 252.85714285714283,155.21428571428572 361,171 C 469.14285714285717,186.78571428571428 558.9999999999999,240.75 671,256 C 783.0000000000001,271.25 917.1428571428573,247.78571428571428 1049,232 C 1180.8571428571427,216.21428571428572 1310.4285714285713,208.10714285714286 1440,200 C 1440,200 1440,400 1440,400 Z'
          stroke='none'
          stroke-width='0'
          fill='#090078ff'
          className='transition-all duration-300 ease-in-out delay-150 path-0'
          transform='rotate(-180 720 200)'
        ></path>
      </svg>
      <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-20 flex flex-no-wrap md:items-start md:space-x-8 items-start flex-col-reverse md:flex-row-reverse md:space-x-reverse border-b-2 border-gray-600'>
        <div className='w-full md:flex-1 flex flex-col md:pl-1/10'>
          <div className='w-full md:flex-1 flex flex-col md:pl-1/10'>
            <h2 className='mt-0 mb-4 text-gray-200 text-2xl sm:text-3xl font-extrabold'>
              Jeg hedder{' '}
              <span className='text-purple-500 dark:text-purple-300'>
                Simon
              </span>
              .
            </h2>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              🧑‍💻
            </p>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              Jeg er 21 år gammel og har programmeret i mange år efterhånden. Vi
              skal helt tilbage til, da jeg var 15 år gammel og spillede det
              meget bekendte online-spil "Minecraft". Det var her, at jeg fik
              bekendtskab til programmering og begyndte at lege rundt med det.
              Det gav mig blod på tanden, og er årsagen til, at jeg den dag i
              dag har så meget kærlighed til programmering, problemløsningen
              samt at være kreativ.
            </p>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              {' '}
              🏀 / 🏋️/ 🎤 / 🎹{' '}
            </p>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              Når jeg ikke programmerer, elsker jeg at dyrke sport, blandt andet
              fitness &amp; basketball. Derudover er jeg meget musikalsk og
              elsker musik, og har sunget i mange år.
            </p>
            <div className='flex items-center flex-col sm:flex-row mt-4'>
              <a
                href='https://github.com/simonsejse'
                target='_blank'
                className='py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 border border-pink-600 text-pink-600 hover:text-pink-600 dark:border-pink-500 dark:text-pink-500'
                rel='noopener noreferrer'
              >
                Min github
              </a>
            </div>
          </div>
        </div>
        <div className='w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0'>
          <img
            src='https://images.reactbricks.com/original/dd4ba206-7527-40a3-a84c-9d6c850cd580/simon.webp'
            sizes='100vw'
            alt='simon'
            width='760'
            height='820'
            loading='lazy'
            decoding='async'
            className='rb-lazy rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </div>
  </>
));

Section2.displayName = 'Section2';

export default Section2;
