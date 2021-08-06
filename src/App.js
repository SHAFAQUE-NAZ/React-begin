// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName = "Superman">
      <p>This is props children
      </p></Greet>
      <Greet name="Clark" heroName = "Batman">
      <button>Action</button>
      </Greet>
      <Greet name="Daina" heroName = "Wonder Women">
      <input type = "text"></input>
      </Greet>
      <Welcome name="Bruce" heroName = "Superman"></Welcome>
      <Welcome name="Clark" heroName = "Batman"></Welcome>
      <Welcome name="Daina" heroName = "Wonder Women"></Welcome>
      <Hello />
      <Message />
      
    </div>
  );
}

export default App;
