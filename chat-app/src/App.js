import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import {axios} from axios;

function App() {
  const fetchData= async()=>{
      const data = await axios.get("/api/chats")
  }
  return (
    <div className="App">
    <Route path='/' component={HomePage} exact />
    <Route path='/chats' component={ChatPage}/>
    </div>
  );
}

export default App;
