let random = document.querySelector(".type");
let type = random.innerHTML;
let arr = type.split("");

random.innerHTML = '';

// console.log(arr.length);

let typing = 0;
function haha() {
    if (typing < type.length) {
        random.innerHTML += type.charAt(typing);
        typing++   
        arr = type.split("");                                /* First expansion */
    } else{
        arr.pop();                           /* pop it to break all the elements separately */
        random.innerHTML = arr.join("");     /* first reduction */       
        if (arr.length == 0) {
            typing=0;
        }
    }
    
}
setInterval(() => {
    haha()
    
}, 150);

