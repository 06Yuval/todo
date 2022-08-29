const PreviewToDo = (props) => {
const { toDo } = props;
return(
    <div>
        <div style={{marginBottom: "10px"}}></div>
        <input type="checkbox" style={{marginRight: "5px", marginLeft: "15px"}}/>
        {toDo.title}
    </div>
)
};

export default PreviewToDo