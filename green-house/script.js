$(document).ready(function() {

  const contentData = {
    default: {

      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop'
    },
    about: {
      image: 'https://plus.unsplash.com/premium_photo-1680286739871-01142bc609df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    services: {
      image: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    careers: {
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop'
    },
    contact: {
      image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop'
    }
  };

  function resetMenu() {
    $('.info-box').removeClass('active');
    $('.menu-link').removeClass('active-link');
    $('.menu-image-wrapper').css('background-image', `url('${contentData.default.image}')`);
  }

  // Função para abrir o menu
  $('.burguer').on('click', function() {
    resetMenu(); // Garante que o menu sempre abra no estado padrão
    $('#menu-overlay').addClass('is-open');
    $('body').addClass('menu-open');
  });

  // Função para fechar o menu
  $('#close-menu').on('click', function() {
    $('#menu-overlay').removeClass('is-open');
    $('body').removeClass('menu-open');
  });

  // Função principal para o clique nos links do menu
  $('.menu-link').on('click', function(e) {
    e.preventDefault(); // Impede que o link navegue

    const selectedContent = $(this).data('content');
    const targetInfoBox = $('#info-' + selectedContent);

    // Se o link clicado já estiver ativo, esconde a informação e volta ao padrão
    if ($(this).hasClass('active-link')) {
      resetMenu();
      return; // Para a execução aqui
    }

    // Remove a classe ativa de todos os links e painéis
    $('.menu-link').removeClass('active-link');
    $('.info-box').removeClass('active');

    // Adiciona a classe ativa ao link clicado
    $(this).addClass('active-link');

    // Muda a imagem de fundo
    $('.menu-image-wrapper').css('background-image', `url('${contentData[selectedContent].image}')`);

    // Mostra o painel de informação correspondente
    targetInfoBox.addClass('active');
  });

});

