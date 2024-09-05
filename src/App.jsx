import './App.css'
import {Provider} from "react-redux";
import store from './store/store';
import Form from "./components/Form/Form.jsx";

function App() {

  return (
    <main>
    <Provider store={store}>
    <Form/>
    </Provider>
    </main>
  )
}

export default App
