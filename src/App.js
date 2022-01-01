import './App.css';
import Header from './components/Header'
import Instructions from './components/Instructions';
import InputMovie from './components/InputMovie';
import UsersRanking from './components/UsersRanking';
import PopularMovies from './components/PopularMovies';


function App() {
  return (
    <>
      <Header />
      <Instructions />
      <InputMovie />
      <PopularMovies />
      <UsersRanking />

    </>
  );
}

export default App;