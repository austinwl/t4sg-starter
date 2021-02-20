import time
from flask import Flask, request, jsonify, redirect, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	return {
		'name': 'Hello World'
	}

@app.route('/reverse', methods=['POST'])
def reverse():
	if request.method == 'POST':
		req = request.json
		rev_string = req["name"][::-1]
		req["name"] = rev_string
		print(req["name"])
		return jsonify(name=req)
	if request.method == 'GET':
		return {
			'test': 'test'
		}

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

if __name__ == '__main__':
	app.run(debug=True)