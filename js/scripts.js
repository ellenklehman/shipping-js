$(document).ready(function() {

  $('form#new-package').submit(function(event) {
    event.preventDefault();

    var weight = parseInt($('input#weight').val());
    var dimension1 = parseInt($('input#dimension1').val());
    var dimension2 = parseInt($('input#dimension2').val());
    var dimension3 = parseInt($('input#dimension3').val());

    var quote = { packageWeight: weight,
                  length: dimension1,
                  height: dimension2,
                  width: dimension3,
                  cost: function() {
                    var total = this.packageWeight * (this.length + this.width + this.height);
                    return total;
                  }
                };


    $("#quote").append("$" + quote.cost());
  });
});
