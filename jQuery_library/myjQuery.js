$(document).ready(function () {
    // Your code here
    // console.log($);  
    // or we can write in this way same $ is same as we can write jQuery
    // console.log(jQuery);
    console.log("We are using jQuery");
    // $('selector').action() this is Query syntax
    // $('p').click();
    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //     // $('p').hide();
    //     // $(this).hide();
    //     // $('#id').hide(); // for selecting an id
    //     // $('.class').hide();  // for selecting a class
    // }); // do this when clicked
    // $('p').click();
    // $('#second').click(); 
    // $('.odd').click();
    // $('*').click(); // this will select all elements.
    // $('p.odd').click();
    // $('p:first').click(); // this will select first p element

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    // });

    // $('p').mouseenter(function () {
    //     console.log('your mouse entered in p', this);
    // });

    // $('p').hover(function () {
    //     console.log('your hovered in p', this);
    // },
    // function(){
    //     console.log('Thanks for coming');

    // });

    // The on method
    $('p').on('click', function () {
        console.log('Thanks for clicking', this);
    });

    $('p').on(
        {
            'click': function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log('Mouse Leave');
            }

        });
    // $('#wiki').hide(1000,function(){
    //     console.log('Hidden');
    // });
    // $('#wiki').show(1000,function(){
    //     console.log('Show');
    // });
    // $('#but').click(function(){
    //     $('#wiki').toggle(1000);
    // });
    // $('#but').click(function(){
    //     $('#wiki').fadeToggle(3000);
    // });
    // $('#wiki').slideUp(1000,function(){
    //     console.log('done');
    // });
    // $('#wiki').slideDown(1000);
    // $('#wiki').animate({opacity:0.3},2000);
    // $('#wiki').animate(
    //     {
    //         opacity:0.3,
    //         height:'150px',
    //         width:'350px'
    //     },2000);
    // $('#wiki').animate(
    //     {
    //         opacity:0.3,
    //         height:'150px',
    //         width:'350px'
    //     },"slow");

    // $('#wiki').animate({opacity:0.3},4000);
    // $('#wiki').animate({opacity:0.9},4000);
    // $('#wiki').animate({width:'350px'},1000);
    // $('#wiki').stop();
    // $('#wiki').text();
    // $('#wiki').text('This is ammad');
    // $('#wiki').html();
    // $('#wiki').empty();
    // $('#wiki').remove();
    // $('#wiki').addClass('myclass'); 
    // $('#wiki').addClass('myclass2'); 
    // $('#wiki').removeClass('myclass');
    $("button").click(function () {
        $("p").toggleClass("main");
    });
    $('#wiki').css('background-color', 'yellow');

    $.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){
        console.log(data);
        $('#status').text(status);       
        $("#ajax").text(data);
    });

    $.post('https://code.jquery.com/jquery-3.6.0.js',
    {name:'harry',channel:'code with harry'},
    function(data,status){
    alert(status);    
});

});
console.log("I am in a new file now");