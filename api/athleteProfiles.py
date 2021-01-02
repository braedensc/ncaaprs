from urllib.request import Request, urlopen
from pprint import pprint
from html_table_parser import HTMLTableParser
import pandas as p
from bs4 import BeautifulSoup 
import lxml.html
import re
from itertools import chain
from flask import Flask
from datetime import datetime
import json

timeFormats = ['%M:%S.%f', '%H:%M:%S.%f']

class Athlete:
    def __init__(self, name, link, prs, logo, title, teamType):
        self.name = name
        self.link = link
        self.prs = prs
        self.pr800 = None
        self.pr1500 = None
        self.prMile = None
        self.pr3000 = None
        self.pr5000 = None
        self.pr10000 = None
        self.pr5k = None
        self.pr6k = None
        self.pr8k = None
        self.pr10k = None
        self.time = None
        self.logo = logo
        self.title = title
        self.teamType = teamType

    def __repr__(self):  
        return "Name: %s \n Link: %s \n Logo: %s \n  Type: %s \n Title: %s \n PRS: %s \n\n\n\n"%(self.name, self.link, self.logo, self.teamType, self.title, self.prs)

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)

def getAthleteTimes(profileurl):
    req = Request(profileurl, headers={'User-Agent': 'Mozilla/5.0'})
    page1 = urlopen(req)
    html_bytes1 = page1.read()
    html1 = html_bytes1.decode('utf-8', 'ignore')
    p = HTMLTableParser()
    p.feed(html1)
    #pprint(p.tables[0])
    return p.tables[0]



def getAthletes(teamurl):
    req = Request(teamurl, headers={'User-Agent': 'Mozilla/5.0'})
    page1 = urlopen(req)
    html_bytes1 = page1.read()
    html1 = html_bytes1.decode('utf-8', 'ignore')
    #print(html1)
    p = HTMLTableParser()
    p.feed(html1)
    athleteNames = p.tables[0]
    
    athleteProfiles = getLinksToAthleteProfiles(html1)
    logo = getLogo(html1)
    teamTitle = getTeamTitle(html1)
    athleteList = []
    teamType = getTeamType(html1)
    print(teamType)
    print(logo)
    print(teamTitle)
   # pprint(athleteNames)
    for i in range(1, len(athleteNames) - 1):
        name = " ".join(athleteNames[i][0].split(", ")[::-1])
        athleteList.append(Athlete(name, athleteProfiles[i - 1], [], logo, teamTitle, teamType))
    name = " ".join(athleteNames[-1][0].split(", ")[::-1])
    athleteList.append(Athlete(name, athleteProfiles[-1], [], logo, teamTitle, teamType))
   # print(athleteList)
    return athleteList





def getLinksToAthleteProfiles(html1):
    urllist = re.findall(r"""<\s*A\s*HREF=["']([^=]+)["']""", html1)
    string = '//www.tfrrs.org/athletes/'
    urls = list(filter(lambda x : ('athletes' in x), urllist))
    
    for i in range(len(urls)):
        urls[i] = urls[i].replace(" ", "")
    #pprint(urls)
    return urls


#https://logos.tfrrs.org/(insert team here)
def getLogo(html1):
    urllist = re.findall(r"""https://logos.tfrrs.org/[^\s<>"]+""", html1)
   # print(urllist)
    for i in range(len(urllist)):
        urllist[i] = urllist[i].replace(" ", "")
    return urllist[0]

def getTeamTitle(html1):
    urllist = re.findall(r"""https://logos.tfrrs.org/[^\s<>"]+.*\n.*\n""", html1)
    teamNameIndex = urllist[0].find("\n")
    teamTitle = urllist[0][teamNameIndex:-6]
    return teamTitle

def getTeamType(html1):
    urllist = re.findall(r"""https://logos.tfrrs.org/[^\s<>"]+.*\n.*\n.*\n.*\n""", html1)
    teamTypeIndex = urllist[0].find('actions">')
    teamType = urllist[0][teamTypeIndex + 9:-6]
    return teamType


def buildAthleteList(teamurl):
    athleteList = getAthletes(teamurl)
    for i in range(len(athleteList)):
        table = getAthleteTimes('https:' + str(athleteList[i].link))
        table = list(chain.from_iterable(table))
        athleteList[i].prs = table
    return athleteList



def setallprs(athleteList):
    for i in range(len(athleteList)):
        try:
            index =  athleteList[i].prs.index('800') + 1
            athleteList[i].pr800 = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('1500') + 1
            athleteList[i].pr1500 = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('MILE') + 1
            athleteList[i].prMile = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('3000') + 1
            athleteList[i].pr3000 = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('5000') + 1
            athleteList[i].pr5000 = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('10,000') + 1
            athleteList[i].pr10000 = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('5K\n\t\n\t\n (XC)') + 1
            athleteList[i].pr5k = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('6K\n\t\n\t\n (XC)') + 1
            athleteList[i].pr6k = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('8K\n\t\n\t\n (XC)') + 1
            athleteList[i].pr8k = athleteList[i].prs[index]
        except ValueError:
            pass
        try:
            index =  athleteList[i].prs.index('10K\n\t\n\t\n (XC)') + 1
            athleteList[i].pr10k = athleteList[i].prs[index]
        except ValueError:
            pass
   # print(athleteList)
    return athleteList


def buildprList(athleteList, distance):
    listprs = []
    for i in range(len(athleteList)):
        if getattr(athleteList[i], distance, None) is not None:
            listprs.append(athleteList[i])
    listprs = sorted(listprs, key=lambda x: sortprs(getattr(x, distance), timeFormats))

    for i in range(len(listprs)):
        listprs[i].time = getattr(listprs[i], distance)
    return listprs
    
def sortprs(date, formats):
    for frmt in formats:
        try:
            str_date = datetime.strptime(date, frmt)
            return str_date
        except ValueError:
            continue



athletes = buildAthleteList('https://www.tfrrs.org/teams/xc/FL_college_m_Miami_FL.html')
athletes = setallprs(athletes)
print(buildprList(athletes, 'pr8k'))

