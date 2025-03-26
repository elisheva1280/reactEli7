// import { RECYCLE } from "../redux/actionTipes";
import { useDispatch, useSelector } from "react-redux";
// import { ADDTODO,REMOVETODO } from "../redux/actionTipes";
import { addToDo, removeToDo } from "../redux/actions";
import { recycle, remforever } from "../redux/actions";
import './style.css';

export default function RecycleBin() {
    const dispatch = useDispatch();
    const rec = useSelector((state) => state.Recycle.Recycle);


    const recTo = (rec) => {
        dispatch(addToDo({ id: Number(rec.taskId), Name: rec.taskName, Time: rec.taskTime })); 
    }



    // Define the handleRemoveFromRec function
    const handleRemoveFromRec = (id) => {
        dispatch(removeToDo(id)); // or appropriate action based on your design
    };


    return (
        <>
            <h1>My Recycle Bin ♻️♻️♻️</h1>
            {rec && Array.isArray(rec) && rec.length > 0 ? (
                rec.map((item) => (
                    <div key={item.id}>
                        <span>{item.Name}</span>
                        {/* <button onClick={() => handleRemoveFromRec(item.id)}>Remove</button> */}
                        <button onClick={recTo} type="button">recycle</button>
                        <button onClick={handleRemoveFromRec} type="button">Remove</button>
                    </div>
                ))

            ) : (

                <p>No items in the recycle bin.</p>

            )}




            {/* <div>
          {todos.rec((s, index) => (
              <div key={s.id}>the id: {s.id} : the name of task: {s.Name}🐥 
                 in ocklock {s.Time}🐧</div>
         ))}

        </div> */}
        </>
    );
};