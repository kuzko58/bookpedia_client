import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Library from "./pages/Library";
import './App.css'



function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Library />
      </Layout>
    </Provider>
  );
}

export default App
