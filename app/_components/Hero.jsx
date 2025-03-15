import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
Find & Book 

<sapn className='text-[#0D7DFF] '> Appoinment</sapn> with your Favourite
<span className='text-[#0D7DFF]'> Doctors   </span>     </h2>

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
          <Button className='mt-10'>Explore Now</Button>
        </div>
      </div>

      <div>
       <Image
       src="/doctor.jpg"
       width={800}
       height={800}
          className="rounded-3xl  "
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero