import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CancelAppointment from './CancelAppointment'
import Api from '@/app/_utils/Api'
import { toast } from 'sonner'

function MyBookingList({ bookingList, past, updateAppointment }) {

    const onDeleteBooking = (item) => {
        Api.deleteBooking(item.documentId).then(resp => {
            console.log(resp)
            if (resp) {
                toast("appointment has been canceled")
                updateAppointment()
            }

        })
    }
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {bookingList.map((item, index) => (
                <div key={item.documentId} className='flex gap-2 items-center'>
                    <Image
                        src={
                            item?.doctor?.image?.[0]?.url
                                ? `http://localhost:1337${item.doctor.image[0].url}`
                                : "http://localhost:1337/uploads/default.png"
                        }
                        width={150}
                        height={150}
                        alt={item?.doctor?.name || "Doctor image"}
                        className="w-[200px] h-[200px] rounded-full object-cover border-2 mt-5  border-lime-600"
                        unoptimized
                    />


                    <div className=' mt-15 gap-2 ml-15 w-full'>
                        <h2 className='font-bold flex justify-between items-center'>Name : {item?.doctor?.name}

                            {!past && <CancelAppointment cancelClick={() => onDeleteBooking(item)} />}

                        </h2>
                        <h2>Address: {item?.doctor?.address}</h2>
                        <h2>phone: {item?.doctor?.phone}</h2>
                        <h2>Date and Time: {new Date(item?.date).toLocaleString()}</h2>


                    </div>

                </div>

            ))}
        </div>
    )
}

export default MyBookingList