import React from "react";


class App extends React.Component {
  state = {
    Person: {
      fullname:"Flen",
      bio:"Ben Foulen",
      imgSRC:"https://w7.pngwing.com/pngs/844/95/png-transparent-anonymity-person-computer-icons-word-of-mouth-silhouette-business-internet-thumbnail.png",
      profession:"Cadre"
    },
    Shows:false,
    counter:0
  }

  toggle=()=> {
    this.setState({Shows: !this.state.Shows});
    this.setState({counter:0})
    
  }
  componentDidMount(){
   setInterval(()=>{
      this.setState({counter:this.state.counter+1})
    },1000)
  }
  

render() {
    return(
      <div> 
      <button onClick={this.toggle}> toggle </button>
      {this.state.Shows ? 
      <div>
      <img src ={this.state.Person.imgSRC} alt="hi" width={200}/>
      <h3>{this.state.Person.fullname}</h3>
      <p>{this.state.Person.bio}</p>
      <p>{this.state.Person.profession}</p>
      <h1>{`this page has stayed on for ${this.state.counter}`} </h1>
    </div> : null}
      </div>
    );
  }
}

export default App;
