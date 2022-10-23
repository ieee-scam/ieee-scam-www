import csv
import os
import glob

os.chdir('.')
filenames = glob.glob('*.{}'.format('csv'))

for filename in filenames:

    with open(filename, mode ='r') as file:

        htmlfile = open(filename.replace('.csv', '.html'), 'w')
        htmlcontent = '<table class="pc-table"><tbody><tr><th style="width: 35%;">Name</th><th style="width: 10%;">Webpage</th><th style="width:45%;">Affiliation</th></tr>'

        csvFile = csv.reader(file)

        skipfirstline = True
    
        for line in csvFile:
            if skipfirstline == True:
                skipfirstline = False
            else:
                webpage = ''
                if len(line[3].strip()) != 0:
                    webpage = '<a href="' + line[3] + '"><img src="images/web.svg" width="24"></a>'

                htmlcontent = htmlcontent + '<tr><td>' + line[0] + ' ' + line[1] + '</td><td>' + webpage + '</td><td>' + line[4] + '</td></tr>'

        htmlcontent = htmlcontent + '</tbody></table>'

        htmlfile.write(htmlcontent)

        htmlfile.close()