from flask import Flask, redirect, request, render_template, url_for
import pymysql
import psycopg2

app = Flask(__name__)

# Configurações do banco de dados
DB_HOST = 'monorail.proxy.rlwy.net'
DB_PORT = 32895
DB_USER = 'postgres'
DB_PASSWORD = 'wMnIaTvmFCAbGBYXIAtkglRrufkOYegJ'
DB_NAME = 'railway'


#Colocando dados do email para entregar a informação
@app.route('/enviar_email', methods=['POST'])
def enviar_email():
    # Obtém o email enviado pelo formulário
    email = request.form['emailInfo']
    
    # Conecta ao banco de dados PostgreSQL
    connection = psycopg2.connect(host=DB_HOST,
                                  port=DB_PORT,
                                  user=DB_USER,
                                  password=DB_PASSWORD,
                                  database=DB_NAME)
    cursor = connection.cursor()

    try:
        # Insere o email na tabela contatoemail
        query = "INSERT INTO contatoemail (email) VALUES (%s)"
        cursor.execute(query, (email,))
        connection.commit()
        return redirect(url_for('home'))  # Redireciona para a página inicial após o envio bem-sucedido
    except Exception as e:
        # Em caso de erro, faz rollback e exibe uma mensagem de erro
        connection.rollback()
        return "Ocorreu um erro ao enviar o email: " + str(e)
    finally:
        # Fecha a conexão com o banco de dados
        cursor.close()
        connection.close()

# Inserindo dados dos candidatos a voluntários
@app.route('/autenticar', methods=['POST'])
def autenticar():
    # Obtém os dados do formulário
    nome = request.form['nomeInput']
    email = request.form['emailInput']
    whatsapp = request.form['resposta1']
    numero = request.form['numeroInput']
    formacao = request.form['formacaoInput']
    trabalhoproprio = request.form['resposta3']

    # Converte as strings 'true'/'false' em valores booleanos
    whatsapp = True if whatsapp == 'true' else False
    trabalhoproprio = True if trabalhoproprio == 'true' else False

    # Conecta ao banco de dados
    connection = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME
    )
    cursor = connection.cursor()

    try:
        # Insere os dados na tabela voluntarios
        query = """
        INSERT INTO voluntinsert (numero, nome, email, formacao, whatsapp, trabproprio)
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (numero, nome, email, formacao, whatsapp, trabalhoproprio))
        connection.commit()
        return render_template('sejaVoluntario.html')  # Redireciona para a mesma página  # Redireciona para a página inicial após o envio bem-sucedido
    except Exception as e:
        # Em caso de erro, faz rollback e exibe uma mensagem de erro
        connection.rollback()
        return "Ocorreu um erro ao enviar os dados: " + str(e)
    finally:
        # Fecha a conexão com o banco de dados
        cursor.close()
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



@app.route('/eventoPizza7abt24')
def eventoPizza7abt24():
    return render_template('eventoPizza7abt24.html')




@app.route('/eventoSAJunhoRecrerEAcao')
def eventoSAJunhoRecrerEAcao():
    return render_template('eventoSAJunhoRecrerEAcao.html')




@app.route('/IIISempreSaude24')
def IIISempreSaude24():
    return render_template('IIISempreSaude24.html')




@app.route('/SAJunhoLarDaCrianca')
def SAJunhoLarDaCrianca():
    return render_template('SAJunhoLarDaCrianca.html')




@app.route('/IIBazarSolidario')
def IIBazarSolidario():
    return render_template('IIBazarSolidario.html')




@app.route('/PrimeiroSempreSaude24')
def PrimeiroSempreSaude24():
    return render_template('PrimeiroSempreSaude24.html')



@app.route('/SAmaioRecreerEAcao')
def SAmaioRecreerEAcao():
    return render_template('SAmaioRecreerEAcao.html')



@app.route('/IBazarSolidario24')
def IBazarSolidario24():
    return render_template('IBazarSolidario24.html') 



@app.route('/SAAbrilRecrerEAcao')
def SAAbrilRecrerEAcao():
    return render_template('SAAbrilRecrerEAcao.html')


@app.route('/SAAbrilRecerEAcaoquatorzequatro')
def SAAbrilRecerEAcaoquatorzequatro():
    return render_template('SAAbrilRecerEAcaoquatorzequatro.html')



@app.route('/SAMarco24')
def SAMarco24():
    return render_template('SAMarco24.html')



@app.route('/dezCampanhaMaterialEscolar24')
def dezCampanhaMaterialEscolar24():
    return render_template('dezCampanhaMaterialEscolar24.html')



@app.route('/IISempreSaude23')
def IISempreSaude23():
    return render_template('IISempreSaude23.html')



@app.route('/DecimaPrimeiraFeijoada23')
def DecimaPrimeiraFeijoada23():
    return render_template('DecimaPrimeiraFeijoada23.html')




@app.route('/noticia')
def noticia():
    return render_template('noticia.html')


@app.route('/estamosDeVolta12_2023')
def estamosDeVolta12_2023():
    return render_template('estamosDeVolta12_2023.html')


@app.route('/NatalSempreCrianca2022')
def NatalSempreCrianca2022():
    return render_template('NatalSempreCrianca2022.html')


@app.route('/DecimaFeijoada2022')
def DecimaFeijoada2022():
    return render_template('DecimaFeijoada2022.html')

@app.route('/acoesEm2022')
def acoesEm2022():
    return render_template('acoesEm2022.html')


@app.route('/ResultadoNatal2021')
def ResultadoNatal2021():
    return render_template('ResultadoNatal2021.html')


@app.route('/Feliz2022SempreCrianda')
def Feliz2022SempreCrianda():
    return render_template('Feliz2022SempreCrianda.html')


@app.route('/muitoObrigado2021')
def muitoObrigado2021():
    return render_template('muitoObrigado2021.html')

@app.route('/FotosIIMaio')
def FotosIIMaio():
    return render_template('FotoIImaio.html')





@app.route('/VerMaisFotos')
def VerMaisFotos():
    return render_template('FotosIImaio.html')    















if __name__ == '__main__':
    app.run(debug=True)