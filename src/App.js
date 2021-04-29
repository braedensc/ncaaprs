import React, { Component } from 'react';
import './App.css';
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
      currentAthletes: 'athletes800',
      teamurl: 'https://www.tfrrs.org/teams/GA_college_m_Georgia_Tech.html',
      id : teamID,
      isLoading: false,
      teamurlList: [],
    };
   
  }


  componentDidMount() {
    let teamurls = JSON.parse(localStorage.getItem("teamurls") || "[]");
    if (teamurls.length !== 0) {
    for (let i = 0; i < teamurls.length; i ++) {
    this.fetchData(teamurls[i])
    }
   } else {this.fetchData(this.state.teamurl)}
  }
  

/**
 * Sends a fetch req to the backend python server which then retrieves data from tfrrs
 * and then compiles into into a series of lists. THe lists are initially retrieved as a JSON object
 * @param {String} teamLink the idToken of the user
 */
  fetchData = (teamLink) => {
      q++;
      this.setState({isLoading: true})
      let team = {};
      let time1 = new Date().getTime();
      //fetch(`https://ncaaprs-backend.herokuapp.com/api/athletes/?param1=${teamLink}`)
      
      fetch(`/api/athletes/?param1=${teamLink}`)
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          throw Error (res)
        }
        let time2 = new Date().getTime();
        console.log(time2 - time1)
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

       let allAthletes60 = []
       let currAthlete60 = null
       for (let i = 0; i < data.athletes60.length; i++) {
         currAthlete60 = data.athletes60[i]
         currAthlete60 = JSON.parse(JSON.parse(currAthlete60))
         allAthletes60.push(currAthlete60)
       }
       team.athletes60 = allAthletes60

       let allAthletesHJ = []
       let currAthleteHJ = null
       for (let i = 0; i < data.athletesHJ.length; i++) {
         currAthleteHJ = data.athletesHJ[i]
         currAthleteHJ = JSON.parse(JSON.parse(currAthleteHJ))
         allAthletesHJ.push(currAthleteHJ)
       }
       team.athletesHJ = allAthletesHJ

       let allAthletesLJ = []
       let currAthleteLJ = null
       for (let i = 0; i < data.athletesLJ.length; i++) {
         currAthleteLJ = data.athletesLJ[i]
         currAthleteLJ = JSON.parse(JSON.parse(currAthleteLJ))
         allAthletesLJ.push(currAthleteLJ)
       }
       team.athletesLJ = allAthletesLJ

       let allAthletesTJ = []
       let currAthleteTJ = null
       for (let i = 0; i < data.athletesTJ.length; i++) {
         currAthleteTJ = data.athletesTJ[i]
         currAthleteTJ = JSON.parse(JSON.parse(currAthleteTJ))
         allAthletesTJ.push(currAthleteTJ)
       }
       team.athletesTJ = allAthletesTJ

       let allAthletesPV = []
       let currAthletePV = null
       for (let i = 0; i < data.athletesPV.length; i++) {
         currAthletePV = data.athletesPV[i]
         currAthletePV = JSON.parse(JSON.parse(currAthletePV))
         allAthletesPV.push(currAthletePV)
       }
       team.athletesPV = allAthletesPV

       let allAthletesWT = []
       let currAthleteWT = null
       for (let i = 0; i < data.athletesWT.length; i++) {
         currAthleteWT = data.athletesWT[i]
         currAthleteWT = JSON.parse(JSON.parse(currAthleteWT))
         allAthletesWT.push(currAthleteWT)
       }
       team.athletesWT = allAthletesWT

       let allAthletesHT = []
       let currAthleteHT = null
       for (let i = 0; i < data.athletesHT.length; i++) {
         currAthleteHT = data.athletesHT[i]
         currAthleteHT = JSON.parse(JSON.parse(currAthleteHT))
         allAthletesHT.push(currAthleteHT)
       }
       team.athletesHT = allAthletesHT

       let allAthletesST = []
       let currAthleteST = null
       for (let i = 0; i < data.athletesST.length; i++) {
         currAthleteST = data.athletesST[i]
         currAthleteST = JSON.parse(JSON.parse(currAthleteST))
         allAthletesST.push(currAthleteST)
       }
       team.athletesST = allAthletesST

       let allAthletesDT = []
       let currAthleteDT = null
       for (let i = 0; i < data.athletesDT.length; i++) {
         currAthleteDT = data.athletesDT[i]
         currAthleteDT = JSON.parse(JSON.parse(currAthleteDT))
         allAthletesDT.push(currAthleteDT)
       }
       team.athletesDT = allAthletesDT

       let allAthletesJT = []
       let currAthleteJT = null
       for (let i = 0; i < data.athletesJT.length; i++) {
         currAthleteJT = data.athletesJT[i]
         currAthleteJT = JSON.parse(JSON.parse(currAthleteJT))
         allAthletesJT.push(currAthleteJT)
       }
       team.athletesJT = allAthletesJT

       let allAthletes100H = []
       let currAthlete100H = null
       for (let i = 0; i < data.athletes100H.length; i++) {
         currAthlete100H = data.athletes100H[i]
         currAthlete100H = JSON.parse(JSON.parse(currAthlete100H))
         allAthletes100H.push(currAthlete100H)
       }
       team.athletes100H = allAthletes100H

       let allAthletes110H = []
       let currAthlete110H = null
       for (let i = 0; i < data.athletes110H.length; i++) {
         currAthlete110H = data.athletes110H[i]
         currAthlete110H = JSON.parse(JSON.parse(currAthlete110H))
         allAthletes110H.push(currAthlete110H)
       }
       team.athletes110H = allAthletes110H

       let allAthletes400H = []
       let currAthlete400H = null
       for (let i = 0; i < data.athletes400H.length; i++) {
         currAthlete400H = data.athletes400H[i]
         currAthlete400H = JSON.parse(JSON.parse(currAthlete400H))
         allAthletes400H.push(currAthlete400H)
       }
       team.athletes400H = allAthletes400H

       let allAthletes600 = []
       let currAthlete600 = null
       for (let i = 0; i < data.athletes600.length; i++) {
         currAthlete600 = data.athletes600[i]
         currAthlete600 = JSON.parse(JSON.parse(currAthlete600))
         allAthletes600.push(currAthlete600)
       }
       team.athletes600 = allAthletes600

       let allAthletes3000S = []
       let currAthlete3000S = null
       for (let i = 0; i < data.athletes3000S.length; i++) {
         currAthlete3000S = data.athletes3000S[i]
         currAthlete3000S = JSON.parse(JSON.parse(currAthlete3000S))
         allAthletes3000S.push(currAthlete3000S)
       }
       team.athletes3000S = allAthletes3000S



       let allAthletes60H = []
       let currAthlete60H = null
       for (let i = 0; i < data.athletes60H.length; i++) {
         currAthlete60H = data.athletes60H[i]
         currAthlete60H = JSON.parse(JSON.parse(currAthlete60H))
         allAthletes60H.push(currAthlete60H)
       }
       team.athletes60H = allAthletes60H

       let allAthletes100 = []
       let currAthlete100 = null
       for (let i = 0; i < data.athletes100.length; i++) {
         currAthlete100 = data.athletes100[i]
         currAthlete100 = JSON.parse(JSON.parse(currAthlete100))
         allAthletes100.push(currAthlete100)
       }
       team.athletes100 = allAthletes100

       let allAthletes200 = []
       let currAthlete200 = null
       for (let i = 0; i < data.athletes200.length; i++) {
         currAthlete200 = data.athletes200[i]
         currAthlete200 = JSON.parse(JSON.parse(currAthlete200))
         allAthletes200.push(currAthlete200)
       }
       team.athletes200 = allAthletes200

       let allAthletes400 = []
       let currAthlete400 = null
       for (let i = 0; i < data.athletes400.length; i++) {
         currAthlete400 = data.athletes400[i]
         currAthlete400 = JSON.parse(JSON.parse(currAthlete400))
         allAthletes400.push(currAthlete400)
       }
       team.athletes400 = allAthletes400

       let allAthletes1000 = []
       let currAthlete1000 = null
       for (let i = 0; i < data.athletes1000.length; i++) {
         currAthlete1000 = data.athletes1000[i]
         currAthlete1000 = JSON.parse(JSON.parse(currAthlete1000))
         allAthletes1000.push(currAthlete1000)
       }
       team.athletes1000 = allAthletes1000

       let allAthletes800 = []
       let currAthlete800 = null
       for (let i = 0; i < data.athletes800.length; i++) {
         currAthlete800 = data.athletes800[i]
         currAthlete800 = JSON.parse(JSON.parse(currAthlete800))
         allAthletes800.push(currAthlete800)
       }
       team.athletes800 = allAthletes800

       let allAthletes1500 = []
       let currAthlete1500 = null
       for (let i = 0; i < data.athletes1500.length; i++) {
         currAthlete1500 = data.athletes1500[i]
         currAthlete1500 = JSON.parse(JSON.parse(currAthlete1500))
         allAthletes1500.push(currAthlete1500)
       }
       team.athletes1500 = allAthletes1500
       let allAthletesMile = []
       let currAthleteMile = null
       for (let i = 0; i < data.athletesMile.length; i++) {
         currAthleteMile = data.athletesMile[i]
         currAthleteMile = JSON.parse(JSON.parse(currAthleteMile))
         allAthletesMile.push(currAthleteMile)
       }
       team.athletesMile = allAthletesMile
       let allAthletes3000 = []
       let currAthlete3000 = null
       for (let i = 0; i < data.athletes3000.length; i++) {
         currAthlete3000 = data.athletes3000[i]
         currAthlete3000 = JSON.parse(JSON.parse(currAthlete3000))
         allAthletes3000.push(currAthlete3000)
       }
       team.athletes3000 = allAthletes3000

       let allAthletes5000 = []
       let currAthlete5000 = null
       for (let i = 0; i < data.athletes5000.length; i++) {
         currAthlete5000 = data.athletes5000[i]
         currAthlete5000 = JSON.parse(JSON.parse(currAthlete5000))
         allAthletes5000.push(currAthlete5000)
       }
       team.athletes5000 = allAthletes5000

       let allAthletes10000 = []
       let currAthlete10000 = null
       for (let i = 0; i < data.athletes10000.length; i++) {
         currAthlete10000 = data.athletes10000[i]
         currAthlete10000 = JSON.parse(JSON.parse(currAthlete10000))
         allAthletes10000.push(currAthlete10000)
       }
       team.athletes10000 = allAthletes10000

       let allAthletes8k = []
       let currAthlete8k = null
       for (let i = 0; i < data.athletes8k.length; i++) {
         currAthlete8k = data.athletes8k[i]
         currAthlete8k = JSON.parse(JSON.parse(currAthlete8k))
         allAthletes8k.push(currAthlete8k)
       }
       team.athletes8k = allAthletes8k

       let allAthletes10k = []
       let currAthlete10k = null
       for (let i = 0; i < data.athletes10k.length; i++) {
         currAthlete10k = data.athletes10k[i]
         currAthlete10k = JSON.parse(JSON.parse(currAthlete10k))
         allAthletes10k.push(currAthlete10k)
       }
       team.athletes10k = allAthletes10k

       let allAthletes5k = []
       let currAthlete5k = null
       for (let i = 0; i < data.athletes5k.length; i++) {
         currAthlete5k = data.athletes5k[i]
         currAthlete5k = JSON.parse(JSON.parse(currAthlete5k))
         allAthletes5k.push(currAthlete5k)
       }
       team.athletes5k = allAthletes5k
       let allAthletes6k = []
       let currAthlete6k = null
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
                  console.log(this.state.teamList)
                })
        }
        }).catch((error) => {
          q--
          if (q === 0) {
            this.setState({isLoading : false})
          }
          console.log(error)
          alert("Unable to access team data (try checking internet connection, link, or team roster)")
        })
  
  }



  /**
 * Cahnges the event currently being viewed.
 * @param {String} event a String of 'pr' followed by the event: 'pr800', for example
 */
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



  /**
 * Adds a team. Should be called addTeam, but I can't be bothered to change it now
 * @param {String} event a String of 'pr' followed by the event: 'pr800', for example
 */
  changeTeam = (event) => {
    this.setState({
      teamurl : event
    })
    this.fetchData(event)
  }



  
  /**
 * Removes a team by removing it from the teamList in state
 * @param {String} teamID the unique id assigned to the team when it was added
 */
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


  
  /**
 * Removes all the teams, clears the teamList in state, clears localStorage
 */
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
       teamList, isLoading
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
