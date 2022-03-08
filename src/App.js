import { useState } from "react";
import Counter from "./components/Counter/Counter";

import CounterProvider from "./context-api/counter-context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="todo-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <CounterProvider value={count}>
              <Counter />
            </CounterProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
