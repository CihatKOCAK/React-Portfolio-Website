import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        }, {
            id: "branding",
            title: "Branding",
        },


    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.jcgroup.hk/wp-content/uploads/2019/08/test-img-300x194_2.png" alt="Banking App" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.jcgroup.hk/wp-content/uploads/2019/08/test-img-300x194_2.png" alt="Banking App" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.jcgroup.hk/wp-content/uploads/2019/08/test-img-300x194_2.png" alt="Banking App" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.jcgroup.hk/wp-content/uploads/2019/08/test-img-300x194_2.png" alt="Banking App" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.jcgroup.hk/wp-content/uploads/2019/08/test-img-300x194_2.png" alt="Banking App" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
