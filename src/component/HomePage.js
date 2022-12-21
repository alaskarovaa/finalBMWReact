import './HomePage.css'
function HomePage() {
    return (
        <div className="homepage">
            <div className="container-flex">
                <div className="left-box">
                    <h1>THIS IS <span className='span-lightblue'>PERFORMACE</span><br/>
                        THIS IS <span className='span-blue'>THE BESTCAR</span><br/>
                        THIS IS <span className='span-red'>BMW</span>
                    </h1>

                </div>
                <div className="right-box">
                    <img src='bmw-homecar.png' />
                </div>
            </div>
        </div>
    );
}
export default HomePage;