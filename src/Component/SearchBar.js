import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={
        datas:""
    }
    submitFrom=event=>{
        event.preventDefault()
        this.props.onSubmit(this.state.datas)
    }
    render() {
        
        return (
            <div className="ui segment">
                <form onSubmit={this.submitFrom} className="ui form">
                    <div className="field">
                        <label>
                            <h1>Sreach Image</h1> 
                        </label>
                        <input type="text" value={this.state.datas} onChange={e=>this.setState({datas:e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}
