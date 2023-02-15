from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route("/")
def homepage():
  return "this is the home page of the server"

@app.route("/members")
def mambers():
  return {"members":  ["Member1", "Member2", "member3"]}

if __name__ == "__main__":
  app.run(debug=True)
