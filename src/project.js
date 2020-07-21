import React from "react"
import PropTypes from "prop-types"

const Project = ({ title, imageUrl, technologies, description, links}) => (
    <div className="op-card">
        <img key= {imageUrl} src={imageUrl} className="op-img" alt="logo" width="250px" height="150px" />
        <div className="op-text">
            <h1 className="op-title" key={title} >{title}</h1>
            <br />
            <h3 className="op-tech">technologies:</h3>
            <p className="op-tech-text" key= {technologies}>{technologies.join(" // ")}</p>
            <br />
            <h3 className="op-description">project's description:</h3>
            <p className="op-description-text" key={description}>{description}</p>
            {links.map(link => (
                <>
                    <br />
                    <a className="op-demo" key ={link} href={link.url} rel="noopener noreferrer" target='_blank'>{link.title}</a>
                </>
            ))}
        </div>
    </div>
)

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })).isRequired,
}

export default Project