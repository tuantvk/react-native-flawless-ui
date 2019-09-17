import os
import re
from PIL import Image

BASEWIDTH = 400 # default base with image
PATH_FILE = '/' # path file

def resizeImage(href, basewidth = BASEWIDTH): 
	for filename in os.listdir(href):
		img = Image.open(href + filename)
		wpercent = (basewidth / float(img.size[0]))
		hsize = int((float(img.size[1]) * float(wpercent)))
		img = img.resize((basewidth, hsize), Image.ANTIALIAS)
		img.save(href + filename)
		print(filename)


# use

resizeImage(PATH_FILE)