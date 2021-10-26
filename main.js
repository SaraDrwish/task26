
// Console.log(repeat(conteiner_flex));

// repeat(conteinerflex);

var imgesss = [ 
"./img/xp1.jpg.pagespeed.ic.jvpTK4k-M7.webp",
"./img/xp2.jpg.pagespeed.ic.fC8sNe3MOm.webp" ,
"./img/xp3.jpg.pagespeed.ic.M0kinvJ9Tz.webp",
"./img/xp4.jpg.pagespeed.ic.MNQ-B7dnJ2.webp",
"./img/xp5.jpg.pagespeed.ic.FMUp9tYqM2.webp" ,
"./img/xp6.jpg.pagespeed.ic.FyiSsBve8k.webp",
"./img/xp7.jpg.pagespeed.ic.ewrg9E3C04.webp ",
"./img/xp8.jpg.pagespeed.ic.wrqVuu83yG.webp",
"./img/xp9.jpg.pagespeed.ic.IgcEX1k7BA.webp"

];

// (
    
    function repeat(){

    var conteinerflex = document.getElementById("conteinerflex");
    var temp  = "";

    for(i = 0 ;i < imgesss.length ; i ++){

        // i = conteinerflex ;
temp+=

`
                              <div class="item_box"  id="item_box">
                                    <div class="itemimg"  >
                                        <img src=" ` + imgesss[i] + ` " alt="aa">
                                    </div>
                                    <div class="itemtext">
                                        <h4> <a href="#">  MINIMAL DESIGN</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>

`    
    }
   
document.getElementById("conteinerflex").innerHTML= temp;

    // return conteiner_flex ;
} 

repeat();

// (  )  ) 

// invoc function





