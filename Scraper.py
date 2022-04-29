import re
from urllib.request import urlopen
from xml.dom.minidom import Attr
import requests
from bs4 import BeautifulSoup
import json
from functools import reduce
URL ='https://www.vera.org/publications/what-policing-costs-in-americas-biggest-cities/new-york-ny'
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
print(soup)
NameOfFunding=[]
# for names in soup.find_all('h2'):
#     NameOfFunding.append(names)
# print(NameOfFunding)
AmountofFunding=[]
