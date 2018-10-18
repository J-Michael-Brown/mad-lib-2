$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    $(".fill-out").hide();

  if (person1Input){
    $(".person1").text(person1Input);
  } else {
    $("#person1fill").show();
  }
  if (person2Input){
    $(".person2").text(person2Input);
  } else {
    $("#person2fill").show();
  }
  if (animalInput){
    $(".animal").text(animalInput);
  } else {
    $("#animalfill").show();
  }
  if (exclamationInput){
    $(".exclamation").text(exclamationInput);
  } else {
    $("#exclamationfill").show();
  }
  if (verbInput){
    $(".verb").text(verbInput);
  } else {
    $("#verbfill").show();
  }
  if (nounInput){
    $(".noun").text(nounInput);
  } else {
    $("#nounfill").show();
  }

  if (!person1Input || !person2Input || !animalInput || !exclamationInput || !verbInput || !nounInput) {
    $("#empty-fields").show();

  } else {
    $("#story").show();
  }

    event.preventDefault();
  });
});
