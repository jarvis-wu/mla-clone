import './styles/App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Lyrics from './Lyrics.js';
import { AlbumRoutes } from './Lyrics.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="discolyrics" element={<Lyrics />} />
          <Route path="emailus" element={<Contact />} />
        </Route>
        {/* Remember, we need to call "AlbumRoutes()" here instead of "AlbumRoutes". */}
        { AlbumRoutes() }
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className='flex-container'>
      <div><Navigation /></div>
      <div className='flex-child'>
        <div className='Body'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <div className='SideNavigationBar'>
      <Link to='/'>my little airport</Link>
      <div className='SideNavigationBarSpacer'></div>
      <Link to="https://www.facebook.com/mylittleairport" target="_blank" rel="noreferrer">facebook</Link>
      <Link to="/discolyrics">lyrics</Link>
      <Link to="/emailus">contact us</Link>
    </div>
  )
}

function Home() {
  return <></>
}

function Contact() {
  return <>
    <div>
      <a 
        href='https://www.facebook.com/mylittleairport' 
        target="_blank" 
        rel="noreferrer" 
        className='ContactLink'>
          facebook inbox
      </a>
    </div>
  </>
}

export default App;
