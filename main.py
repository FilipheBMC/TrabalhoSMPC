from flask import Flask, redirect, request, render_template

app = Flask(__name__)
app.secretkey = 'SempreCriancaTeste'
@app.route('/')
def home():
    return render_template('index.html')
















if __name__ == '__main__':
    app.run(debug=True)