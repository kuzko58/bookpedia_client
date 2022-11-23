import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import './App.css'



function App() {
  return (
    <Provider store={store}>
      <Layout>
        <main>This app is using the dark mode</main>
      </Layout>
    </Provider>
  );
}

export default App
