import "./ProductInfo.css"

import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar } from "@fortawesome/free-solid-svg-icons"
import { addToCart, addFavorite } from "@/app/GlobalRedux/features/login/loginSlice"

export default function ProductInfo() {
    const login = useSelector((state)=> state.login)
    const album = useSelector((state)=> state.data.album)
    const dispatch = useDispatch()

    function handleCart() {
        dispatch(addToCart(album))
    }

    function handleFavorite(e) {
        e.target.classList.toggle('gold')
        dispatch(addFavorite(album))
    }

    return(
        <div className="productInfo">
            <img src={album.images[0].url} alt="" />
            <div className="productInfoText">
                <div className="productTitle">
                    <h1>{album.name}</h1>
                </div>
                <p><b>Artist : </b>{album.artists[0].name}</p>
                <p><b>Label : </b>{album.label}</p>
                <p><b>Release : </b>{album.release_date}</p>
                {
                    login.logged ?
                    <div className="productIcons">
                        <FontAwesomeIcon icon={faCartShopping} className="icon" onClick={handleCart}/>
                        <FontAwesomeIcon icon={faStar} className="icon" onClick={(e)=>(handleFavorite(e))}/>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}