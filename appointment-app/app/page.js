'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_component/Hero";
import CategorySearch from "./_component/CategorySearch";
import DoctorList from "./_component/DoctorList";
import Api from "./_utils/Api";
import { useEffect, useState } from "react";


export default function Home() {

const [doctorsList,setDoctorsList]=useState([])

  useEffect(()=>{
    getDoctorsList()
  },[])

const getDoctorsList=()=>{
    
  Api.getDoctors().then(res=>{
    console.log("Doctors",res.data.data);
    setDoctorsList(res.data.data)
  })
}


  return (
    <div >
      <Hero/>
      <CategorySearch/>
      <DoctorList doctorsList={doctorsList}/>
    </div>
  );
}
