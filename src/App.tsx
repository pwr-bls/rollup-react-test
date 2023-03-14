import "./App.css"
import {Provider} from "react-redux";
import {createStore} from "redux";

import listReducer from "./redux/reducer";
import Button from "./components/Button";
import {useRef} from "react";
import TagsContainer from "./components/TagsContainer";

//@ts-ignore
const store = createStore(listReducer)

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const removeItem = (index: number) => {
    store.dispatch({ type: 'list/remove', value:index })
  }
  const addItem = (value: string) => {
    store.dispatch({ type: 'list/add', value })
  }

  const handleClick = () => {
    if (!inputRef?.current?.value) {
      return;
    }

    addItem(inputRef.current?.value!)
    inputRef.current.value = "";
  };

  return <Provider store={store}>
    <div id="App">
      <div className="tag-field">
        <div className="input-container">
          <input ref={inputRef} className="input-field" />
          <Button onClick={handleClick} title="Add tag" />
        </div>
        <TagsContainer onRemove={removeItem}/>
      </div>
    </div>
  </Provider>
   ;
}

export default App;
