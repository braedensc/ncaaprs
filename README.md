# Getting Started with Create React App
This is a create-react-app, but with python flask as backend also, so it's a little different. Read below for info on running the code and deploying it/updates to it.

I used heroku for hosting. If you want to use something else to deploy, it might be different. There's a ton of potential ways to host.
I created the project using the tutorial in the following link. This project is structured and runs exactly like that, so refer there if needed.
https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

And for deployment info
https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project

Main should be used for local testing and development
Deployment should be used for... deployment (Heroku specifically)

In order to deploy (Heroku specifically) there were several changes that had to be made in the code.
The following are all the ways that Deployment should differ from Main. The Deployment branch will not work locally.
MAIN  (in api.py)                   DEPLOYMENT (in api.py)
- app = Flask(__name__)            - app = Flask(__name__, static_folder='../build', static_url_path='/')
- from athleteProfiles import *    - from .athleteProfiles import *

MAIN (in package.json), Remove this line in Deployment
- ,"proxy" : "http://localhost:5000"  



TO DEPLOY (on Heroku):




TO RUN LOCALLY: