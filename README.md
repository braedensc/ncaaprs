https://ncaaprs.herokuapp.com/

TODO: 

-add Pentathlon, Decathlon, etc.

-add relays

-add mobile compatibility 

-reduce load times

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

MAIN  (in api.py)                  
- app = Flask(\_\_name__)
- from athleteProfiles import * 

DEPLOYMENT (in api.py)
 - app = Flask(\_\_name__, static_folder='../build', static_url_path='/')
 - from .athleteProfiles import *

MAIN (in package.json), Remove this line in Deployment
- ,"proxy" : "http://localhost:5000"  



INSTRUCTIONS TO DEPLOY (on Heroku):


-To Update Current Deployment (Works only if you've installed heroku cli and already have a deployment):

(open cmd window in root)

git push heroku deployment:main



-To Make New Deployment:

go to heroku.com

create an account

create a new app

once in your new app's page, click on deploy tab (make sure to add python to build packages in app settings, and make sure it is underneath node.js)

Follow instructions on how to deploy using existing git repository, make sure you are on deployment branch

If heroku cli is installed:

heroku login

heroku create <my heroku app name>

heroku git:remote -a <my heroku app name>

git push heroku deployment:main




INSTRUCTIONS TO RUN LOCALLY:

(open cmd window)

git clone https://github.com/braedensc/teamprs.git

npm install

cd api

venv\Scripts\activate

pip install -r requirements.txt

cd ..

npm run start-api

(open new cmd window in same directory)

npm start

(it should now be running on localhost:3000)


npm install and pip install only need to be done once (or if new packages have been added).
Make sure to always update requirements.txt when installing new python packages (both of them I'm not sure which one is actually being used).


