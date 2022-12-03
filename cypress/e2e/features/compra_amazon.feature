#language:pt
@compra_amazon
Funcionalidade: Acessar a Amazon e inserir um produto no carrinho

    Cenário: 01 - Acessar a página inicial da Amazon
        Dado que estou na tela inicial da amazon

    Cenário: 02 - Procurar pelo produto e inserir no carrinho
        Dado que realizo a busca pelo produto na barra de pesquisa
        Quando selecionar o produto desejado na listagem
        Então inserir o produto ao carrinho e validar a mensagem 