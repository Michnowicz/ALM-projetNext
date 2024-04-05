import "./Searchbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { addSearch, setFilter } from "@/app/GlobalRedux/features/search/searchSlice"

export default function Searchbar({search, setSearch}) {
    const dispatch = useDispatch()
    const darkMode = useSelector((state)=> state.login.darkMode)


    return(
        <div className={darkMode ? "Searchbar dark" :"Searchbar"}>
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                {/* <input type="text" placeholder="search" onChange={(e)=>(dispatch(addSearch(e.target.value)))} /> */}
                <input type="text" placeholder="search" onChange={(e)=>(setSearch(e.target.value.toLowerCase()))}/>
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