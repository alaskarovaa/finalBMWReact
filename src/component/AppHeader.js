import './AppHeader.css'
function AppHeader() {
    return (
        <header className="appheader">
                <div className="logo">
                    <img className='bmwlogo' src='bmwlogo.png' />
                </div>
                <ul>
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#store'>iNur Car</a></li>
                    <li><a href='#footer'>About</a></li>
                    <li><a href='#footer'>Contact</a></li>
                </ul>
        </header>
    );
}

export default AppHeader;