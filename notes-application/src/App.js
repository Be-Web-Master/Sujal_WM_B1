import './App.css';
import { FormComponent } from './formComponent';
import { NotesContainer } from './notesContainer';
import reduxStore from "./redux/store";
import { Provider } from 'react-redux';
function App() {


  return (

    <Provider store={reduxStore}>
      <div className="App">
        <FormComponent />
        <NotesContainer />
      </div>
    </Provider>
  );
}

export default App;