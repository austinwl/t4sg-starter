import time
from flask import Flask, request, session, jsonify, redirect, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	return {
		'name': 'Hello World'
	}

@app.route('/reverse', methods=['GET', 'POST'])
def reverse():
	if request.method == 'POST':
		string = request.json
		return string
	if request.method == 'GET':
		return {
			'good': 'morning'
		}

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

if __name__ == '__main__':
	app.run(debug=True)