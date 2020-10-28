 $(document).ready(function(event) {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
   
    let wordInput = $("input#userInput").val();
    let wordString = wordInput.split("");
    let reverseArray = wordString.reverse();
    let reverseWord = reverseArray.join("");
    if (reverseWord === wordInput) {
      result = ("Yes! " + wordInput + " is a palindrome!");
    } else {
       result = ("No, " + wordInput + " is not a palindrome.")
    }
    $("#output").show();
    $("#output").text(result);
  });
 }); 