
# Gerador de PPPoE:

Esse site foi criado a partir da ideia do <a href="https://github.com/artur-calderon"> Artur Calderon </a> em economizar tempo e padronizar a rotina de liberação de sinal em um cliente de internet da <a href="https://speedtravel.com.br/">SpeedTravel Telecom</a>.

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

Link: https://lucassimione.github.io/speedtravelpppoe/

