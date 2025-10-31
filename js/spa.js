export function iniciarSPA() {
  const links = document.querySelectorAll('nav a');
  const paginas = ['index.html', 'projetos.html', 'cadastro.html'];

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const destino = link.getAttribute('href');

      
      if (paginas.includes(destino)) {
        e.preventDefault();
        carregarConteudo(destino);
      }
    });
  });
}

function carregarConteudo(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      const main = document.querySelector('main');
      const conteudo = new DOMParser().parseFromString(html, 'text/html');
      const novoMain = conteudo.querySelector('main');
      if (main && novoMain) main.innerHTML = novoMain.innerHTML;
    })
    .catch(() => alert('Erro ao carregar conteúdo.'));
}
