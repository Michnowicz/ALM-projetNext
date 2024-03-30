import "./Searchbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import { addSearch } from "@/app/GlobalRedux/features/search/searchSlice"

export default function Searchbar() {
    const search = useSelector((state)=> state.search)
    const dispatch = useDispatch()


    return(
        <div className="Searchbar">
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="search" onChange={(e)=>(dispatch(addSearch(e.target.value)))} />
            </div>
        </div>
    )
}