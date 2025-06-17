import { useState,useEffect } from "react";
import ProductCard from "../components/productCard";
import Navbar from "../components/navbar";
const CartPage = () =>{
    const productList = [
        {id:0,name:'WINDBREAK',img_url:'./src/assets/aonam.jpg',price:88000,tag:'New'},
        {id:1,name:'WINDBREAK',img_url:'./src/assets/quannam.jpg',price:88000,tag:'New'},
        {id:2,name:'WINDBREAK',img_url:'./src/assets/quannam2.jpg',price:88000,tag:'New'},
        {id:3,name:'WINDBREAK',img_url:'./src/assets/aothun.jpg',price:88000,tag:'New'},
        {id:4,name:'WINDBREAK',img_url:'./src/assets/aothun1.jpg',price:88000,tag:'New'},
        {id:5,name:'WINDBREAK',img_url:'./src/assets/aonam.jpg',price:88000,tag:'New'},
        {id:6,name:'WINDBREAK',img_url:'./src/assets/aothun.jpg',price:88000,tag:'New'},
        {id:7,name:'WINDBREAK',img_url:'./src/assets/quannam2.jpg',price:88000,tag:'New'}
    ]
    return(
        <>
        <Navbar/>    
        <div className="row flex-wrap g-3">
             <ProductCard
            productList = {productList}
            />
        </div>
           
        </>
    )
}
export default CartPage;