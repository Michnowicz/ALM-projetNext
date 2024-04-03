import "./Searchbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import { addSearch, setFilter } from "@/app/GlobalRedux/features/search/searchSlice"
import { useEffect, useState } from "react"

export default function Searchbar() {
    const search = useSelector((state)=> state.search)
    const dispatch = useDispatch()

    return(
        <div className="Searchbar">
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="search" onChange={(e)=>(dispatch(addSearch(e.target.value)))} />
                <div className="filter">
                    <p>filter :</p>
                    <select name="" id="" onChange={(e)=>(dispatch(setFilter(e.target.value)))}>
                        <option value="artist">artist</option>
                        <option value="album">album</option>
                    </select>
                </div>
            </div>
        </div>
    )
}