import time
from flask import Flask
import athleteProfiles
import json
import copy
from flask import request

app = Flask(__name__)



@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/athletes/')
def get_athlete_lists():
    teamurl = request.args.get('param1')
    print(teamurl)
    athletes = athleteProfiles.buildAthleteList(teamurl)
    athletes = athleteProfiles.setallprs(athletes)
    sathletes = copy.deepcopy(athletes)
    for i in range(len(athletes)):
        athletes[i] = json.dumps(athletes[i].toJson())
    print(athletes)
    athletes800 = athleteProfiles.buildprList(sathletes, 'pr800')
    for i in range(len(athletes800)):
        athletes800[i] = json.dumps(athletes800[i].toJson())
    athletes1500 = athleteProfiles.buildprList(sathletes, 'pr1500')
    for i in range(len(athletes1500)):
        athletes1500[i] = json.dumps(athletes1500[i].toJson())
    athletesMile = athleteProfiles.buildprList(sathletes, 'prMile')
    for i in range(len(athletesMile)):
        athletesMile[i] = json.dumps(athletesMile[i].toJson())
    athletes3000 = athleteProfiles.buildprList(sathletes, 'pr3000')
    for i in range(len(athletes3000)):
        athletes3000[i] = json.dumps(athletes3000[i].toJson())
    athletes5000 = athleteProfiles.buildprList(sathletes, 'pr5000')
    for i in range(len(athletes5000)):
        athletes5000[i] = json.dumps(athletes5000[i].toJson())
    athletes10000 = athleteProfiles.buildprList(sathletes, 'pr10000')
    for i in range(len(athletes10000)):
        athletes10000[i] = json.dumps(athletes10000[i].toJson())
    athletes8k = athleteProfiles.buildprList(sathletes, 'pr8k')
    for i in range(len(athletes8k)):
        athletes8k[i] = json.dumps(athletes8k[i].toJson())
    athletes10k = athleteProfiles.buildprList(sathletes, 'pr10k')
    for i in range(len(athletes10k)):
        athletes10k[i] = json.dumps(athletes10k[i].toJson())
    athletes5k = athleteProfiles.buildprList(sathletes, 'pr5k')
    for i in range(len(athletes5k)):
        athletes5k[i] = json.dumps(athletes5k[i].toJson())
    athletes6k = athleteProfiles.buildprList(sathletes, 'pr6k')
    for i in range(len(athletes6k)):
        athletes6k[i] = json.dumps(athletes6k[i].toJson())
    return {'athletes' : athletes,
            'athletes800' : athletes800,
            'athletes1500' : athletes1500,
            'athletesMile' : athletesMile,
            'athletes3000' : athletes3000,
            'athletes5000' : athletes5000,
            'athletes10000' : athletes10000,
            'athletes8k' : athletes8k,
            'athletes10k' : athletes10k,
            'athletes5k' : athletes5k,
            'athletes6k' : athletes6k,
        }

