"use client"
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Api from '../_utils/Api'
import Image from 'next/image'
function CategorySearch() {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategoryList()
    }, [])



    const getCategoryList = () => {
        Api.getCategory().then(res => {
            setCategoryList(res.data.data)
            console.log(res.data.data);
        })
    }

    return (
        <div className="mt-10 items-center flex flex-col">
            <h2 className='font-bold text-4xl mb-9'><span className='text-lime-600'>Search</span> Category</h2>
            <div className='flex w-full max-w-sm items-center'>
                <Input type="text" placeholder="Search for doctors, specialties, or services" className='w-96 md:w-[600px] lg:w-[800px]' />
                <Button type="submit">Subscribe</Button>
            </div>

            <div className=' grid md:grid-cols-3 sm:grid-cols-1 mt=8 '>
                {categoryList.map((cat, index) => {
                    return (
                        <div key={index} className='flex flex-col justify-center text-center p-5 bg-lime-200 items-center mt-10 m-2 rounded-3xl hover:scale-105 transition-all ease-in-out cursor-pointer'>
                            <Image
                                src={`http://localhost:1337${cat?.icon?.[0]?.url}`}
                                width={70}
                                height={70}
                                alt={cat?.name}
                                unoptimized
                                
                            />
                            <label className='mt-2 font-medium'>{cat?.name}</label>

                        </div>
                    )
                })}
            </div>
        </div>


    )
}

export default CategorySearch

