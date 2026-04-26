import React from 'react'
import Image from 'next/image'
import { GraduationCap, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookAppointment from '../BookAppointment'
function DoctorDetails({ doctor }) {
    //  const {user } =useKindeBrowserClient()

    //             useEffect(()=>{
    //                     console.log(user)
    //             },[user])


    const imageUrl = doctor?.image?.[0]?.url
        ? `http://localhost:1337${doctor.image?.[0].url}`
        : "/placeholder.png";
    return (
        <>
            <div className=' border-[1px] p-5 rounded-lg  grid grid-cols-1 md:grid-cols-3'>
                {/* doctor image*/}
                <div>
                    <Image
                        src={imageUrl}
                        width={600}
                        height={600}
                        alt={doctor?.image?.[0]?.alternativeText || doctor?.name || "Doctor"}
                        className="rounded-full h-[300px] w-[300px] object-cover border-4 border-lime-600  shadow-2xl hover:shadow-lime-500/100 transition-shadow duration-300"
                        unoptimized
                    />


                </div>

                {/* doctor info*/}
                <div className=' md:px-10 col-span-2 flex flex-col gap-4 items-baseline'>
                    <h2 className='font-bold text-2xl mt-7'>{doctor?.name}

                    </h2>

                    <h2 className='flex gap-2 text-gray-500'>
                        <GraduationCap />
                        <span>{doctor?.year_of_experience} Years Of Experience</span>
                    </h2>

                    <h2 className='flex gap-2 text-gray-500'>
                        <MapPin />
                        <span>{doctor?.address} </span>

                    </h2>

                    <h2 className='bg-lime-200 text-lime-800 rounded-full text-[10px] p-2'>{doctor?.category?.name}</h2>

                    <BookAppointment doctor={doctor} />

                    <div>

                        <h1 className='text-[25px] font-bold'>About</h1>
                        <p className='text-gray-500'> {doctor?.about}</p>
                    </div>

                </div>

            </div>



        </>
    )
}

export default DoctorDetails