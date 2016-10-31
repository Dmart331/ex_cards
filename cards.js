      															
var submit = document.getElementById("submit");
var output = document.getElementById("output");
var input = document.getElementById("input");
var card = document.getElementsByClassName('second');

submit.addEventListener("click" , function(event){

	newInput = input.value;
	output.innerHTML += '<div class="second">' +  newInput +'<button type="reset" class="delete">' + "Delete" + '</button></div>' ;
		// var del=document.getElementsByClassName('delete');

		// del.addEventListener("click" , function(event) {
		// var card = document.getElementsByClassName('card');
		// 	for(i=0; i<card.length; i++){
		// 		console.log("Click");
		// 		event.target.remove('second');
  //   		}
		// 	})

});
var del = document.getElementById("delete");
document.addEventListener("click" , function(event){
	console.log('click');
		if (event.target.innerHTML === 'Delete') {
		console.log("card", card)
        event.target.parentElement.remove();
    }

})

				
    	

// output.style.border="solid 1px red";
// output.style.width="60%";
// output.style.minHeight="100px";	
// output.style.textAlign="center"; 
// output.style.marginTop="50px";
  // frameid.parentNode.removeChild(frameid);
// 
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.