import os
from flask import Flask
app = Flask(__name__)

@app.route("/")
def main():
    codecs.open("index.html", "r", "utf-8")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
