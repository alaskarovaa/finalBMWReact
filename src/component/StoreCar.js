import './StoreCar.css'

function StoreCar(){
    return(
        <div className='container-store'> 
            <h1>Store <span>iNur</span></h1>

            <h3 className='h3logo'> BMW Series by iNur Store </h3>
            <div className='store-flex'>
                <div className='product'>
                    <div className='product-img'>
                        <img src='f10.jpg' />
                    </div>
                    <div className='container-text'>
                        <h4>BWM F10 M Performance</h4>
                        <p>22 962 $</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='crazyf30.jpg' />
                    </div>
                    <div className='container-text'>
                        <h4>BWM F30 SPORT</h4>
                        <p>38 363 $</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='f80m4.jpg' />
                    </div>
                    <div className='container-text'>
                        <h4>BMW F80 M4</h4>
                        <p>36 300$</p>
                    </div>
                </div>
            </div>

            
            
        </div>
    );
}

export default StoreCar;