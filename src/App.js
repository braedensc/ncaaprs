import React, { Component } from 'react';
import './App.css';
import List from './List';
import Sidebar from './Sidebar';
import Header from './Header';
import TeamList from './TeamList'
import LinearIndeterminate from './LinearIndeterminate'




let teamID = 1;
let q = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime : null,
      teamList: [],
      athletes : [],
      athletes800: [],
      athletes1500: [],
      athletesMile: [],
      athletes3000: [],
      athletes5000: [],
      athletes10000: [],
      athletes8k: [],
      athletes10k: [],
      athletes5k: [],
      athletes6k: [],
      currentAthletes: 'athletes800',
      teamurl: 'https://www.tfrrs.org/teams/GA_college_m_Georgia_Tech.html',
      id : teamID,
      isLoading: false,
      teamurlList: [],
    };
   
  }


  componentDidMount() {
    let teamurls = JSON.parse(localStorage.getItem("teamurls") || "[]");
    console.log(teamurls)
    if (teamurls.length !== 0) {
    for (let i = 0; i < teamurls.length; i ++) {
    this.fetchData(teamurls[i])
    }
   } else {this.fetchData(this.state.teamurl)}
  }
  


  fetchData = (teamLink) => {
      q++;
      this.setState({isLoading: true})
      let team = {};
      fetch(`/athletes/?param1=${teamLink}`)
      .then((res) => {
        if (!res.ok) {
          throw Error (res.statusText)
        }
        return res.json()})
      .then(data => {
        console.log(data)
        let allAthletes = []
        let currAthlete = null
        for (let i = 0; i < data.athletes.length; i++) {
          currAthlete = data.athletes[i]
          currAthlete = JSON.parse(JSON.parse(currAthlete))
          allAthletes.push(currAthlete)
        }
       team.teamurl = teamLink
       team.athletes = allAthletes

       let allAthletes800 = []
       let currAthlete800 = null
       console.log(data)
       for (let i = 0; i < data.athletes800.length; i++) {
         currAthlete800 = data.athletes800[i]
         currAthlete800 = JSON.parse(JSON.parse(currAthlete800))
         allAthletes800.push(currAthlete800)
       }
       team.athletes800 = allAthletes800

       let allAthletes1500 = []
       let currAthlete1500 = null
       console.log(data)
       for (let i = 0; i < data.athletes1500.length; i++) {
         currAthlete1500 = data.athletes1500[i]
         currAthlete1500 = JSON.parse(JSON.parse(currAthlete1500))
         allAthletes1500.push(currAthlete1500)
       }
       team.athletes1500 = allAthletes1500

       let allAthletesMile = []
       let currAthleteMile = null
       console.log(data)
       for (let i = 0; i < data.athletesMile.length; i++) {
         currAthleteMile = data.athletesMile[i]
         currAthleteMile = JSON.parse(JSON.parse(currAthleteMile))
         allAthletesMile.push(currAthleteMile)
       }
       team.athletesMile = allAthletesMile

       let allAthletes3000 = []
       let currAthlete3000 = null
       console.log(data)
       for (let i = 0; i < data.athletes3000.length; i++) {
         currAthlete3000 = data.athletes3000[i]
         currAthlete3000 = JSON.parse(JSON.parse(currAthlete3000))
         allAthletes3000.push(currAthlete3000)
       }
       team.athletes3000 = allAthletes3000

       let allAthletes5000 = []
       let currAthlete5000 = null
       console.log(data)
       for (let i = 0; i < data.athletes5000.length; i++) {
         currAthlete5000 = data.athletes5000[i]
         currAthlete5000 = JSON.parse(JSON.parse(currAthlete5000))
         allAthletes5000.push(currAthlete5000)
       }
       team.athletes5000 = allAthletes5000

       let allAthletes10000 = []
       let currAthlete10000 = null
       console.log(data)
       for (let i = 0; i < data.athletes10000.length; i++) {
         currAthlete10000 = data.athletes10000[i]
         currAthlete10000 = JSON.parse(JSON.parse(currAthlete10000))
         allAthletes10000.push(currAthlete10000)
       }
       team.athletes10000 = allAthletes10000

       let allAthletes8k = []
       let currAthlete8k = null
       console.log(data)
       for (let i = 0; i < data.athletes8k.length; i++) {
         currAthlete8k = data.athletes8k[i]
         currAthlete8k = JSON.parse(JSON.parse(currAthlete8k))
         allAthletes8k.push(currAthlete8k)
       }
       team.athletes8k = allAthletes8k

       let allAthletes10k = []
       let currAthlete10k = null
       console.log(data)
       for (let i = 0; i < data.athletes10k.length; i++) {
         currAthlete10k = data.athletes10k[i]
         currAthlete10k = JSON.parse(JSON.parse(currAthlete10k))
         allAthletes10k.push(currAthlete10k)
       }
       team.athletes10k = allAthletes10k

       let allAthletes5k = []
       let currAthlete5k = null
       console.log(data)
       for (let i = 0; i < data.athletes5k.length; i++) {
         currAthlete5k = data.athletes5k[i]
         currAthlete5k = JSON.parse(JSON.parse(currAthlete5k))
         allAthletes5k.push(currAthlete5k)
       }
       team.athletes5k = allAthletes5k

       let allAthletes6k = []
       let currAthlete6k = null
       console.log(data)
       for (let i = 0; i < data.athletes6k.length; i++) {
         currAthlete6k = data.athletes6k[i]
         currAthlete6k = JSON.parse(JSON.parse(currAthlete6k))
         allAthletes6k.push(currAthlete6k)
       }
       team.athletes6k = allAthletes6k
       
      teamID ++
      team.id = teamID
      team.currentAthletes = this.state.currentAthletes
      team.ref = React.createRef()
      q--
      if (q !== 0) {
      this.setState((prevState) => ({
      teamList : [...prevState.teamList, team],
      teamurlList : [...prevState.teamurlList, teamLink]
          }), () => {

            localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList))
          })
        } else {
          this.setState((prevState) => ({
            teamList : [...prevState.teamList, team],
            teamurlList : [...prevState.teamurlList, teamLink],
            isLoading: false
                }), () => {

                  localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList))
                })
        }
        const t = this.state.teamList
        console.log(this.state.teamList)
        }).catch((error) => {
          q--
          if (q === 0) {
            this.setState({isLoading : false})
          }
          alert("Unable to access team data (try checking internet connection, link, or team roster)")
        })
       
  }

  changeEvent = (event) => {
    let teams = this.state.teamList 
    for (let i = 0; i < teams.length; i ++) {
      teams[i].currentAthletes = event
    }
    this.setState({
      currentAthletes : event,
      teamList : teams
    })
  }

  changeTeam = (event) => {
    this.setState({
      teamurl : event
    })
    this.fetchData(event)
  }

  removeTeam = (teamID) => {
      this.setState((prevState) => {
        const newTeamList = prevState.teamList.filter((team) => team.id !== teamID);
        const tempTeamList = prevState.teamList.filter((team) => team.id === teamID);
        const newTeamurlList =  prevState.teamurlList.filter((url) => url !== tempTeamList[0].teamurl);
        return {
          teamList: newTeamList,
          teamurlList : newTeamurlList
        };
      }, () => {

                  localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList))
                });
  }

  removeAllTeams = () => {
    this.setState((prevState) => {
      return {
        teamList: [],
        teamurlList : [],

      };
    }, () => {

      localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList))
    });
  }


  render() {
    
    const {
      currentTime, athletes, athletes800, athletes1500, athletesMile, athletes3000, athletes5000, athletes10000, athletes8k, athletes10k, currentAthletes, teamList, athletes5k, athletes6k, isLoading
    } = this.state;


    return(
      
      <div>
        
       <Header
       removeTeams = {this.removeAllTeams}
       changeTeam = {this.changeTeam}
        />
       <Sidebar
        changeEvent = {this.changeEvent}
       />
       <div className="loading">
       <LinearIndeterminate
         isLoading = {isLoading}
       />
        <LinearIndeterminate
         isLoading = {isLoading}
       />
       </div>
       <div className="main-container">
                <div className="main-content">
                  <TeamList
                    teamList={teamList}
                    removeFunc ={this.removeTeam}
                  />
                </div>
  </div>
      
      

      </div>
    );
  }
}




export default App;
