import style from "./App.module.css";
import NavBar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <main className={style.app}>
      <NavBar/>
      <Outlet/>
    </main>
  );
}

export default App;
