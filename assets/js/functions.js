jQuery( document ).ready(function() {
 
    $(window).scroll(function(){
    $('.topnav').toggleClass('bg-black navbar-black shadow-sm scrollednav py-0', $(this).scrollTop() > 50);
    });

    $('#modal_newsletter').on('show.bs.modal', function () {
      $('.downloadzip')[0].click();
    });
    
});
