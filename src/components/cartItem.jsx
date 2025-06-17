const CartItem = () =>{
    const style = {
        box:{
            width:'80px',
            height:'80px'
        },
        input_box:{
            "width":"30px",
            "height":"30xp",
            "border":"none",
            "text-align":"center",            
        },
        cart_item_size:{
            "width":"300px"
        },
        text_truncate_limit:{
            "width":"200px"
        }
    }
    return(
        <>
           
              <li className="cart_item_size ">            
                    <div className="d-flex border-0 " style={style.cart_item_size}>
                        <img 
                        src="./src/assets/quannam.jpg" 
                        alt="" 
                        style={style.box}
                        className="object-fit-contain rounded"
                        />
                        <div className="d-flex flex-column ">
                            <span className="text-truncate" style={style.text_truncate_limit}>Lorem ipsum dolor sit amet</span>                           
                           <div className="text-center rounded card-size bg-light border">
                                <a href="#" className="text-decoration-none">XL</a>
                            </div>          
                            <div className="mt-auto d-flex">
                                <span>88000đ</span>
                                <div className="ms-auto">
                                     <input 
                                    type="button"
                                    value="-" 
                                    style={style.input_box}/>
                                    <input 
                                    type="text"
                                    size={1}
                                    value={1}
                                    style={style.input_box}
                                    />
                                    <input 
                                    type="button" 
                                    value="+"
                                    style={style.input_box}
                                    />
                                </div>
                            </div>
                        </div>                       
                    </div>         
                    <div className="pb-1"></div>                                                
              </li>
              <li className="cart_item_size ">            
                    <div className="d-flex border-0 " style={style.cart_item_size}>
                        <img 
                        src="./src/assets/quannam2.jpg" 
                        alt="" 
                        style={style.box}
                        className="object-fit-contain rounded"
                        />
                        <div className="d-flex flex-column ">
                            <span className="text-truncate" style={style.text_truncate_limit}>Lorem ipsum dolor sit amet</span>                           
                           <div className="text-center rounded card-size bg-light border">
                                <a href="#" className="text-decoration-none">M</a>
                            </div>          
                            <div className="mt-auto d-flex">
                                <span>88000đ</span>
                                <div className="ms-auto">
                                     <input 
                                    type="button"
                                    value="-" 
                                    style={style.input_box}/>
                                    <input 
                                    type="text"
                                    size={1}
                                    value={1}
                                    style={style.input_box}
                                    />
                                    <input 
                                    type="button" 
                                    value="+"
                                    style={style.input_box}
                                    />
                                </div>
                            </div>
                        </div>                       
                    </div>     
                    <div className="pb-1"></div>                                                                                                              
              </li>
                 <li className="cart_item_size ">            
                    <div className="d-flex border-0 " style={style.cart_item_size}>
                        <img 
                        src="./src/assets/aothun.jpg" 
                        alt="" 
                        style={style.box}
                        className="object-fit-contain rounded"
                        />
                        <div className="d-flex flex-column ">
                            <span className="text-truncate" style={style.text_truncate_limit}>Lorem ipsum dolor sit amet</span>                           
                           <div className="text-center rounded card-size bg-light border">
                                <a href="#" className="text-decoration-none">L</a>
                            </div>          
                            <div className="mt-auto d-flex">
                                <span>88000đ</span>
                                <div className="ms-auto">
                                     <input 
                                    type="button"
                                    value="-" 
                                    style={style.input_box}/>
                                    <input 
                                    type="text"
                                    size={1}
                                    value={1}
                                    style={style.input_box}
                                    />
                                    <input 
                                    type="button" 
                                    value="+"
                                    style={style.input_box}
                                    />
                                </div>
                            </div>
                        </div>                       
                    </div>                                                         
              </li>
        </>
    )
}
export default CartItem;