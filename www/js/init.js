(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
    $('#buscar').click(function(){
      $("#colect").empty();
      $.ajax({
        method: "GET",
        url: "https://musicbrainz.org/ws/2/artist?query="+$("#input").val(),
        dataType: "json",   // necessitem això pq ens retorni un objecte JSON
      }).done(function (msg) {
        for(var item in msg.artists) {
          console.log(msg.artists[item]);
        
          $("#colect").append("<li class='collection-item'><div>"+msg.artists[item].name+"   "+msg.artists[item].disambiguation+"<a href='#!' class='secondary-content'><i class='material-icons'>send</i></a></div></li>");
          

        };
      }).fail(function () {
        alert("ERROR");
      });

    });
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
