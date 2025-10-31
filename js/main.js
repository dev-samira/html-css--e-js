import { iniciarSPA } from './spa.js';
import { configurarValidacao } from './formValidation.js';
import { carregarUsuarios } from './models.js';

document.addEventListener('DOMContentLoaded', () => {
  iniciarSPA();           // Ativa a navegação tipo SPA
  configurarValidacao();  // Ativa a validação dos formulários
  carregarUsuarios();     // Carrega os dados simulados
});
