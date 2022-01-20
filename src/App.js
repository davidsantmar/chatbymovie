import './App.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores';
import Header from './components/Header'
import Instructions from './components/Instructions';
import InputMovie from './components/InputMovie';
import PopularMovies from './components/PopularMovies';
import MovieChannel from './components/MovieChannel';
import ChannelReady from './components/ChannelReady';
import Footer from './components/Footer';

function App() {  
  const [active, setActive] = useState("home");

  return (
    <>
      <button className="home--button" type="button" onClick={() => setActive("home")}>&#127968;</button>
      <button className="chat--button" type="button" onClick={() => setActive("channel")}>Chat room</button>
      <Provider store={store}>
      <ChannelReady />
        {active === "home" &&
        <>
          <Header />
          <Instructions />
          <InputMovie />
          <PopularMovies />
          <Footer />
        </>
        }
        {active === "channel" && <MovieChannel />}
        </Provider>
    </>
  );
}

export default App;