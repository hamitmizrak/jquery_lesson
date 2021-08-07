//jQuery ==> $
//jQuery ==> '
//sayfa yüklendikten sonra js , jquery açılsın

//fazla kodlardan arınmak
//clean code
// ajax
//Dom daha rahat yönetebiliyoruz.

//write less, do more

//lightweight
//cross-browser
//2006 John Resig
//JS kütüphanesidir.
//bir programlama dili değildir.

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
//  let object = {
//    color: "red",
//    background: "yellow",
//    fontSize: "2rem",
//  };
//  $(document).ready(function () {
//    $("#selector").click(function () {
//      $("#css").css(object);
//    });
//  });

//jquery event-1 click();
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $("#css").css("color", "red");
//   });
// });

//jquery event-1 dblclick();
// $(document).ready(function () {
//   $("#selector2").dblclick(function () {
//     $("#css2").css("color", "blue");
//   });
// });

//jquery event-2 mouseover();
//  $(document).ready(function () {
//   $("#selector2").mouseover(function () {
//      $("#css2").css("color", "blue");
//    });
//  });

//jquery event-3 mouseout();
// $(document).ready(function () {
//   $("#selector2").mouseout(function () {
//     $("#css2").css("color", "blue");
//   });
// });

//jquery event-3 keypress();
//mouse işareledim sonra klavyeden bir tuşa bas ve çek
// $(document).ready(function () {
//   $("#selector2").keypress(function () {
//     $("#css2").css("color", "blue");
//   });
// });

//jquery event-4 keypress();
//mouse işareledim sonra klavyeden bir tuşa sadece bas
// $(document).ready(function () {
//   $("#selector2").keydown(function () {
//     $("#css2").css("color", "blue");
//   });
// });

//addClass removeClass toogleClass
// $(document).ready(function () {
//   $("#selector2").click(function () {
//     $("#cssDegisti").addClass(".cssAdd");
//     $("#cssDegisti").removeClass(".cssAdd");
//     $("#cssDegisti").toggleClass(".cssAdd");
//   });
// });

//attribute
// $(document).ready(function () {
//   $("#selector").click(function () {
//     $("#image_jquery").attr("width", "111");
//    // $("#image_jquery").removeAttr("width", "111");
//   });
// });


//hide -show
// $(document).ready(function () {
//   $("#gizle").click(function () {
//     $("#image_jquery").hide();
//   });
// });

// $(document).ready(function () {
//   $("#goster").click(function () {
//     $("#image_jquery").show();
//   });
// });

//fade slice
$(document).ready(function () {
  $("#gizle").click(function () {
    $("#image_jquery").fadeOut("slow");
  });
});


