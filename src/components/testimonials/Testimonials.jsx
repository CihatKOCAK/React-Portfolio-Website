import './testimonials.scss'
import { testimonialsData } from '../../data'

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {testimonialsData.map(p => (
                    <div className={p.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className="left" src="assets/right-arrow.png" alt="" />
                            <img className="user" src={p.img} alt="" />
                            <img className="right" src={p.icon} alt="" />
                        </div>
                        <div className="center">
                            {p.desc}
                        </div>
                        <div className="bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
