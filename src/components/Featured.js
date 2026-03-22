import { featured } from "../data";
import Title from "./Title";
// import featured from "../data";


const Featured = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />
            
            <div className="section-center featured-center">
                {featured.map((featured) => {
                    const {id, image, date, title, info, location, duration, cost} = featured;
                    return (<article className="tour-card" key = {id}>
                    <div className="tour-img-container">
                        <img src={image} className="tour-img" alt={title} />
                        <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>{title}</h4>
                        </div>
                        <p>
                            {info}
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span> china
                            </p>
                            <p>{duration}</p>
                            <p>{cost}</p>
                        </div>
                    </div>
                </article>)
                })}
            </div>
        </section>
    )
}

export default Featured;
