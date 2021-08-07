//jQuery ==> $
//jQuery ==> '
//sayfa yüklendikten sonra js , jquery açılsın

// $(document).ready();
//anonymous function ==> isimsiz fonksiyon
// $(tag).özellikler();
//$('#id').özellikler();
//$('.id').özellikler();
//$('p').özellikler();

$(document).ready(function () {
  $("#gizle").click(function () {
    //   $('p').hide();
    $("div>p").hide();
    // $('div + p').hide();
  });
});
