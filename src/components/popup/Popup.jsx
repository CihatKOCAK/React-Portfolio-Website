import './popup.scss'


export default function Popup(props) {

    const clear = () => {
        props.setTrigger(false);
        

    }
    return (
        <div key={props.key} className={"popup-overlay " + (props.trigger ? "active" : "unactive")} onClick={() => props.setTrigger(false)} >
            <div className="popup">
                <a className="close" href="#" onClick={() => clear()}>&times;</a>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )

}