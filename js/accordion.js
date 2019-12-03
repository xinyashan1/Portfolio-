var elAccord = document.getElementsByClassName('accordion');

var i;

for (i = 0; i < elAccord.length; i++ ) {
    elAccord[i].addEventListener('click', function (){
        this.classList.toggle('active');
        
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            
        }
        
        
        }
                                
    );
}

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}