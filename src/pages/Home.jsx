import React from "react";
import ItemListContainerComponent from '../Component/ItemListContainerComponent/ItemListContainerComponent'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home =() => {
    const [products, setProducts] = useState([]);


    useEffect(() =>{
      axios
        .get ('https://dummyjson.com/products/?limit=12')
        .then((res) => {
          setProducts(res.data.products)
        })
        .catch((error) => console.log(error));
    }, []);
    
    return <ItemListContainerComponent products={products}/>
}

export default Home