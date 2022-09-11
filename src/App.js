import Pages from "./pages/Pages";
import Category from "./components/Category";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
