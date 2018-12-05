/*

    Program Name: Recipe Display Application
    
    Author: Danielle Osdon
    
    Date: December 4, 2018
    
    Filename: myRecipe.js
    
*/

/* global $ */

//DOM Traversal next() and Animation

function display(event) {

    $(event.currentTarget).next().animate({width: 'toggle'}, "fast");

}//end of display


  

// CSS Change  
$("h3").hover(function() {
        
        $(this).css("background-color", "black");
        
        }, function() {
            
            $(this).css("background-color", "white");
        }); 
        
   $("h3").hover(display);
    