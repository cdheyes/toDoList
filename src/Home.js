import { useState } from "react";

const Home = () => {
  const [listArray, setList] = useState([]);

  const [newToDo, setNewToDo] = useState("");

  //use splice and index to target array items
  const deleteHandler = (index) => {
    let newList = [...listArray];
    newList.splice(index, 1);
    setList(newList);
  };

  // why this no work?
  const inputHandler = (event) => {
    event.preventDefault();
    //add tasks to new array
    setList([...listArray, newToDo]);
    //clear input
    setNewToDo("");
  };

  console.log(listArray);

  return (
    <div>
      <form>
        <input
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
        />
        <button onClick={inputHandler}>add ToDo</button>
      </form>
      <div>
        {listArray.map((item, index) => (
          <div key={index}>
            <h2>{item}</h2>
            <button onClick={() => deleteHandler(index)}>delete ToDo</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;