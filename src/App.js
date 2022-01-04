import { AppRouter } from "./routes/AppRouter";
import {Provider} from "react-redux";
import {store} from './store'
import './styles/styles.scss'
import { Footer } from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
      <Footer />
    </Provider>
  );
}

export default App;
