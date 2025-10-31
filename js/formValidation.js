export function configurarValidacao() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const cpf = document.querySelector('#cpf').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();

    const erros = [];

    if (nome.length < 3) erros.push('O nome deve ter pelo menos 3 caracteres.');
    if (!email.includes('@')) erros.push('E-mail inválido.');
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) erros.push('CPF inválido.');
    if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(telefone)) erros.push('Telefone inválido.');

    const aviso = document.querySelector('#aviso') || document.createElement('p');
    aviso.id = 'aviso';
    aviso.style.color = erros.length ? 'red' : 'green';
    aviso.textContent = erros.length ? erros.join(' ') : 'Cadastro realizado com sucesso!';

    form.appendChild(aviso);

    if (erros.length === 0) {
      salvarCadastro();
      form.reset();
    }
  });
}

function salvarCadastro() {
  const dados = {
    nome: document.querySelector('#nome').value,
    email: document.querySelector('#email').value,
    tipo: document.querySelector('input[name="tipo"]:checked').value
  };

  let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.push(dados);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
}
