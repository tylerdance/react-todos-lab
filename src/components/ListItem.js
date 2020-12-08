function ListItem(props) {
    return(
        <div>
            <li>{props.priority}: {props.thing}</li>
        </div>
    );
}

export default ListItem;