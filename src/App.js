import "./App.css";
import Toolbar from "./components/Toolbar";
import MessageList from "./components/MessageList";



function App(props) {
  return (
    <div>
      <Toolbar />
      <MessageList />
    </div>
  );
}

export default App;
