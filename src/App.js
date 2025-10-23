import './App.css';
import AddNewHotel from "./components/AddNewHotel"
import Hotels from './components/Hotels';

function App() {
  return (
    <main>
      <Hotels />
      <hr />
      <AddNewHotel />
    </main>
  );
}

export default App;
