import Menu from "./Menu";
import {connect} from "react-redux";

function mapStateToProps(state)
{
    return {
        menu_items: state.menu.menu_items
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        
    };
}

let MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;