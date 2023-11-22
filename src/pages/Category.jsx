import React, { useEffect, useState } from "react";
import ItemListContainerComponent from "../Component/ItemListContainerComponent/ItemListContainerComponent";
import { useParams } from "react-router-dom";
import axios from "axios";




const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
      axios
        .get ('https://dummyjson.com/products/?limit=10')
        .then((res) => {
          setProducts(res.data.products)
        })
        .catch((error) => console.log(error));
    }, []);
    
    
    const {categoryId} = useParams ();
    console.log (categoryId);

    return <ItemListContainerComponent products={products}/>
}

export default Category