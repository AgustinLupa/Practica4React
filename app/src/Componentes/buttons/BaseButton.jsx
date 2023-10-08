import "./BaseButton.css";

const BaseButton = (props) => {
    return (
        <>
            <button onClick={(e)=>{props?.callBack(props?.params)}} className="btn btn-primary button" > {props.text}</button>
        </>
    )
}

export default BaseButton;