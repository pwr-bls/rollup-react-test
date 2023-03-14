import "./App.css"
import {useDispatch} from "react-redux";

import Button from "./components/Button";
import {useRef} from "react";
import TagsContainer from "./components/TagsContainer";


function App() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const removeItem = (index: number) => {
    dispatch({ type: 'list/remove', value:index })
  }
  const addItem = (value: string) => {
    dispatch({ type: 'list/add', value })
  }

  const handleClick = () => {
    if (!inputRef?.current?.value) {
      return;
    }

    addItem(inputRef.current?.value!)
    inputRef.current.value = "";
  };

  return     <div id="App">
      <div className="tag-field">
        <div className="input-container">
          <input ref={inputRef} className="input-field" />
          <Button onClick={handleClick} title="Add tag" />
        </div>
        <TagsContainer onRemove={removeItem}/>
      </div>
    </div>
   ;
}

export default App;
