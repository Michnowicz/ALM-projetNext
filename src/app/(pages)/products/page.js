'use client'

import { useEffect } from "react";
import "./Products.css";
import Searchbar from "@/app/_components/Searchbar/Searchbar";
import List from "@/app/_components/List/List"

export default function Products() {

    return(
        <div className="Products">
            <Searchbar/>
            <List/>
        </div>
    )
}