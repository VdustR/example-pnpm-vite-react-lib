import { useState } from "react";
import { Button } from "@material-ui/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </Button>
  );
}

export default App;
