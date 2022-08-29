import PreviewToDo from "./ToDoPreview";

const ToDoList = (props) => {
    const {list, remove} = props;
    return list.map((toDo) => {
        return(
           <div key={toDo.id} className="mx-auto card" style={{width: "75%", height: "50px"}}>
            <div className="row">
                <div className="col-sm-11">
                <PreviewToDo remove={remove} toDo={toDo}></PreviewToDo>
                </div>
            <div className="col-sm-1">
                <button onClick={() => remove(toDo.id)} type="button" className="btn btn-primary" style={{marginTop: "5px"}}> 🗑️ </button>
            </div>
            </div>
            </div>
        );
    });
};

export default ToDoList