import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, Url}) =>{
    return(
        <Col sm={6} md={4}>
            <a href={Url} target="_blank">
            <div className="proj-imgbx">
                <img src={imgUrl} className="img-box"></img>
            </div>
            <div className="proj-txtx">
                <h4 style={{color:"white"}}>{title}</h4>
                <span style={{color:"white"}}>{description}</span>
            </div>
            </a>
        </Col>
    )
}
            
        
            