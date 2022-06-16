
document.addEventListener("DOMContentLoaded",(event)=>{
    const list = document.querySelector("#list");
    document.querySelector("#postComment").addEventListener("click", postComment)
});


let postComment = () => {
    let li = document.createElement("li");
    let text = document.querySelector("#comment").value;
    if (text != "") {
        console.log(text);
        li.innerHTML = text;
        list.appendChild(li);
    } else {
        document.querySelector("#error").innerHTML = "tekstveld mag niet leeg zijn";
    }
}