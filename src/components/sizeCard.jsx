const SizeCart = () =>{
    const listSize = [{id:0,value:'S'},{id:1,value:'M'},{id:2,value:'L'},]
    return(
        <>
          <div>   
            <div className="d-flex flex-wrap gap-1 p-2">
                <div 
                className="text-center rounded card-size "
                >
                    <a href="#" className="text-decoration-none">S</a>
                </div>
                <div 
                className="text-center rounded card-size "
                >
                    <a href="#" className="text-decoration-none">M</a>
                </div>
                <div 
                className="text-center rounded card-size  "
                >
                    <a href="#" className="text-decoration-none">L</a>
                </div>
                 <div 
                className="text-center rounded card-size  "
                >
                    <a href="#" className="text-decoration-none">XL</a>
                </div>
            </div>
            
          </div>
        </>
    )
}
export default SizeCart;