import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import HooksPastryContainer from './components/HooksPastryContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <TodoContainer/>
    <UserContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <HooksIcecreamContainer/>
      <HooksPastryContainer/>
      <NewCakeContainer/>
    </Provider>
    </div>
  );
}

export default App;
