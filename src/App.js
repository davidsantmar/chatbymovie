import './App.css';
import Header from './components/Header'
import Instructions from './components/Instructions';
import InputMovie from './components/InputMovie';
import UsersRanking from './components/UsersRanking';
import PopularMovies from './components/PopularMovies';
import { Provider } from 'react-redux';
import store from './redux/stores';
import { useState } from 'react';
import MovieChannel from './components/MovieChannel';
import ChannelReady from './components/ChannelReady';
import Footer from './components/Footer';

function App() {
  
  const [active, setActive] = useState("home");

  return (
    <>
      <button onClick={() => setActive("home")}>Home</button>
      <button className="channel--button" onClick={() => setActive("channel")}>Chat room</button>
      <Provider store={store}>
        {active === "home" &&
        <>
          <ChannelReady />
          <Header />
          <Instructions />
          <InputMovie />
          <PopularMovies />
          <UsersRanking />
          <Footer />
        </>
        }
        {active === "channel" && <MovieChannel />}
        </Provider>
    </>
  );
}

export default App;