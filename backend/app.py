from flask import Flask, request, jsonify
from skimage import io, color, filters
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Read the uploaded image using skimage
    image = io.imread(file)

    # Convert the image to grayscale
    gray_image = color.rgb2gray(image)

    # Apply a Gaussian filter to the grayscale image
    filtered_image = filters.gaussian(gray_image, sigma=1)

    # Save the processed image to a file
    filename = os.path.join(app.config['UPLOAD_FOLDER'], 'processed_image.jpg')
    io.imsave(filename, filtered_image)

    return jsonify({'message': 'Image processed successfully', 'processed_image': filename})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
