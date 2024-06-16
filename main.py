from flask import Flask, redirect, request, render_template
import pymysql

app = Flask(__name__)

# Configurações do banco de dados
DB_HOST = 'monorail.proxy.rlwy.net'
DB_USER = 'root'
DB_PASSWORD = 'vhfLjEKOGimmsuhTQvgbGYwGKvtXgUNP'
DB_NAME = 'railway'

try:
    connection = pymysql.connect(host=DB_HOST,
                                        user=DB_USER,
                                        password=DB_PASSWORD,
                                        database=DB_NAME)
    cursor = connection.cursor()
except Exception as e:
    print(e)
else:
    print('funcionou')




@app.route('/enviar_email', methods=['POST']) 
def enviar_email():
    email = request.form.get('emailInfo')
         
    try:
            # Insere o email no banco de dados
        query = "INSERT INTO emailteste (email) VALUES (%s)"
        cursor.execute(query, (email,))
        connection.commit()
        print('ola alguma coisa')
        return redirect('/')  # Redireciona para a página inicial após o envio bem-sucedido
    except Exception as e:
            # Em caso de erro, faz rollback e exibe uma mensagem de erro
        connection.rollback()
        return "Ocorreu um erro ao enviar o email: " + str(e)
    finally:
            # Fecha a conexão com o banco de dados
         connection.close()

    


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/quemSomos')
def quemSomos():
    return render_template('quemSomos.html')






@app.route('/doacao')
def doacao():
    return render_template('doacao.html')






@app.route('/instituicoes')
def instituicoes():
    return render_template('instituicoes.html')




@app.route('/institucoesPJ')
def instituicoesPJ():
    return render_template('instituicoesPJ.html')




@app.route('/instituicoesPJ2')
def insituicoesPJ2():
    return render_template('instituicoesPJ2.html')




@app.route('/instituicoesCR')
def instituicoesCR():
    return render_template('instituicoesCR.html')





@app.route('/instituicoesCR2')
def instituicoesCR2():
    return render_template('instituicoesCR2.html')





@app.route('/instituicoesCR3')
def instituicoesCR3():
    return render_template('instituicoesCR3.html')







@app.route('/instituicoesCR4')
def instituicoesCR4():
    return render_template('instituicoesCR4.html')






@app.route('/sejaVoluntario')
def sejaVoluntario():
    return render_template('sejaVoluntario.html')





@app.route('/parceria')
def parceria():
    return render_template('parceria.html')






@app.route('/eventos')
def eventos():
    return render_template('eventos.html')






@app.route('/noticia')
def noticia():
    return render_template('noticia.html')








@app.route('/VerMaisFotos')
def VerMaisFotos():
    return render_template('VerMaisFotos.html')    















if __name__ == '__main__':
    app.run(debug=True)