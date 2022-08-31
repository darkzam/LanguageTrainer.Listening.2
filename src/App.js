import { Route } from "react-router-dom";
import Transcription from "./components/transcription/Transcription";

function App() {
  return (
    <Route path={['/', '/transcription']} exact={true}>
      <Transcription />
    </Route>
  );
}

export default App;
