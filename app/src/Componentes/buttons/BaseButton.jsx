const BaseButton = (props) => {
    return (
        <>
            <button onClick={(e)=>{props?.callBack(props?.params)}} className="btn btn-primary" > {props.text}</button>
        </>
    )
}

export default BaseButton;