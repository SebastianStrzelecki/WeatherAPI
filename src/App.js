import React, {
  Component
} from 'react';
import './App.css';
import Weather from './Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      pressure:"",
      windSpeed:"",
      error: false,
      valueCity: "Warsaw"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.DownloadWeather = this.DownloadWeather.bind(this);
    this.Translate = this.Translate.bind(this);
  }

  DownloadWeather(){
    console.log(API+this.state.valueCity+appiid);
    fetch(API+this.state.valueCity+appiid)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          temperature: (data.main.temp-274),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].main,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          error:false
        })})
        .catch(error => this.setState({ error:true }));
  }
  componentDidMount() {
    this.DownloadWeather();
   
    }
    Translate(weatherMain){
        switch (weatherMain) {
          case "Mist":
            return "Zamglenie";
            case "Snow":
            return "Śnieg"
            case "Rain":
            return "Deszcz"
            case "Clouds":
            return "Pochmurno"
            case "Clear":
            return "Przejaśnia się"
          default:
          return weatherMain;
        }
    }
    handleChange(event) {
      this.setState({valueCity: event.target.value});
    }
  
    handleSubmit(event) {
      this.DownloadWeather();
      event.preventDefault();
    }
  render() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; 
    const yyyy = today.getFullYear();
    if(this.state.error){
      return(
        <div className="app" >
        <h2 className="info">Brak wybranej miejscowości w bazie</h2> 
        <form onSubmit={this.handleSubmit} className="input-group">
      <label>Miasto: </label>
          <input placeholder="Podaj miasto" type="text" value={this.state.valueCity} onChange={this.handleChange} className="form-control"/>
        <div className="input-group-append">
        <button type="submit"  className="btn btn-outline-secondary">Wyszukaj</button>
        </div>
      </form>
        </div>
      )
    }
    else{
    return ( 
    <div className="container">

    <div className="main">
    <div className="row"> 
    <div className="col-xl-8 offset-xl-2">
    
    <p className="date">Dzisiaj mamy {dd}.{mm}.{yyyy}</p>
     <Weather
      temperature = {this.state.temperature}
      city= {this.state.city}
      humidity=  {this.state.humidity}
      pressure ={this.state.pressure}
      windSpeed = {this.state.windSpeed}
      country = {this.state.country}
      description= {this.Translate(this.state.description)}
     />
     </div>
      <div className="col-xl-8 offset-xl-2">
      <form onSubmit={this.handleSubmit} className="input-group">
      <label>Miasto: </label>
          <input placeholder="Podaj miasto" type="text" value={this.state.valueCity} onChange={this.handleChange} className="form-control"/>
        <div className="input-group-append">
        <button type="submit"  className="btn btn-outline-secondary">Wyszukaj</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    );}
  }
}


export default App;