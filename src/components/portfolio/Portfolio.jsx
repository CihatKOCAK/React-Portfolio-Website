import { useState, useEffect } from 'react';
import PortfolioList from './portfolioList/PortfolioList';
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio, portfolioCategory } from "../../data"
import PortfolioItem from './portfolioItem/PortfolioItem';

export default function Portfolio({ trigger, setTrigger }) {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);


    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio)
        }
    }, [selected]) //apply as selected changes

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {portfolioCategory.map((item, index) => (
                    <PortfolioList
                        key={item.title + index}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d, index) => (
                    <PortfolioItem d={d} key = {index} setTrigger = {setTrigger} trigger = {trigger} />
                ))} </div>
        </div>
    )
}
