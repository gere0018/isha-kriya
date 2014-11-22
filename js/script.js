$(document).on("mobileinit", function(){
  //settings and stuff
});

$(document).on("ready", function(ev){
  //page is ready to do stuff like have event listeners on buttons
  $(".next").click(function(ev) {
        ev.preventDefault();
        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"page"});
    });
  
  $(".prev").click( function(ev) {
        ev.preventDefault();

        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"page"});
    });
    
//    We used pageiniti function because before the page loaded the button didn't even exist.
    
    
    $('div[id^="dlg"]').on("pageshow", function(){
        console.log("pageshow");
        var $closeBtn= $('div[id^="dlg"] [data-role=header] .ui-btn');
        console.log($closeBtn);
        $closeBtn.on("click", function(ev){
         console.log("value");
        var dialogId = this.parentElement.parentElement.parentElement.id;
            console.log(dialogId);
        localStorage.setItem("gere0018-step", "#" + dialogId);
        
        });  
               
     });
    
    
    var $startBtn= $(".ui-icon-power");
    $startBtn.on("click", function(ev){
        ev.preventDefault();
        var newId = localStorage.getItem("gere0018-step");
     if(localStorage.getItem("gere0018-step") !== null){
         $.mobile.pageContainer.pagecontainer("change",
                                              newId,
                                              { role:"page"});
         
     }else{
      $.mobile.pageContainer.pagecontainer("change",
                                              "#dlg_0",
                                              { role:"page"});   
         
     }
        
        
        
    });
    
    
});

