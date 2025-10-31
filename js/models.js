export const usuarios = [
  { nome: 'Maria', tipo: 'voluntária' },
  { nome: 'João', tipo: 'doador' }
];

export function carregarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
