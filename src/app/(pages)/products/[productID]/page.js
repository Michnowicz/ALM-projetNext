import "./ProductDetails.css"



export default function ProductDetails({params}) {


    return(
        <div className="ProductDetails">
            <h1>product {params.productID}</h1>
        </div>
    )
}