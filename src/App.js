import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widget from "./components/widgets/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widget />
    </div>
  );
}

export default App;
