const PreviewToDo = (props) => {
const { toDo, onCheck } = props;
return(
    <div>
        <div style={{marginBottom: "10px"}}></div>
        <input type="checkbox" defaultChecked={toDo.checked} onClick={() => onCheck(toDo)} style={{marginRight: "5px", marginLeft: "15px"}}/>
        {toDo.title}
    </div>
)
};

export default PreviewToDo