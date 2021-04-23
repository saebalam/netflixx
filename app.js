var images = [ "./images/john_wick.jpg" ,
                "./images/tenet.jpg",
                "./images/godzilla.jpg"
                ];
var i=0;

function change(){
    document.getElementById('wallpaper').src=images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
}

setInterval(change,3000);