const client = document.querySelector('.cliente')
const loginPPPOE = document.querySelector('.loginPPPOE')
const senhaPPPOE = document.querySelector('.senhaPPPOE')
const senhaModem = document.querySelector('.senhaModem')

const form = document.querySelector('.form')

const btn_gerar = document.querySelector('.gerar')
const btn_Liberacao = document.querySelector('.btn_liberacao') 
const btn_reset = document.querySelector('.resetar') 


btn_gerar.addEventListener('click',gerarPPPOE);
btn_Liberacao.addEventListener('click',pedirLiberacao)
btn_reset.addEventListener('click',(e)=>{
  e.preventDefault()
  form.reset()
  const boxResults = document.querySelector('.results')
  const contacts = document.querySelector('.contatosN2')
  boxResults.innerHTML=''
  boxResults.style.display = 'none'
  contacts.style.display = 'none'
})



function gerarPPPOE(e){
  e.preventDefault();
  if(client.value === '' || loginPPPOE === ' ' || senhaPPPOE === '' || senhaModem === '' ){
    alert('Preencha os campos')
    return
  }
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
    <p><b>Nome do Cliente:</b>  ${dados.nomeCliente} </p>
    <p><b>Login PPPoE:</b> ${dados.loginPPPOE}jpr </p>
    <p><b>Senha PPPoE:</b> ${dados.senhaPPPOE} </p>
    <p><b>Senha Modem:</b> Speed@${dados.senhaModem} </p>
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
  const text = " *Nome do Cliente:*  " + dados.nomeCliente + "\n" + "*Login PPPoE:* " + dados.loginPPPOE + "jpr" + "\n" + "  *Senha PPPoE:*  " + dados.senhaPPPOE + " *Senha Modem:*  " + "Speed@" + dados.senhaModem
 
  const msg = window.encodeURIComponent(text)
  console.log(text);
  
  
  window.open(`https://api.whatsapp.com/send?phone=55${option}&text=${msg}`, '_blank')

}