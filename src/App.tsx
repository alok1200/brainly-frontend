import "./App.css";
import { Button } from "./components/Button";
import { Plusicon } from "./icons/Plusicon";

function App() {
  return (
    <>
      <Button
        startIcon={<Plusicon />}
        size="small"
        variant="primary"
        text="adding"
      />
      <Button size="medium" variant="secondary" text="editing" />
      <Button size="large" variant="secondary" text="editing" />
    </>
  );
}

export default App;
