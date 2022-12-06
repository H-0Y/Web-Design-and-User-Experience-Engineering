
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react';
import Modal from './Modal';

function App() {

  const [page, setPage] = useState('/');
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(false);
  const dark = !theme ? "" : "dark";

  function go( event ) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }

  return (
    <div className="app">
      <Header go={go} dark={dark}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Main page={page} showModal={showModal} setShowModal={setShowModal} className={dark}/>
      <Footer showModal={showModal} setShowModal={setShowModal} theme={theme} setTheme={setTheme} dark={dark}/>
    </div>
  );
}

export default App;
