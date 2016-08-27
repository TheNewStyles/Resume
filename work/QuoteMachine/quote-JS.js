$(document).ready(function(){
  
   $("#quote-button").click(function(){  

   	    var btn = $(this);
	    btn.prop('disabled',true);
	    window.setTimeout(function(){ 
	        btn.prop('disabled',false);
	    },1000);

      //quotes array    
      var quotes = [
        "It turns out Jesus is a squirrel. A big fat meaty one. And I shot and ate that son of a bitch. - John Fitzgerald",
        "My heart bleeds. But revenge is in the creator's hands. - Hikuc",
        "I ain't afraid to die anymore. I'd done it already. - Hugh Glass",
        "I guess... I can't help thinking about whether we did the right... - Bridger",
        "I can't remember my wife's face. I worry I won't recognize her when I get back home. - Andrew Henry",
        "You better take that last breath of yours now! - John Fitzgerald",
        "You all have stolen everything from us. Everything! The land. The animals. - Elk Dog",
        "God giveth, God taketh away. - John Fitzgerald",
        "At least he heard me. - Hawk"        
      ];
      
      // get random id from array  
      var random = quotes[Math.floor( Math.random() * quotes.length)];
	  // add text into #quotes id in html      
      $('#quotes').hide().html(random).fadeIn(1000);
	  $('#quote-button').blur();
	  // tweet the quote
	  $("#tweet-link").attr("href", 'https://twitter.com/intent/tweet?text=' + random);      
    });     
});