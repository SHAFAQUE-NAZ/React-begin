// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
// import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      {<Greet />}
      <Welcome />
      
    </div>
  );
}

export default App;
