
import React, { Component } from 'react'

export default class ImageCard extends Component {
    
    render() {
        const {description,urls}=this.props.image
        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}
