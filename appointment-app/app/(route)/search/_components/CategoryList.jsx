"use client"
import React, { useEffect, useState } from "react"
import Api from "@/app/_utils/Api"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import Image from "next/image"


function CategoryList() {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        Api.getCategory().then(res => {
            setCategoryList(res.data.data)
            console.log(res.data.data)
        })
    }, [])

    return (
        <div className="h-screen flex flex-col mt=--5">
            <Command className="max-w-sm rounded-lg border h-[50vh] ">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup  heading="Suggestions">
                        {categoryList?.map((cat, index) => (
                            <CommandItem>
                                <Link href={`/search/${cat?.name}`}  className="p-2 flex gap-2 items-center w-full hover:bg-lime-300 cursor-pointer" >
                                    <Image src={`http://localhost:1337${cat?.icon?.[0]?.url}`}
                                        width={30}
                                        height={30}
                                        alt={cat?.name}
                                        unoptimized
                                    >

                                    </Image>
                                    <label>
                                        {cat?.name}
                                    </label>
                                </Link>


                            </CommandItem>
                        ))}


                    </CommandGroup>


                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList
