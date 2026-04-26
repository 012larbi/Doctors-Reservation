"use client"
import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Api from "@/app/_utils/Api"
import DoctorDetails from "../_componenets/DoctorDetails"

function Details() {
    const params = useParams()


    const [doctor, setDoctor] = useState()

    useEffect(() => {
        console.log(params.id)
        getDoctorById()
    }, [params.id])

    const getDoctorById = () => {
        // Api.getDoctorById(params.id).then(res => {
        Api.getDoctorById(params.id).then(res => {
            const doctor = res.data.data;
            console.log(doctor);
            setDoctor(doctor);
        });


    }
    return (
        <div className="p-5 md:px-20">
            <h2 className="font-bold text-cols-4">Doctor Details</h2>

            <div className=" grid md:grid-cols-4 grid-cols-1">


                {/* Doctor Details */}
                {doctor && (
                    <div className="col-span-3">
                        <DoctorDetails doctor={doctor} />
                    </div>
                )}

                {/* Doctor Suggestion */}

                <div></div>

            </div>




        </div>
    )
}

export default Details
