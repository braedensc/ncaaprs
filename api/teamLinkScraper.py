from urllib.request import Request, urlopen
from pprint import pprint
import pandas as p
from html_table_parser_python3 import HTMLTableParser
import lxml.html
import re
from itertools import chain
from flask import Flask
from datetime import datetime
import json
import concurrent.futures
from urllib.parse import quote

MAX_THREADS = 60


def getAllTeams(url):
    '''
    returns a list of events followed by prs for the given athlete: ex. [800, 1:40, 1500, 5:40]
            Parameters:
                    profileurl (String): The link to the athletes tfrrs page
    '''

    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    page1 = urlopen(req)
    html_bytes1 = page1.read()
    html1 = html_bytes1.decode('utf-8', 'ignore')
    urllist = re.findall(r"""<\s*A\s*HREF=["']([^=]+)["']""", html1)
    print(urllist)




getAllTeams("https://www.tfrrs.org/leagues/49.html")

