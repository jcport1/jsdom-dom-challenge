const counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input");

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
commentForm.addEventListener("submit", displayComment);
commentInput.addEventListener("input", handleInput);


function incrementCounter() {

    //counter value is a string 
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount + 1}`;
}


function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10); 
    //prevent counter from going below 0 
    if (currentCount > 0)
    counter.textContent = `${currentCount - 1}`;
}


function displayComment(event) {
    //only prevent default on submit
    event.preventDefault(); 
    //const commentText = commentInput.value; 
    //but better practice for getting form data is below 

    //get form data 
    const commentFormData = new FormData(event.target); 
    const commentText = commentFormData.get("comment");  
    
    //create new element for that comment 
    const comment = document.createElement("p");

    //add text for new comment
    comment.textContent = commentText; 

    //add comment to that comments const (which is the comment list)
    comments.append(comment);

    //reset the form -> which is accessible as the event target 

    event.target.reset(); 

}

function handleInput(event) {
   
}