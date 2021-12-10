import './popup.scss'


export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-overlay active">
            <div className="popup">
                <a className="close" href="#" onClick={() => props.setTrigger(false)}>&times;</a>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}