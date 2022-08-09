import requests
import pandas as pd

MAX_ROWS = 1000
MAX_COLUMNS = 4
WIDTH = 1000
pd.set_option('display.max_rows', MAX_ROWS)
pd.set_option('display.max_columns', MAX_COLUMNS)
pd.set_option('display.width', WIDTH)

link = ['http://www.institutousiminas.com/wp-content/uploads/2020/08/Adm-Publica.-Servico-Social.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Historia-e-Geografia.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Administracao.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Infantil-e-Juvenil.xlsx']

def create_df(link_bs):
    response = requests.get(link_bs, verify=False)
    file_name = link_bs.split('/')[-1]
    file = open(file_name, 'wb')
    file.write(response.content)
    df = pd.read_excel(file_name)
    df = df.dropna(how='all', axis=1)
    df = df.dropna(how='any', axis=0)
    df.loc[:, 'GENERO'] = file_name.split('.')[-2]
    return df

#print(create_df(link[0]))

def create_general_df(links):
    general_df = create_df(links[0])

    for i in range(1, len(links)):
        general_df = general_df.append(create_df(links[i]))
    return general_df

print(create_general_df(link))



