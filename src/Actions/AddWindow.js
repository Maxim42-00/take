import React from "react";
import "./add_window.css";

class AddWindow extends React.Component
{
    constructor(props)
    {
         super(props);
         this.add_window_ok = this.add_window_ok.bind(this);
    }
    add_window_ok()
    {
        let start_data;
        let end_data;
        if((this.start_date.value==="") || (this.start_time.value==="") || (this.end_date.value==="") || (this.end_time.value===""))
        {
            alert("Введите корректные дату и время");
            return;
        }

        let start_date = new Date(this.start_date.value + " " + this.start_time.value);
        let end_date = new Date(this.end_date.value + " " + this.end_time.value);
        let cur_date = new Date();

        if(start_date < cur_date)
        {
            alert("Введите будущее время начала аренды");
            return;
        }

        if(start_date > end_date)
        {
            alert("Дата и время начала аренды должны быть раньше даты и времени окончания аренды");
            return;
        }
        let arend_date_time={
            start: Math.floor(start_date.valueOf()/1000),
            end: Math.floor(end_date.valueOf()/1000)
        };
        this.props.add_window_ok_send(this.props.img, arend_date_time);
            
    }
    render()
    {
        return (
            <div className="AddWindow">
                <div className="add_window_content">
                    <img src={this.props.img} className="add_window_img" />
                    <div> Начало Аренды </div>
                    <div>
                        <input type="date" ref={(r)=>this.start_date=r} />
                        <input type="time" ref={(r)=>this.start_time=r} />
                    </div>
                    <div> Конец Аренды </div>
                    <div>
                        <input type="date" ref={(r)=>this.end_date=r} />
                        <input type="time" ref={(r)=>this.end_time=r} />
                    </div>
                    <div className="add_window_btn" onClick={this.add_window_ok}>OK</div>
                    <div className="add_window_btn" onClick={this.props.add_window_cancel}>Отмена</div>
                </div>
            </div>
        );
    }
}

export default AddWindow;