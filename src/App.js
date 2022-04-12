import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import personalImg from './imageInPublic.jpg';

class App extends React.Component {
  state = {
    show: true,
    Person: {
      fullName: "Sokhna Faye",
      bio: "Technicienne développement web",
      imgSrc: personalImg,
      profession: "Develeper "
    },
    compt: 0
  }

  incrimentCompt=()=>{
    const {compt} =this.state;
    this.setState({compt:compt+1});
  }
  componentDidMount(){
    setInterval(this.incrimentCompt, 1000 )
  }

  handleClick = () => this.setState({ show: !this.state.show })

   
  render() {
    const styleProfile = {
      display: 'flex', margin: '40px 60px', justifyItems: 'center', textAlign: 'center'
    }
    
    return (

      <div className="container card-body col-lg-6" style={{heigth:'100%',width:'100%',backgroundColor:'Menu', margin:'25px 100px'}}>
          <div className="btn btn-danger" style={{marginLeft:'400px'}} >
          <h1>Duré de vie</h1>
        <h1>{this.state.compt}</h1>
        </div>
        <br></br>
        <br></br>

        
        <button className="btn btn-primary" style={{ marginLeft: '500px' }} onClick={this.handleClick}>{this.state.show ? 'Masquer' : 'Afficher'}</button>
     
        {(this.state.show) &&
          <div style={styleProfile}>
            <div style={{ float: "left", marginRight: "100px" }}>
              <img src={personalImg} alt="image personel" width='300 px' height='250px' />

            </div>
            <div style={{ float: "right" }}>
              <h1>{this.state.Person.fullName}</h1>
              <h2>{this.state.Person.bio}</h2>
              <h2>{this.state.Person.profession}</h2>
            </div>

          </div>
        }

      </div>
    );

  }
}


export default App;
