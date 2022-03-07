$(document).ready(function(){
    let click = false;

    $('.caixa').on('click', function(){
        if(click === false){
            $(this).addClass('dark-mode bg-white');
            $('body').addClass('bg-dark');
            $('.circulo').addClass('bg-dark');
            $('.titulo').addClass('titulo-white');
            click = true;
            
        } else{
            $(this).removeClass('dark-mode bg-white');
            $('body').removeClass('bg-dark');
            $('.circulo').removeClass('bg-dark');
            $('.titulo').removeClass('titulo-white');
            click = false;
        }
    })
})