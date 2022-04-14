import { useState } from 'react';

const Home = () => {
    
    const [listArray, setList] = useState([
    { toDoText: 'this is to do number 1', id: 1 },
    { toDoText: 'this is to do number 2', id: 2 },
    { toDoText: 'this is to do number 3', id: 3 }
    ]);

    const [newToDo, setNewToDo] = useState('');

    const deleteHandler = (id) => {
        let newList = listArray.filter(listArray => listArray.id !== id);
        setList(newList);
    }

    const inputHandler = () => {

        let newList = [...listArray];
        newList.push(newToDo);
        setList(newList);

    };

    return ( 
        <div>
            <form>
                <input onChange={(e) => setNewToDo(e.target.value)} />  
                <button onClick={inputHandler}>add ToDo</button>        
            </form>
            <h2>{newToDo}</h2>
            <ToDoList listArray={listArray} deleteHandler={deleteHandler} />
        </div>
     );
}

// This could go in a seperate component file
const ToDoList = ( { listArray, deleteHandler }) => {

    return ( 
        <div>
            {listArray.map((props) => (
                <div key={props.id}>
                    <h2>{ props.toDoText }</h2>
                    <button onClick={() => deleteHandler(props.id)}>delete ToDo</button>
                </div>

            ))} 
        </div>
     );
}

export default Home;