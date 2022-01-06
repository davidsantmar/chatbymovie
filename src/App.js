import './App.css';
import Header from './components/Header'
import Instructions from './components/Instructions';
import InputMovie from './components/InputMovie';
import UsersRanking from './components/UsersRanking';
import PopularMovies from './components/PopularMovies';
import { Provider } from 'react-redux';
import store from './redux/stores';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Instructions />
      <InputMovie />
      <PopularMovies />
      <UsersRanking />
    </Provider>
  );
}

export default App;