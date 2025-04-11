from flask import Flask, request, send_from_directory
import os
app = Flask(__name__, static_folder='front/public/')

@app.route('/')
def hello():
    #get extraction id and update record , image or data
    #save to db
    return send_from_directory("front/public",'index.html')

@app.route('/about')
def about():
    return 'About'