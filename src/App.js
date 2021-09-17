// import logo from './logo.svg';
import './App.css';
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import FunctionClick from './component/FunctionClick';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello';
// import Message from './component/Message'
// import Counter from './component/Counter';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import Stylesheet from './component/Stylesheet';
import Inline from './Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
     {/*<Greet name="Bruce" heroName = "Superman">
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
  <Counter />*/}
  {/*<FunctionClick />
  <ClassClick />*/}
  {/*<EventBind />*/}
  {/*<ParentComponent />*/}
  {/*<UserGreeting />*/}
  {/*<NameList />*/}
  {/*<Stylesheet primary ={true}/>*/}
  <Inline />
  <h1 className = 'error'>Error</h1>
  <h1 className = {styles.success}>Success</h1>
</div>
  );
}

export default App;
