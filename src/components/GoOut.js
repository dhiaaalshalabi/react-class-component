import React from 'react'
import '../style/goout.css'

class GoOut extends React.Component {
    state = {
        goOut: true
    }

    toggleGoOut = () => {
        this.setState(prevState => {
            return {
                goOut: !prevState.goOut
            }
        })
    }

    render() {
        return (
            <div className='go-out'>
                <div className="state">
                    <h1 className="state-title">Should I go out tonight?</h1>
                    <div className="state-value" onClick={this.toggleGoOut}>
                        <h1>{this.state.goOut ? "Yes" : "No"}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoOut
