$(function(){
    var pokemonSearch;
    var defaultPokemon = '1'
    var defaultPokemonData;

    var initFunc = function() {
        defaultPokemonData  = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
            method: "GET",
          });
          defaultPokemonData.done(function(data) {
          defaultPokemonData = data;
          $('.loading-ctn').removeClass('active')
          $('.pokedex h3').text(data.name.toUpperCase())
          $('.poke-img img').attr('src', data.sprites.front_default)
        console.log(data)
        });
        defaultPokemonData.fail(function( jqXHR, textStatus, error ) {
            alert( "Request failed: " + textStatus + ' ' + error )
        });
    }

    initFunc()

    $('.btn').on('click', function(){
        pokemonSearch = $('.pokedex input[type="text"]').val()

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
            method: "GET",
          });
           
          request.done(function(data) {
              $('.pokedex h3').text(data.name.toUpperCase())
              $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data)
          });
           
          request.fail(function( jqXHR, textStatus, error ) {
            alert( "Request failed: " + textStatus + ' ' + error )
          });
        });
        $('.poke-list-btn').on('click',function(){
            var pokeList = $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/?limit=811',
                method: 'GET',
            });
            pokeList.done(function(data){
                var list = data.results;
                for(var i = 0; i < list.length; i++){
                    $('.popup-ctn').append('<li><a href="#" class="name">' + list[i].name + '</a></li>');
                    
                }
                $('.popup-ctn').toggleClass('active2');
            })
        })
    })
    
   
    // console.log($('.box1').children())
       
    // $('.box1').children().css({
    //        background: 'blue',
    //        display: 'inline-block',
    //        padding: '20px',
    //        margin: '20px'
    //    })

    //    $('p').each(function(){
    //        console.log(this)
    //        $(this).css({
    //            background: 'yellow'
    //        })
    //    })
    //    $('ul li').first().css({
    //        background: 'green'
    //    })
    // });



    //  $('div').addClass('active')

    //  if($('div').hasClass('active')) {
    //      console.log('this div has been activated')
    //  } else {
    //      console.log('sorry waiting to be activated')
    //  }
    //  console.log($('div').hasClass('active'))
    // $('.btn1').on('click', function() {
    //     $('.box1').addClass('active') 
    // }),
    // $('.btn2').on('click', function() {
    //  var value = $( "input" ).val();
    //  $('.box1').append('<span>this field has ' + value.length + 'characters </span>')    
    // })



















// All Challenges & Notes for Reference
// $(function(){
//     var myName = 'Raheim'
//     var i = 0
//     $('.button1').on('click', function(){
//         console.log(myName)
//     })
   
//     $('.button2').hover(function(){
//         while ( i < 26) {
//             console.log([i])
//             i++;
//         }
//     })
//    $('.square').mouseenter(function(){
//        $(this).css({
//            background: 'red'
//     })
//    })
//    $('.square').mouseleave(function(){
//        $(this).css({
//            background: 'black'
//     })
//    })
// })
// $(function() {
//     $(window).resize(function(){
//         if($(window).width() > 1000) {
//             $('body').css({
//                 background: 'red'
//             })
//         } else if($(window).width() > 700) {
//             $('body').css({
//                 background: 'blue'
//             })
//         } else {
//             $('body').css({
//                 background: 'yellow'
//             })
//         }
        
//     })
// });

// $(function(){
//     $('.box1').on('click', function(){
//         $('body').css({background: 'red'
//     })
// })
//     $( ".box2" ).on({
//         click: function() {
//             $('body').css({
//                 background:'purple'
//             })
//         }, mouseenter: function() {
//                 $('body').css({
//                     background:'yellow'
//                 })
//         }, mouseleave: function() {
//             $('body').css({
//                 background:'red'
//             })
//         }
//  });
// });

// $(function(){
//     $('.box1 a').on('click', function(event){
//      event.preventDefault()
//     $('.box3').css({background:'purple'
//        })
//     })
    
//     $('.box2').on('click', function(){
//         $('.box3').css({background: 'red'
//     })
//   })

//     $('.button').on('click', function(event){
//         event.stopPropagation()
//         if(event.target.nodeName == 'DIV') {
//             console.log(event.target.nodeName)
//             $('.box3').css({background: 'purple'
//         })
//         } else {
//         console.log(event.target.nodeName)
//         $('.box3').css({background: 'yellow'
//     })
//   }}
// )})

// $(function(){
//     $('.selectoptions').change(function(){
//         alert('changed value')
//     })
//     $('.myname').change(function(event){
//         $('.box1').html(event.target.value)
//     }) .focusin(function(){
//         $('.box2').css({
//             background: 'blue'
//     })
//     }) .focusout(function(){
//         $('.box2').css({
//             background: '#ccc'
//     })
//     })
// 
