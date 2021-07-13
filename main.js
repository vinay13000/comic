

 var images = ["1.png",
 "2.png",
 "3.png",
 "4.png",
 "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png"];
        
          var i = 0;
          function update()
          {
              i++;
              var npic = 21
              if(i > npic )
              {
                  i = 0;
              }
              var updatedImage = images[i];
             
              document.getElementById("family_member_image").src = updatedImage;
              
          }
