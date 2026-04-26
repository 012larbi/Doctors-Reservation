"use client"
import DoctorList from "@/app/_component/DoctorList"
import Api from "@/app/_utils/Api"
import React, { useState, useEffect, use } from "react"

function Search({ params }) {
    const p = use(params)

    const [doctorsList, setDoctorsList] = useState([])

    useEffect(() => {
        console.log(p.cname)
        getDoctors()
    }, [p.cname])


    const getDoctors = () => {
        Api.getDoctorsByCategory(p.cname).then(res => {
            console.log("Doctors by category", res.data.data)
            setDoctorsList(res.data.data)
        })
    }
    return (
        <div>
            <DoctorList heading={p.cname} doctorsList={doctorsList} />
        </div>
    )
}

export default Search
