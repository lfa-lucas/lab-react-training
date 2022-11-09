import "./IdCard.css";

function IdCard(props) {
    return(

        <article className="id-card">
        
        <div className="id-picture">
            <img src={props.picture} alt="" />
        </div>

        <div className="id-info">
            <p> <span>First Name: </span> <span>{props.firstName}</span></p>
            <p> <span>Last name: </span> <span>{props.lastName}</span></p>
            <p> <span>Gender: </span> <span>{props.gender}</span></p>
            <p> <span>Height: </span> <span>{(props.height / 100)}m</span></p>
            <p> <span>Birth: </span> <span>{props.birth.toDateString()}</span></p>            
        </div>
        
        </article>
    )
}

export default IdCard