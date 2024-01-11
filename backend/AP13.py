#Importing necessary modules
from flask import Flask, request, render_template, jsonify, redirect, session
from flask_cors import CORS, cross_origin
import pickle
import numpy as np


#Creating flask application
#CORS allows web application to handle request from different domains
app = Flask(__name__)  
CORS(app)  


#Pree function is used to input data and make predictions
#Loading the model, PCA object and scalar from pickle files
def pree(data):
    model = pickle.load(open('model.pkl', 'rb'))
    pca = pickle.load(open('pca.pkl', 'rb'))
    sc = pickle.load(open('sc.pkl', 'rb'))
        
    #Creating a 2D array 
    X_test = np.array([[data['alcohol'], 
                        data['malic_acid'], 
                        data['ash'], 
                        data['ash_alcanity'], 
                        data['magnesium'], 
                        data['total_phenol'], 
                        data['flavanoids'], 
                        data['nonflavanoids'], 
                        data['proanthocyanins'], 
                        data['color_intensity'], 
                        data['hue'], 
                        data['OD280'], 
                        data['proline']]])
    
    #Scaling the test data
    X_test_scaled = sc.transform(X_test)

    #Applying Dimensionality reduction on scaled data using PCA
    X_test_pca = pca.transform(X_test_scaled)
    

    #Using the ML model to make
    predicted_segment = model.predict(X_test_pca)  
    
    #Returning the predicted statement
    return predicted_segment


@app.route('/predictwine', methods=['POST'])
@cross_origin()     
def predict_wine():
        #Taking data from user and converting into a floating point number
        data = request.get_json()
    
        data = {
        'alcohol': float(data["alcohol"]),
        'malic_acid': float(data["malic_acid"]),
        'ash': float(data["ash"]),
        'ash_alcanity': float(data["ash_alcanity"]),
        'magnesium': float(data["magnesium"]),
        'total_phenol': float(data["total_phenol"]),
        'flavanoids': float(data["flavanoids"]),
        'nonflavanoids': float(data["nonflavanoids"]),
        'proanthocyanins': float(data["proanthocyanins"]),
        'color_intensity': float(data["color_intensity"]),
        'hue': float(data["hue"]),
        'OD280': float(data["OD280"]),
        'proline': float(data["proline"]),
    }
        print(data)
        predicted_segment = pree(data)
        return "Predicted customer segment for the wine - {}".format(predicted_segment)

if __name__ == "__main__":
    app.run(debug=True)

