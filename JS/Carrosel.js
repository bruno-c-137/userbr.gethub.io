function Carrosel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container
    
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext

    var _this = this;
    var _currentSlide = 0;
     
    init()
    function init(){
        // eu vou percorrer essa colecao e vou remover a classe "show"
        var _show = _this.container.querySelectorAll('.show')

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        // preciso colocar essa class no primeiro item
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

        // essa funcao e responsavel por acrescentar esses listenes
        addListeners()
        

    }
    function addListeners(){
        // se eu clicar em next/prev eu chamar um funcao 
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)

    }
    // quando eu clicar no next eu vou somar mais um no slide atual
    function showNextSlide(){
        _currentSlide++;
        showSlide()

    }
    function showPrevSlide(){
        _currentSlide--;
        showSlide()
    }
    // essa funcao vai pegar o slide atual e vai acrescentar uma class, mas primeiro ela vai remover a class no slide atual 
     function showSlide(){
         //  essa var "qtd" e o numero de slides
         var qtd = _this.itens.length;
         var slide = _currentSlide % qtd
         // slide vai receber o valor absoluto dele mesmo
         slide = Math.abs(slide)
         // remover o elemento que tem a class show
         _this.container.querySelector('.show').classList.remove('show');
         // agora vou acrescentar a class show que corresponde ao numero do slide
         _this.itens[slide].classList.add('show')

     }

}