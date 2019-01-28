import React, {
  Component
} from 'react';
import './App.css';
import Weather from './Weather.js';

const API = 'http://api.openweathermap.org/data/2.5/weather?q='
const appiid ='&appid=96cb99ba3c51c4da43eef0c4bc50a33e';
const APIFB= 'https://facebook.github.io/react-native/movies.json';
const DEFAULT_QUERY = 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      items:[],
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: false,
      valueCity: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handDownloadWeatherleSubmit = this.DownloadWeather.bind(this);
  }

  DownloadWeather(){
    console.log(API+this.state.valueCity+appiid);
    fetch(API+this.state.valueCity+appiid)
    .then(res => res.json())
    .then(
      (data) => {
        if(data.cod=="400" || data.cod=="404"){
          this.setState({error:true})
        }
        else{
        this.setState({
          isLoaded: true,
          temperature: (274-data.main.temp),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error:false
        })}})
  }
  componentDidMount() {
   
    // fetch(API+this.state.valueCity+appiid)
    // .then(res => res.json())
    // .then(
    //   (data) => {
    //     this.setState({
    //       isLoaded: true,
    //       temperature: (274-data.main.temp),
    //       city: data.name,
    //       country: data.sys.country,
    //       humidity: data.main.humidity,
    //       description: data.weather[0].description,
    //     });
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )
    }

    handleChange(event) {
      this.setState({valueCity: event.target.value});
    }
  
    handleSubmit(event) {
      this.DownloadWeather();
      event.preventDefault();
    }
  render() {
    if(this.state.error){
      return(
        <div className="app" >Brak wybranej miejscowości 
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.valueCity} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
      )
    }
    else{
    return ( <div className="app" > 
     <Weather
     temperature = {this.state.temperature}
    
     city= {this.state.city}
     humidity=  {this.state.humidity}
      country = {this.state.country}
      description= {this.state.description}
     />
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.valueCity} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      </div>
    );}
  }
}


export default App;