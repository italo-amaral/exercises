import requests
import pandas as pd
import argparse

parser = argparse.ArgumentParser(description="search for books in the collection 'Biblioteca Central de Ideias")
parser.add_argument('-a', '--author', type=str, metavar='', help='search through author')
parser.add_argument('-t', '--title', type=str, metavar='', help='search through title')
parser.add_argument('-g', '--genre', type=str, metavar='', help='search through GENRE')
args = parser.parse_args()

MAX_ROWS = 100
MAX_COLUMNS = 4
WIDTH = 10000
pd.set_option('display.max_rows', MAX_ROWS)
pd.set_option('display.max_columns', MAX_COLUMNS)
pd.set_option('display.width', WIDTH)

link = ['http://www.institutousiminas.com/wp-content/uploads/2020/08/Adm-Publica.-Servico-Social.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Historia-e-Geografia.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Administracao.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Infantil-e-Juvenil.xlsx']
link2 = ['http://www.institutousiminas.com/wp-content/uploads/2020/08/Adm-Publica.-Servico-Social.xlsx',
        'https://www.institutousiminas.com/wp-content/uploads/2020/08/Historia-e-Geografia.xlsx']
def create_df(link_bs):
    response = requests.get(link_bs, verify=False)
    file_name = link_bs.split('/')[-1]
    file = open(file_name, 'wb')
    file.write(response.content)
    df = pd.read_excel(file_name)
    df = df.dropna(how='all', axis=1)  # remove colunas que todos os valores sejam vazios
    df = df.ffill()                    # preenche linhas vazias com o valor da linha superior
    df.columns = ['ID', 'TITLE', 'AUTHOR'] 
    df.loc[:, 'GENRE'] = file_name.split('.')[-2]   # adiciona coluna com o genero do livro
    #df.groupby('ID')['TITLE'].apply(lambda line: "".join(line))   #estudar o metodo
    for i in range(0, len(df['ID']) - 1):       # concatena titulos iguais baseados no id
        if df['ID'][i] == df['ID'][i + 1] and df['TITLE'][i] != df['TITLE'][i+1]:
            df['TITLE'][i + 1] = str(df['TITLE'][i]) + str(df['TITLE'][i + 1])
    df = df.drop_duplicates(subset='ID', keep='last')  # remove linhas duplicadas a partir do id
    return df

def create_general_df(links):
    general_df = create_df(links[0])
    for i in range(1, len(links)):
        general_df = general_df.append(create_df(links[i]))
    return general_df

library_df = create_general_df(link)
if __name__ == '__main__':
    if args.author:
        print(library_df.loc[library_df['AUTHOR'] == args.author])
    elif args.title:
        print(library_df.loc[library_df['TITLE'] == args.title])
    elif args.genre:
        print(library_df.loc[library_df['GENRE'] == args.genre])


