import requests
import pandas as pd

MAX_ROWS = 100
MAX_COLUMNS = 4
WIDTH = 1000
pd.set_option('display.max_rows', MAX_ROWS)
pd.set_option('display.max_columns', MAX_COLUMNS)
pd.set_option('display.width', WIDTH)

link = ['http://www.institutousiminas.com/wp-content/uploads/2020/08/Adm-Publica.-Servico-Social.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Historia-e-Geografia.xlsx']
link2 = ['https://www.institutousiminas.com/wp-content/uploads/2020/08/Administracao.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Infantil-e-Juvenil.xlsx']
def create_df(link_bs):
    response = requests.get(link_bs, verify=False)
    file_name = link_bs.split('/')[-1]
    file = open(file_name, 'wb')
    file.write(response.content)
    df = pd.read_excel(file_name)
    df = df.dropna(how='all', axis=1)  # remove colunas que todos os valores sejam vazios
    df = df.ffill()                    # preenche linhas vazias com o valor da linha superior
    #df = df.dropna(how='any', axis=0)
    df.loc[:, 'GENERO'] = file_name.split('.')[-2]   # adiciona coluna com o genero do livro
    for i in range(0, len(df['Nº de Chamada']) - 1):       # concatena titulos iguais baseados no id
        if df['Nº de Chamada'][i] == df['Nº de Chamada'][i + 1] and df['TÍTULO'][i] != df['TÍTULO'][i+1]:
            df['TÍTULO'][i + 1] = str(df['TÍTULO'][i]) + str(df['TÍTULO'][i + 1])
    df = df.drop_duplicates(subset='Nº de Chamada', keep='last')  # remove linhas duplicadas a partir do id
    return df

def create_general_df(links):
    general_df = create_df(links[0])
    for i in range(1, len(links)):
        general_df = general_df.append(create_df(links[i]))
    return general_df

#print(create_df(link[1]))
print(create_general_df(link))
