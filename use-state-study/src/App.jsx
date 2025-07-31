import Counter from "./components/Counter";
import InputText from "./components/InputText";
import ItemAdd from "./components/ItemAdd";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <ItemAdd />
      <Counter />
      <InputText />
    </div>
  );
};

export default App;
