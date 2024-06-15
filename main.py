from flask import Flask, redirect, request, render_template

app = Flask(__name__)
app.secretkey = 'SempreCriancaTeste'
@app.route('/')
def home():
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
    return render_template('instituicoes.CR2')

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

@app.route('/IIISempreSaude24')
def IIISempreSaude24():
    return render_template('IIISempreSaude24.html')

@app.route('/SAAbrilRecrerEAcao')
def SAAbrilRecrerEAcao():
    return render_template('SAAbrilRecrerEAcao.html')

@app.route('/SAAbrilRecerEAcaoquatorzequatro')
def SAAbrilRecerEAcaoquatorzequatro():
    return render_template('SAAbrilRecerEAcaoquatorzequatro.html')

@app.route('/SAMarco24')
def SAMarco24():
    return render_template('SAMarco24.html')

@app.route('/dezCampanhaMaterialEcolar24')
def dezCampanhaMaterialEcolar24():
    return render_template('dezCampanhaMaterialEcolar24.html')

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









@app.route('/VerMaisFotos')
def VerMaisFotos():
    return render_template('VerMaisFotos.html')    

@app.route('/FotosIMaio')
def FotosIMaio():
    return render_template('FotosIMaio.html')

@app.route('/FotosIImaio')
def FotosIImaio():
    return render_template('FotosIImaio.html')

@app.route('/FotosSaudAbr')
def FotosSaudAbr():
    return render_template('FotosSaudAbr.html')

@app.route('/FotosIAbril')
def FotosIAbril():
    return render_template('FotosIAbril.html')

@app.route('/FotoIIMarco')
def FotoIIMarco():
    return render_template('FotoIIMarco.html')

@app.route('/FotosMarcoI')
def FotosMarcoI():
    return render_template('FotosMarcoI.html')

@app.route('/FotosSAFevereiroI')
def FotosSAFevereiroI():
    return render_template('FotosSAFevereiroI.html')

@app.route('/FotosSAJaneiro24')
def FotosSAJaneiro24():
    return render_template('FotosSAJaneiro24.html')

@app.route('/FotosSASaude23Setembro')
def FotosSASaude23Setembro():
    return render_template('FotosSASaude23Setembro.html')


if __name__ == '__main__':
    app.run(debug=True)