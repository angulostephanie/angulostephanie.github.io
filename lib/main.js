$(document).ready(function () {
  function fadeloop(obj,fout,fin,loop) {
    var $obj = $(obj),intId,fn = function() {
         $obj.fadeOut(fout, "linear").fadeIn(fin, "linear");
      };
      fn();
      if(loop) {
          intId = setInterval(fn,fout+fin+100);
          return intId;
      }
      return false;
  }
  fadeloop('#fade',700,650,true);
  // $("#fade").fadeToggle(500, fade()).always().promise();
  // function keepFading(id) {
  //   $("#"+id).fadeToggle(2000, function () {
  //       keepFading($"#"+id)
  //   });
  // }
  // $(keepFading($("#fade")));

  // $(fadeRepeat);
});
