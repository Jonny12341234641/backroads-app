const Title = ({title, subTitle}) => {
    return (
        <div className="section-title">
            <h2>
                {title}
                <br />
                <span>{subTitle}</span>
            </h2>
        </div>
    )
}

export default Title;