import MainRoutes from "./Rutas/MainRotues";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
