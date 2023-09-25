from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np

import sys
from PIL import Image
sys.modules['Image'] = Image 

def get_prediction(img_path,model):
    img = image.load_img(img_path,color_mode='rgb', target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    features = model.predict(x)
    decode_predictions = {
        0: "Eczema",
        1: "Melanoma",
        2: "Atopic Dermatitis",
        3: "Basal Cell Carcinoma",
        4: "Melanocytic Nevi",
        5: "Benign Keratosis",
        6: "Psoriasis pictures Lichen Planus",
        7: "Seborrheic Keratoses and other Benign Tumors",
        8: "Tinea Ringworm Candidiasis",
        9: "Warts Molluscum and other Viral Infections"
    }
    return decode_predictions[np.argmax(features)]
