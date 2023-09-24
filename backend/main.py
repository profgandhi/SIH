from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@cross_origin()

@app.get("/")
def index():
    return "hello worldj"

@app.post("/check_disease")
def check_disease():
    return jsonify("True")
if __name__ == "__main__":
    app.run(debug=True)
