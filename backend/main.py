from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import tensorflow as tf
from tensorflow.keras.models import load_model
import inspect
app = Flask(__name__)
cors = CORS(app)
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
    # model = load_model('backend\model.h5')
    # preds = model.predict()
    # tf.keras.applications.vgg16.decode_predictions(preds, top=5)
    # print(dir(inspect.signature(model.predict)))
    return jsonify("True")

if __name__ == "__main__":
    app.run(debug=True)
