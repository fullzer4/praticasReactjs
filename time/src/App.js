import React, { Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            hora: "00:00:00"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        },1000); //1 segundo
    }

    render() {
        return(
            <div>
                <h1>hora {this.state.hora}</h1>
            </div>
        )
    }
}

export default App;