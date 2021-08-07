//jQuery ==> $
//jQuery ==> '
//sayfa yüklendikten sonra js , jquery açılsın

// $(document).ready();
//anonymous function ==> isimsiz fonksiyon
// $(tag).özellikler();
//$('#id').özellikler();
//$('.class').özellikler();
//$('p').özellikler();

//Html5
//Css3
//Responsive design
//Bootstrap
//JS
//JS DOM
//jQuery

//Neden jQuery ?
//Google
//Microsoft
//Netflix
//IBM

//CDN

//Group Selector
//css
// *{} ==> bütün hepsi
// h1{} ==> bütün h1
// h1,p{} ==> bütün h1 ve bütün p
// div p {} ==> div'in içindeki bütün p 'ler
// div > p parenti div olan p'ler
// div ~ p ==> div ile p aynı seviyedeyse bütün p
// div + p ==>  div ile p aynı seviyede olacak ilk p

//attribute selector ==>  []
{
  /* <input type="text" placeholder="" title="baş her son"/>
input[type="text"]{ ... }
input[title~="her"]{}
input[title$="son"]{}
input[title^="baş"]{} */
}

//pseudo element ==> ::
//pseudo class ==> : LEvHa ==>

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// dom html
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $("#html").html("<h1>içerikler</h1>");
//   });
// });

//dom text
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $(".text").text('<h1>içerikler</h1>');
//   });
// });

//dom css -1
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $("#css").css("color", "blue");
//   });
// });

//dom css -2
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $("#css").css({
//       color: "red",
//       background: "yellow",
//       fontSize: "2rem",
//     });
//   });
// });

//dom css -3 object
let object = {
  color: "red",
  background: "yellow",
  fontSize: "2rem",
};
$(document).ready(function () {
  $("#selector").click(function () {
    $("#css").css(object);
  });
});
