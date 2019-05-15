from flask import Flask, render_template, request, redirect, jsonify
from wtforms import Form, HiddenField

app = Flask(__name__)


class TestForm(Form):
    logoname = HiddenField("logoname")


@app.route("/")
def welcome():
    return render_template("welcome.html")


@app.route("/tutorial")
def tutorial():
    return render_template("decision.html")


@app.route("/home")
def home():
    return render_template("home.html",msg="")


@app.route("/home" ,methods=['POST'])
def backTohome():
    form = TestForm(request.values)
    return render_template("home.html",msg=form.logoname.data)


if __name__ == "__main__":
    app.run(debug=True)
