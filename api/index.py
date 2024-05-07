from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
 
UPLOAD_FOLDER = '/static/video/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Check if the directory exists, create it if not
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Allowed file extensions
ALLOWED_IMG = {"jpg","jpeg" }
ALLOWED_VID = {"mp4", "webm" }

#test  comment
 
@app.route('/')
def index():
  return render_template('index.html')
 

def allowed_img(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_IMG
def allowed_video(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_VID

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return "No file found"
    file = request.files['file']
    if file.filename == "":
        return render_template('viewer.html' ,error='No video file selected')
    if file and allowed_img(file.filename):
        file.save(app.config['UPLOAD_FOLDER']+file.filename)
        return render_template('viewer.html',   imageUrl=file.filename)
    if file and allowed_video(file.filename):
        file.save(app.config['UPLOAD_FOLDER']+file.filename)
        return render_template('viewer.html', video_name = file.filename, )
    return "invalid file type"


@app.route("/about/")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/tutorial")
def tutorial():
    return render_template("tutorial.html")

@app.route("/article")
def article():
    return render_template("article.html")

@app.route("/tools")
def tools():
    return render_template("tools.html")

@app.route("/viewer/")
def viewer():
    return render_template("viewer.html")


if __name__ == "__main__":
    app.run(debug=True)