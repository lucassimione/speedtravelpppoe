const client = document.querySelector('.cliente')
const loginPPPOE = document.querySelector('.loginPPPOE')
const senhaPPPOE = document.querySelector('.senhaPPPOE')
const senhaModem = document.querySelector('.senhaModem')
const btn_gerar = document.querySelector('.gerar')
const btn_Liberacao = document.querySelector('.btn_liberacao') 


btn_gerar.addEventListener('click',gerarPPPOE);
btn_Liberacao.addEventListener('click',pedirLiberacao)



function gerarPPPOE(e){
  e.preventDefault();
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: loginPPPOE.value,
    senhaPPPOE: senhaPPPOE.value,
    senhaModem: senhaModem.value
  }

  console.log(dados)

  const boxResults = document.querySelector('.results')
  const contacts = document.querySelector('.contatosN2')
  boxResults.style.display = 'block'
  contacts.style.display = 'flex'


  boxResults.innerHTML = `
    <p>Nome do Cliente: ${dados.nomeCliente} </p>
    <p>Login PPPoE: ${dados.loginPPPOE}jpr </p>
    <p>Senha PPPoE: ${dados.senhaPPPOE} </p>
    <p>Senha Modem: Speed@${dados.senhaModem} </p>
  `
}

function pedirLiberacao(e){
  e.preventDefault()
  const select = document.getElementById('contacts')
  const option = select.options[select.selectedIndex].value;
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: loginPPPOE.value,
    senhaPPPOE: senhaPPPOE.value,
    senhaModem: senhaModem.value
  }

  const text = `
  *Nome do Cliente:* ${dados.nomeCliente}\n
  *Login PPPoE:* ${dados.loginPPPOE}jpr \n 
  *Senha PPPoE:* ${dados.senhaPPPOE} \n
  *Senha Modem:* Speed@${dados.senhaModem}
  `

  console.log(text);
  
  
  window.open(`https://api.whatsapp.com/send?phone=55${option}&text=${text}`, '_blank')

}