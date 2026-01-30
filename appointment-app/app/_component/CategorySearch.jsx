import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
function CategorySearch() {
    return (
        <div className="mt-10 items-center flex flex-col">
            <h2 className='font-bold text-4xl mb-9'><span className='text-lime-600'>Search</span> Category</h2>
            <div className='flex w-full max-w-sm items-center'>
                <Input type="text" placeholder="Search for doctors, specialties, or services" className='w-96 md:w-[600px] lg:w-[800px]' />
                <Button type="submit">Subscribe</Button>
            </div>
        </div>
    )
}

export default CategorySearch
