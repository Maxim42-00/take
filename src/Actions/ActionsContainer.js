import Actions from "./Actions";
import {connect} from "react-redux";

function mapStateToProps(state)
{
    return {
        items: state.actions.items,
        x: state.actions.x
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        load_items: ()=>dispatch({type: "LOAD_ITEMS"}),
        items_received: (data)=>dispatch({type: "ACTIONS_ITEMS_RECEIVED", data: data})
    };
}

let ActionsContainer = connect(mapStateToProps, mapDispatchToProps)(Actions);

export default ActionsContainer;