import time
from flask import Flask
from .athleteProfiles import *
import json
import copy
from flask import request


app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}



@app.route('/api/athletes/')
def get_athlete_lists():
    '''Returns a JSON object containingg lists of all events and its athletes for the given team the parameter is the url needed to go to to find the team roster '''
    teamurl = request.args.get('param1')
    athletes = buildAthleteList(teamurl)
    athletes = setallprs(athletes)
    sathletes = copy.deepcopy(athletes)
    for i in range(len(athletes)):
        athletes[i] = json.dumps(athletes[i].toJson())
    athletes800 = buildprList(sathletes, 'pr800')
    for i in range(len(athletes800)):
        athletes800[i] = json.dumps(athletes800[i].toJson())
    athletes1500 = buildprList(sathletes, 'pr1500')
    for i in range(len(athletes1500)):
        athletes1500[i] = json.dumps(athletes1500[i].toJson())
    athletesMile = buildprList(sathletes, 'prMile')
    for i in range(len(athletesMile)):
        athletesMile[i] = json.dumps(athletesMile[i].toJson())
    athletes3000 = buildprList(sathletes, 'pr3000')
    for i in range(len(athletes3000)):
        athletes3000[i] = json.dumps(athletes3000[i].toJson())
    athletes5000 = buildprList(sathletes, 'pr5000')
    for i in range(len(athletes5000)):
        athletes5000[i] = json.dumps(athletes5000[i].toJson())
    athletes10000 = buildprList(sathletes, 'pr10000')
    for i in range(len(athletes10000)):
        athletes10000[i] = json.dumps(athletes10000[i].toJson())
    athletes8k = buildprList(sathletes, 'pr8k')
    for i in range(len(athletes8k)):
        athletes8k[i] = json.dumps(athletes8k[i].toJson())
    athletes10k = buildprList(sathletes, 'pr10k')
    for i in range(len(athletes10k)):
        athletes10k[i] = json.dumps(athletes10k[i].toJson())
    athletes5k = buildprList(sathletes, 'pr5k')
    for i in range(len(athletes5k)):
        athletes5k[i] = json.dumps(athletes5k[i].toJson())
    athletes6k = buildprList(sathletes, 'pr6k')
    for i in range(len(athletes6k)):
        athletes6k[i] = json.dumps(athletes6k[i].toJson())
    print(athletes)
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

