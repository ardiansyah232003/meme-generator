import logo from '../images/troll-face.png';

function Header() {
    return (
        <header className='header'>
            <div className='logo-judul'>
                <img src={logo} alt="logo" className='img'/>
                <h2 className='judul'>Meme Generator</h2>
            </div>
            <p className='sub-judul'>Belajar React - Project 3</p>
        </header>
    )
}

export default Header;