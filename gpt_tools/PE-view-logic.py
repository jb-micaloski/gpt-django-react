from dotenv import load_dotenv
import openai, os

# Carregar as variáveis de ambiente do arquivo .env
load_dotenv()

openai.api_key = os.getenv('API_KEY')



def gpt_dificuldades(user_knowledge):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Liste 10 dificuldades que podem ser resolvidos com base na experiência e conhecimento do usuario em portugues, apenas responda a lista enumerada de 1 a 10 com ponto-virgula no final da cada item"},
            {"role": "user", "content": user_knowledge}
        ]
    )
    return completion.choices[0].message["content"]
    



def gpt_armadilhas(dificuldades_escolhidos):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Liste 10 armadilhas que são encontradas ao tentar resolver as dificuldades listados, responda em portugues, apenas responda a lista enumerada de 1 a 10 com ponto-virgula no final da cada item"},
            {"role": "user", "content": dificuldades_escolhidos}
        ]
    )
    return completion.choices[0].message["content"]


def gpt_frustacoes(dificuldades_escolhidos, armadilhas_escolhidas):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "liste 10 frustrações que podem ser causadas como resultado dessas experiências negativas gerados por estas dificuldades e armadilhas encotradas no processo, responda em portugues, apenas responda a lista enumerada de 1 a 10 com ponto-virgula no final da cada item"},
            {"role": "user", "content": f"dificuldades: {dificuldades_escolhidos}\n Armadilhas: {armadilhas_escolhidas}"}
        ]
    )
    return completion.choices[0].message["content"]


def gpt_consequencias(dificuldades_escolhidos, armadilhas_escolhidas, frustracoes_escolhidas):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Considerando as dificuldades, armadilhas encontradas no processo, e as possíveis frustrações, todos listados pelo usuário, responda em português as possíveis consequências do processo"},
            {"role": "user", "content": f"dificuldades: {dificuldades_escolhidos}\n Armadilhas: {armadilhas_escolhidas}\n Frustrações: {frustracoes_escolhidas}"}
        ]
    )
    return completion.choices[0].message["content"]


apresentacao_inicial = str(input('Area de atuacao e experiencia: '))

dificuldades = gpt_dificuldades(apresentacao_inicial)
print('\n\n' + dificuldades)

dificuldades_isoladas = dificuldades.split(";")
#dificuldades_isoladas[n] = item n + 1 da lista de dificuldades


#escolhendo itens da lista de dificuldade
indices_escolhidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
dificuldades_escolhidas = [item for indice, item in enumerate(dificuldades_isoladas) if indice in indices_escolhidos]

for i, value in enumerate(dificuldades_isoladas):
    print(value)


armadilhas = gpt_armadilhas(dificuldades)
print('\n\n' + armadilhas)

frustracoes = gpt_frustacoes(dificuldades, armadilhas)
print('\n\n' + frustracoes)

conclusao = gpt_consequencias(dificuldades, armadilhas, frustracoes)
print('\n\n' + conclusao)
