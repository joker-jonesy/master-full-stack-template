import { Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

function App() {

    const theme = useSelector(state=>state.colorMode)
  return (
    <div id="App" className={theme}>
        <Outlet/>
    </div>
  );
}

export default App;
