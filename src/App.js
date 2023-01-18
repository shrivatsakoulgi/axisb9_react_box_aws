import Box from "./component/Box";
import Timer from "./Timer";
function App() {
  return (
    <div>
      <Timer/>
      <Box title="My Box1" msg="Learning React" />
      <Box title="My Box2" msg="React uses Components" />
      <Box title="My Box3" msg="React is Fun" />
    </div>
  );
}

export default App;
