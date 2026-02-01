"use client"
import React, { useEffect, use } from "react"

function Search({ params }) {
    const p = use(params)

    useEffect(() => {
        console.log(p.cname)
    }, [p.cname])

    return (
        <div>search page </div>
    )
}

export default Search
