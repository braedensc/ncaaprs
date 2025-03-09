import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import TeamList from './TeamList';
import LinearIndeterminate from './LinearIndeterminate';

let teamID = 1;
let q = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: null,
      teamList: [],
      currentAthletes: 'pr800',
      teamurl: 'https://www.tfrrs.org/teams/GA_college_m_Georgia_Tech.html',
      id: teamID,
      isLoading: false,
      teamurlList: [],
    };
  }

  componentDidMount() {
    let teamurls = JSON.parse(localStorage.getItem("teamurls") || "[]");
    if (teamurls.length !== 0) {
      for (let i = 0; i < teamurls.length; i++) {
        this.fetchData(teamurls[i]);
      }
    } else {
      this.fetchData(this.state.teamurl);
    }
  }

  fetchData = (teamLink) => {
    q++;
    this.setState({ isLoading: true });
    let team = {};
    fetch(`/api/athletes/?param1=${teamLink}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(res);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        let allAthletes = [];
        for (let i = 0; i < (data.athletes ?? []).length; i++) {
          allAthletes.push(data.athletes[i]);
        }
        team.teamurl = teamLink;
        team.athletes = allAthletes;

        let allAthletes60 = [];
        for (let i = 0; i < (data.pr60 ?? []).length; i++) {
          allAthletes60.push(data.pr60[i]);
        }
        team.pr60 = allAthletes60;

        let allAthletesHJ = [];
        for (let i = 0; i < (data.prHJ ?? []).length; i++) {
          allAthletesHJ.push(data.prHJ[i]);
        }
        team.prHJ = allAthletesHJ;

        let allAthletesLJ = [];
        for (let i = 0; i < (data.prLJ ?? []).length; i++) {
          allAthletesLJ.push(data.prLJ[i]);
        }
        team.prLJ = allAthletesLJ;

        let allAthletesTJ = [];
        for (let i = 0; i < (data.prTJ ?? []).length; i++) {
          allAthletesTJ.push(data.prTJ[i]);
        }
        team.prTJ = allAthletesTJ;

        let allAthletesPV = [];
        for (let i = 0; i < (data.prPV ?? []).length; i++) {
          allAthletesPV.push(data.prPV[i]);
        }
        team.prPV = allAthletesPV;

        let allAthletesWT = [];
        for (let i = 0; i < (data.prWT ?? []).length; i++) {
          allAthletesWT.push(data.prWT[i]);
        }
        team.prWT = allAthletesWT;

        let allAthletesHT = [];
        for (let i = 0; i < (data.prHT ?? []).length; i++) {
          allAthletesHT.push(data.prHT[i]);
        }
        team.prHT = allAthletesHT;

        let allAthletesST = [];
        for (let i = 0; i < (data.prST ?? []).length; i++) {
          allAthletesST.push(data.prST[i]);
        }
        team.prST = allAthletesST;

        let allAthletesDT = [];
        for (let i = 0; i < (data.prDT ?? []).length; i++) {
          allAthletesDT.push(data.prDT[i]);
        }
        team.prDT = allAthletesDT;

        let allAthletesJT = [];
        for (let i = 0; i < (data.prJT ?? []).length; i++) {
          allAthletesJT.push(data.prJT[i]);
        }
        team.prJT = allAthletesJT;

        let allAthletes100H = [];
        for (let i = 0; i < (data.pr100H ?? []).length; i++) {
          allAthletes100H.push(data.pr100H[i]);
        }
        team.pr100H = allAthletes100H;

        let allAthletes110H = [];
        for (let i = 0; i < (data.pr110H ?? []).length; i++) {
          allAthletes110H.push(data.pr110H[i]);
        }
        team.pr110H = allAthletes110H;

        let allAthletes400H = [];
        for (let i = 0; i < (data.pr400H ?? []).length; i++) {
          allAthletes400H.push(data.pr400H[i]);
        }
        team.pr400H = allAthletes400H;

        let allAthletes600 = [];
        for (let i = 0; i < (data.pr600 ?? []).length; i++) {
          allAthletes600.push(data.pr600[i]);
        }
        team.pr600 = allAthletes600;

        let allAthletes3000S = [];
        for (let i = 0; i < (data.pr3000S ?? []).length; i++) {
          allAthletes3000S.push(data.pr3000S[i]);
        }
        team.pr3000S = allAthletes3000S;

        let allAthletes60H = [];
        for (let i = 0; i < (data.pr60H ?? []).length; i++) {
          allAthletes60H.push(data.pr60H[i]);
        }
        team.pr60H = allAthletes60H;

        let allAthletes100 = [];
        for (let i = 0; i < (data.pr100 ?? []).length; i++) {
          allAthletes100.push(data.pr100[i]);
        }
        team.pr100 = allAthletes100;

        let allAthletes200 = [];
        for (let i = 0; i < (data.pr200 ?? []).length; i++) {
          allAthletes200.push(data.pr200[i]);
        }
        team.pr200 = allAthletes200;

        let allAthletes400 = [];
        for (let i = 0; i < (data.pr400 ?? []).length; i++) {
          allAthletes400.push(data.pr400[i]);
        }
        team.pr400 = allAthletes400;

        let allAthletes1000 = [];
        for (let i = 0; i < (data.pr1000 ?? []).length; i++) {
          allAthletes1000.push(data.pr1000[i]);
        }
        team.pr1000 = allAthletes1000;

        let allAthletes800 = [];
        for (let i = 0; i < (data.pr800 ?? []).length; i++) {
          allAthletes800.push(data.pr800[i]);
        }
        team.pr800 = allAthletes800;

        let allAthletes1500 = [];
        for (let i = 0; i < (data.pr1500 ?? []).length; i++) {
          allAthletes1500.push(data.pr1500[i]);
        }
        team.pr1500 = allAthletes1500;

        let allAthletesMile = [];
        for (let i = 0; i < (data.prMile ?? []).length; i++) {
          allAthletesMile.push(data.prMile[i]);
        }
        team.prMile = allAthletesMile;

        let allAthletes3000 = [];
        for (let i = 0; i < (data.pr3000 ?? []).length; i++) {
          allAthletes3000.push(data.pr3000[i]);
        }
        team.pr3000 = allAthletes3000;

        let allAthletes5000 = [];
        for (let i = 0; i < (data.pr5000 ?? []).length; i++) {
          allAthletes5000.push(data.pr5000[i]);
        }
        team.pr5000 = allAthletes5000;

        let allAthletes10000 = [];
        for (let i = 0; i < (data.pr10000 ?? []).length; i++) {
          allAthletes10000.push(data.pr10000[i]);
        }
        team.pr10000 = allAthletes10000;

        let allAthletes8k = [];
        for (let i = 0; i < (data.pr8k ?? []).length; i++) {
          allAthletes8k.push(data.pr8k[i]);
        }
        team.pr8k = allAthletes8k;

        let allAthletes10k = [];
        for (let i = 0; i < (data.pr10k ?? []).length; i++) {
          allAthletes10k.push(data.pr10k[i]);
        }
        team.pr10k = allAthletes10k;

        let allAthletes5k = [];
        for (let i = 0; i < (data.pr5k ?? []).length; i++) {
          allAthletes5k.push(data.pr5k[i]);
        }
        team.pr5k = allAthletes5k;

        let allAthletes6k = [];
        for (let i = 0; i < (data.pr6k ?? []).length; i++) {
          allAthletes6k.push(data.pr6k[i]);
        }
        team.pr6k = allAthletes6k;

        teamID++;
        team.id = teamID;
        team.currentAthletes = this.state.currentAthletes;
        team.ref = React.createRef();
        q--;

        if (q !== 0) {
          this.setState((prevState) => ({
            teamList: [...prevState.teamList, team],
            teamurlList: [...prevState.teamurlList, teamLink]
          }), () => {
            localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList));
          });
        } else {
          this.setState((prevState) => ({
            teamList: [...prevState.teamList, team],
            teamurlList: [...prevState.teamurlList, teamLink],
            isLoading: false
          }), () => {
            localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList));
          });
        }
      }).catch((error) => {
        q--;
        if (q === 0) {
          this.setState({ isLoading: false });
        }
        console.log(error);
        alert("Unable to access team data (try checking internet connection, link, or team roster)");
      });
  }

  changeEvent = (event) => {
    let teams = this.state.teamList;
    console.log('state', this.state)
    console.log('teams', teams)
    for (let i = 0; i < teams.length; i++) {
      teams[i].currentAthletes = event;
    }
    this.setState({
      currentAthletes: event,
      teamList: teams
    });
    console.log('state', this.state)
  }



  changeTeam = (event) => {
    this.setState({
      teamurl: event
    });
    this.fetchData(event);
  }

  removeTeam = (teamID) => {
    this.setState((prevState) => {
      const newTeamList = prevState.teamList.filter((team) => team.id !== teamID);
      const tempTeamList = prevState.teamList.filter((team) => team.id === teamID);
      const newTeamurlList = prevState.teamurlList.filter((url) => url !== tempTeamList[0].teamurl);
      return {
        teamList: newTeamList,
        teamurlList: newTeamurlList
      };
    }, () => {
      localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList));
    });
  }

  removeAllTeams = () => {
    this.setState({
      teamList: [],
      teamurlList: []
    }, () => {
      localStorage.setItem('teamurls', JSON.stringify(this.state.teamurlList));
    });
  }

  render() {
    const { teamList, isLoading } = this.state;

    return (
      <div>
        <Header
          removeTeams={this.removeAllTeams}
          changeTeam={this.changeTeam}
        />
        <Sidebar
          changeEvent={this.changeEvent}
        />
        <div className="loading">
          <LinearIndeterminate isLoading={isLoading} />
          <LinearIndeterminate isLoading={isLoading} />
        </div>
        <div className="main-container">
          <div className="main-content">
            <TeamList
              teamList={teamList}
              removeFunc={this.removeTeam}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;