(function(){ 
        var $body = document.querySelector('body');
        $body.classList.remove('no-js');
        $body.classList.add('js')
        // remover o disable none do btn menu
      // var $btnMenu = document.querySelector('.header__btnMenu');
      // $btnMenu.removeAttribute('style')

       // vou criar um instancia de um MENU , vu criar um objeto novo passando as configuracoes abaixo
       var menu = new Menu({
           container: '.header__nav',
           togglebtn: '.header__btnMenu',
           // "widthEnabled" vai receber o tamanho da @media
           //widthEnabled: 800
       })

       var carroselImgs = new Carrosel({
           container: '.slider .slideshow',
           itens: 'figure',
           btnPrev: '.prev',
           btnNext: '.next'
       })
       var carroselQuotes = new Carrosel({
           container: '.quote-container .quote-slideshow',
           itens: 'figure',
           btnPrev: '.prev',
           btnNext: '.next'
       })
      

      




   



})()