#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api

import generator 


# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)




class InfoPackage(Resource):
    def post(self):
        data = request.get_json()
        
        template_path = './template/template.png'
        output_pdf_path = './template/cert.pdf'
        
        birthdate_text = data['birthdate']
        name_text = data['name']
        breed_text = data['breed']
        gender_text = data['gender']
        parent_text = data['parent']

        generator.create_certificate(
            template_path=template_path,
            output_pdf_path=output_pdf_path,
            birthdate_text=birthdate_text, 
            name_text=name_text, 
            breed_text=breed_text, 
            gender_text=gender_text, 
            parent_text=parent_text
        )
        
        # Assuming you want to return a confirmation or result
        return {'message': 'Certificate created successfully'}, 200

api.add_resource(InfoPackage, '/infopackage')


