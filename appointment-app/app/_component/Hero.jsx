import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-prose md:max-w-none">
                            <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                                Your Health, Just a Click Away                            </h2>

                            <p className="mt-4 text-pretty text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                sequi.
                            </p>
                            <Button className='mt-6'>Explore Now</Button>
                        </div>
                    </div>

                    <Image src="/assets/imag/main.jpg" alt="logo"
                        className='rounded-3xl'
                        width={700}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero



