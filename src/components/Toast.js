import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./toast.css";

const Toast = forwardRef((props, ref) => {
    const [showMessage, setShowMessage] = useState(false);

    useImperativeHandle(ref, () => ({
        show(){
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        },
    }));

    return (
        <div className="toast" id={showMessage ? "show" : "hide"} style={{backgroundColor: props.type === "success" ? 
        "#00F593" : "#FF0033", color: props.type === "success" ? "black" : "white",}}>
            <div className="symbol">
                {props.type === "success" ?  <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            </div>
            <div className="message">{props.message}</div>
        </div>
    );
});

export default Toast;