import React from 'react'
import '../style/counter.css'

class Counter extends React.Component {
    state = {
        count: 1,
        character: {}
    }

    add = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    subtract = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({ character: data }))
    }

    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
    }

    componentDidUpdate(pervProps, prevState) {
        if (prevState.count !== this.state.count)
            this.getStarWarsCharacter(this.state.count)
    }

    render() {
        return (
            <>
                <div className="counter">
                    <button className="counter-minus" onClick={this.subtract}>–</button>
                    <div className="counter-count mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="counter-plus" onClick={this.add}>+</button>
                </div>
                <div className="lg:text-center">
                    <h1 className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>{this.state.character.name || "Loading..."}</h1>
                </div>
            </>
        )
    }
}

export default Counter