
# Gerador de PPPoE:

Na empresa onde eu trabalho, que é um provedor de internet, toda vez que vamos instalar o roteador
na casa do cliente, temos que mandar por whatsapp algumas informações para liberar o acesso daquele cliente 
para internet.
E toda vez temos que ficar digitando as mesmas coisas e ficar copiando e colando cada coisa para cada conversa do whatsapp.
Resolvi então criar um mini-app onde vamos digitar uma única vez e mandar pra quantos contatos quisermos pelo whatsapp já formatado. 

## Informações que precisam ser repetidas:

- Nome completo do cliente
- Login PPPoE
- Senha PPPoE
- Senha do Roteador
- Caixa que o cliente está conectado (fibra)
- Porta em que o cliente está conectado
- Código do aparelho (Serial)



## Screenshots
Preenche com os dados do cliente:
![preenchido](https://i.imgur.com/4l6XxyZ.png)

Após clicar em gerar, mostra como ficaram os dados.
A senha é gerada automáticamente por uma função no código seguindo o padrão da empresa
que é colocar a palavra "Speed@" e o restante tem que ser aleatório. A função gera 6 digitos aleatórios.

![preenchido](https://i.imgur.com/HBXm4zO.png)

Após isso, tem um select para escolher qual operador estiver disponível para fazer a liberação de sinal para o referido cliente.
Toda a mensagem é incorporada em um link da API do Whatsapp e enivada para o contato.

![preenchido](https://i.imgur.com/IBeAXA8.png)

## Demonstração

Link: https://artur-calderon.github.io/speedtravelpppoe/

