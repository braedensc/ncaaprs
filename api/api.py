from athleteProfiles import buildAthleteList, buildprList, setallprs
from flask import Flask, request, jsonify
import copy

app = Flask(__name__, static_folder='../build', static_url_path='/')


def build_and_convert_pr_list(athletes, pr_type):
    return buildprList(athletes, pr_type)

@app.route('/api/athletes/')
def get_athlete_lists():
    '''Returns a JSON object containing lists of all events and its athletes for the given team. The parameter is the URL needed to go to to find the team roster.'''
    teamurl = request.args.get('param1')
    athletes = buildAthleteList(teamurl)
    athletes = setallprs(athletes)
    sathletes = copy.deepcopy(athletes)

    # List of PR types
    pr_types = [
        'pr60', 'pr60H', 'pr100', 'pr200', 'pr400', 'pr100H', 'pr110H', 'pr400H', 
        'pr600', 'pr3000S', 'pr1000', 'pr800', 'pr1500', 'prMile', 'pr3000', 
        'pr5000', 'pr10000', 'pr8k', 'pr10k', 'pr5k', 'pr6k', 'prTJ', 'prHJ', 
        'prLJ', 'prPV', 'prWT', 'prHT', 'prDT', 'prJT', 'prST'
    ]

    # Build PR lists
    pr_lists = {pr_type: build_and_convert_pr_list(sathletes, pr_type) for pr_type in pr_types}

    # Convert athletes and PR lists to JSON-serializable format
    result = {'athletes': [athlete.toJson() for athlete in athletes]}
    result.update({pr_type: [athlete.toJson() for athlete in pr_list] for pr_type, pr_list in pr_lists.items()})

    # Convert the entire result to JSON
    return jsonify(result)

# Assuming the following functions are defined elsewhere in your code:
# - buildAthleteList
# - setallprs
# - buildprList
# - Athlete.toJson