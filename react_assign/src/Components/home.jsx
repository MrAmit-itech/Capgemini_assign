import Bath from "../images/Bath.jpg"
import Beverage from "../images/Beverage.jpg"
import Food from "../images/Food.jpg"

const Home=()=>{
    return<>
        <div className="body">
            <div className="bigimg_cont">
                <div id="over_img">
                    <div id="over_img_detail">
                        <h3 className="no_padding_margin">We Sell Pure natural products</h3>
                        <span>Flat 40% OFF on all products</span>
                        <span id="shop_btn">Show Now</span>
                    </div>
                </div>
            </div>
            <div className="sub_cont">
                <div className="small_box">
                    <div className="small_img_box">
                        <img src={Bath} className="small_image" alt="" />
                    </div>
                    <div>
                        <h3 className="no_padding_margin">Bath & Beauty</h3>
                        <span className="no_padding_margin">Original beauty products from the best brands</span>
                    </div>
                </div>
                <div className="small_box">
                    <div className="small_img_box">
                        {/* <img src={"./Images/Beverage.jpg"} className="small_image" alt=""/> */}
                        <img src={Beverage} alt="" />
                    </div>
                    <div>
                        <h3 className="no_padding_margin">Beverages</h3>
                        <span className="no_padding_margin">Choose among the best available</span>
                    </div>
                </div>
                <div className="small_box">
                    <div className="small_img_box">
                        <img src={Food} className="small_image" alt=""/>
                    </div>
                    <div>
                        <h3 className="no_padding_margin">Food</h3>
                        <span className="no_padding_margin">Pure and healthy Food</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home