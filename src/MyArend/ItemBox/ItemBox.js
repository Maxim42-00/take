import React from "react";
import "./ItemBox.css";
import timestamp_to_string from "../../functions/timestamp_to_string";

class ItemBox extends React.Component
{
    render()
    {
        const start_str = timestamp_to_string(this.props.start*1000);
        const end_str = timestamp_to_string(this.props.end*1000);

        return (
            <div className="ItemBox">
                <img className="item_box_img" src={this.props.img} />
                <div>
                    <div className="item_box_date"> Начало Аренды: </div>
                    <div className="item_box_date"> {start_str} </div>
                    <div className="item_box_date"> Срок Сдачи: </div>
                    <div className="item_box_date"> {end_str} </div>
                </div>
                <div className="id_num">
                    {this.props.id_num}
                </div>
            </div>
        );
    }
};

export default ItemBox;