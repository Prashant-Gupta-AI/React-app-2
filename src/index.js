import React from 'react'
import ReactDOM from 'react-dom'
import HemisphereDisplay from './HemisphereDisplay'

class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = { latitude: null, errormessage: ''}
    // }

    state = { latitude: null, errormessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState( { latitude:position.coords.latitude })
            },
            (error)=>this.setState( { errormessage: error.message})
        );

    }
    render(){
        // return(
            // <div>
            //     {this.state.latitude}
            //     {this.state.errormessage}
            // </div>
        // );

        //Conditional rendering
        if(this.state.errormessage && !this.state.latitude){
            return <div> {this.state.errormessage} </div>
        }
        if(!this.state.errormessage && this.state.latitude){
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }
        else{
            return <div>Loading</div>
        }
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
    