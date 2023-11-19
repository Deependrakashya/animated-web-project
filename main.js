Shery.imageEffect("#back", { style: 5, config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0658499234303216},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":0.1,"range":[0.1,5]},"durationIn":{"value":0.1,"range":[0.1,5]},"displaceAmount":{"value":0.1},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.9,"range":[0,10]},"metaball":{"value":0.26,"range":[0,2]},"discard_threshold":{"value":0.79,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":22.31,"range":[0,100]}},gooey: true });




var elems = document.querySelectorAll(".ele");

elems.forEach(function(ele) {
  var h1s = ele.querySelectorAll("h1");
  var index = 0;
  var animate =false;
  var main = document.querySelector("#main");
  function handleClick() {
      if(!animate){
      
          animate =true;

    gsap.to(h1s[index], {
      top: "-=100%",
      ease: "Expo.easeInOut",
      duration: 0.8,
      onComplete: function() {
        gsap.set(this._targets[0], { top: "100%" });
        // main.removeEventListener("click", handleClick); // Remove the event listener once the animation is complete
      animate=false;
    },
    });
    index === h1s.length - 1 ? (index = 0) : index++;
    gsap.to(h1s[index], {
      top: "-=100%",
      ease: "Expo.easeInOut",
      duration: 1,
    });
  }
}
  main.addEventListener("click", handleClick);
});

// elems.forEach(function(.ele) {
//     var h1s=ele.querySelectorAll("h1");
//     var index =0;
//     document.querySelector("#main").addEventListener("click",function(){
        
//         gsap.to(h1s[index],{
//             top:"-=100%",
//             ease:Expo.easeInOut,
//             duration:1,
//             onComlete: function(){
//                 gsap.set(this._targets[0],{top:"100%"});
//             },
//         })
//         index === h1s.length-1  ? (index = 0) :index++;
//         // if(index===h1s.length-1){
//         //     index=0;
//         // }
//         // else{
//         //     index++;
//         // }
//         gsap.to(h1s[index],{
//             top:"-=100%",
//             ease:Expo.easeInOut,
//             duration:1,
//         })
//     })

// });