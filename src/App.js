import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>
        <Display counter={counter} />
      </div>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;
