import SizeCart from "./sizeCard";

const ProductCard = ({productList}) =>{
    const style = {
        card_width:{
            "width":"auto"
        },
        card_body_name:{
            "font-size":"1rem",
            "height":"24px",
        },
        text_medium:{
            "font-size":"1rem"
        },
        text_small:{
            "font-size":"0.8rem"
        },
        color_size:{
            "width":"30px",
            "height":"15px"
        }
    }
    return(
        <>
            {
                productList.map(item=>(
                    <div className="col-6 col-lg-3">
                        <div className="card border-0 ">
                            <div className="product_img-bg position-relative"> 
                                <img 
                                src={item.img_url} 
                                alt=""
                                className="card-img-top "
                                />
                                <span 
                                className="position-absolute badge bg-primary text-white mt-2 opacity-75 _product_note opacity-50">
                                {item.tag}
                                </span>
                                <div className="position-absolute overlay ">
                                   <div className="">
                                        <span className="card-size_text-fs">Thêm vào giỏ hàng*</span>
                                        <div className="">
                                            <SizeCart/>
                                        </div>
                                   </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <span className="fw-semibold">{item.name}</span>
                                <div className="d-flex align-items-center gap-1">
                                    <span 
                                    className="text-decoration-line-through"
                                    style={style.text_small}
                                    >{item.price}đ
                                    </span>
                                    <br/>
                                    <span className="fw-semibold"
                                    style={style.text_medium}>
                                        {item.price}đ
                                    </span>
                                    <br />
                                    <span className="bg-primary badge px-1">
                                        -50%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default ProductCard;