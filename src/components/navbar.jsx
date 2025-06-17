import CartItem from "./cartItem";

const Navbar = () =>{
    return(
        <>
           <div className="d-flex align-items-center pb-2">
                <span className="nav-font">BingPong Cart</span>
                <div className="ms-auto me-0">
                    <div className="position-relative">
                        {/* <span className="cart-size">
                            <i class="bi bi-bag"></i>
                        </span> */}
                        <div class="btn-group">
                            <button type="button" className="border-0 bg-white cart-size" data-bs-toggle="dropdown" aria-expanded="false">
                               <i class="bi bi-bag"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end ">
                                <CartItem/>
                            </ul>
                        </div>
                        <div className="position-absolute bottom-0 end-50 badge bg-danger">
                            <span>0</span>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Navbar;