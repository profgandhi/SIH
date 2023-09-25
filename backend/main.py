from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from tensorflow.keras.models import load_model
from utils import get_prediction
app = Flask(__name__)
cors = CORS(app)
model = load_model('model.h5')
app.config['CORS_HEADERS'] = 'Content-Type'
@cross_origin()


@app.get("/")
def index():
    return "hello worldj"

@app.post("/check_disease")
def check_disease():
    print("Started")
    imagefile=request.files.get('image')
    imagefile.save(imagefile.filename)
    imagefilepath=imagefile.filename
    print(imagefilepath)

    disease_prediction = get_prediction(imagefilepath,model)
    
    return jsonify(disease_prediction )

if __name__ == "__main__":
    app.run(debug=True)
