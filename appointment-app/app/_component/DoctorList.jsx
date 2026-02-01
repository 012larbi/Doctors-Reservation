import React from 'react'
import Image from 'next/image'

function DoctorList({ doctorsList }) {
    return (
        <div>
            <h2 className='font-bold text-xl text-lime-600'> Popular
                Doctors</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {doctorsList.map((doctor, index) => {
                    return (
                        <div key={index} className='  m-5 p-5 border rounded-lg hover:scale-105 transition-all ease-in-out cursor-pointer'>


                            <Image
                                src={`http://localhost:1337${doctor?.image?.[0].url}`}
                                width={500}
                                height={200}
                                alt={doctor?.name}
                                unoptimized
                                className='h-[200px] w-full object-cover rounded-lg'


                            />
                            <div className='items-baseline flex flex-col '>
                                <h2 className='font-semibold text-lg text-center mt-2 text-lime-600 bg-lime-200 rounded-full p-2 mt-3 text-bold'>{doctor?.category?.name}</h2>
                            </div>
                            <h2 className='mt-2'>  <span className='text-lime-600'> Name :{" "}</span>
                                {doctor?.name}</h2>
                            <h2 className='mt-2'><span className='text-lime-600'>Year Of Experience :{" "}</span>
                                {doctor?.year_of_experience} years</h2>

                                {/* adrees and phone number */}
                            <h2 className='mt-2'><span className='text-lime-600'>Address : {" "}</span>
                                {doctor?.adress}</h2>
                            <h2 className='mt-2'><span className='text-lime-600'>Phone Number :{" "}  </span>
                                {doctor?.phone}</h2>

                            {/* Book now */}

                            <h2 className='border-lime-600 border p-3 text-lime-600 mt-5 hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out  w-max'>Book Now</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DoctorList
