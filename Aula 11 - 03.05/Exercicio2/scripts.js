$(document).ready(function() {
    // Submeter o formulário de login
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Evita o comportamento padrão do formulário
  
      // Simulação de autenticação - substitua pelo seu código real
      var username = $('#username').val();
      var password = $('#password').val();
  
      if (username === 'usuario' && password === 'senha') {
        // Redirecionar para a página de home
        window.location.href = 'home.html';
      } else {
        // Exibir mensagem de erro
        alert('Credenciais inválidas. Tente novamente.');
      }
    });
  });
  