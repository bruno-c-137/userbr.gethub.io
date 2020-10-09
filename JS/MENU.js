
    function Menu(config){
        // se esse cara for igual a uma string eu vou passar o document, se nao ele vai ser o proprio elemento
        this.nav = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container


        this.btn = (typeof config.togglebtn === 'string') ? document.querySelector(config.togglebtn) : config.togglebtn
        
       // this.maxWidth = config.widthEnabled || false;

        var _opened = false;
        var _this = this

        // a primeira coisa quando o usuario instanciar um novo menu eu preciso remover o atributo style do meu botao
        
        this.btn.removeAttribute('style')
        closeMenu()
        
 
        window.addEventListener('load', myFunction);
        window.addEventListener('resize', myFunction);
        function myFunction(){
       // var medida = _this.nav.getBoundingClientRect().width
        var medida = window.innerWidth
        console.log(medida)
        if(!_opened){
            openMenu()
        }
         if(medida < 1067){
            closeMenu()
        }
       
        }
         

        // a funcao "openOrClose" vai verificar se o menu esta aberto ou fechado e faz a inversao
        this.btn.addEventListener('click', openOrClose)
  
        // ele vai fazer um pergunta: se opened nao esta aberto quer dizer que o menu nao esta aberto ai ele vai chamar o "opemMenu"
        // se nao, quer dizer que o menu esta aberto, ai ele vai chamar o "closeMenu"
        function openOrClose(){
            if(!_opened){
                openMenu()
            }
            else{
               
                closeMenu()
               
            }

        }
        function openMenu(){
            // recupera a posicao do menu
            var _top = _this.nav.getBoundingClientRect().top + 'px'
            // vou criar um objeto que vai receber um objeto com  com as propriedades do css que eu quero colocar nesse elemento
            var _style = {
                // esse cara abaixo vai ser a altura da viwport menos _top
                maxHeight: 'calc(100vh - '+ _top + ' )' , width: '100%',  overflow: 'hidden'
            }
            applyStyleToNav(_style)
            _opened = true;
        }

        function applyStyleToNav(_style){
            //percorrer o objeto style, ele vai me da um array com maxheight e overflow
            // forEach vai fazer com que para cada stilo eu vou fazer uma acao
            Object.keys(_style).forEach( stl => {
                // essa funcao que  recebe um objeto e aplica os objetos nos estilos em line da nav
                _this.nav.style[stl] = _style[stl]

            })

        }
        function closeMenu(){
            var _style = {
                maxHeight: '0px', overflow: 'hidden'

            }
            applyStyleToNav(_style);
            _opened = false;
        }
    }
     