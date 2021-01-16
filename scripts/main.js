let btn = document.querySelectorAll('.btn');
let ContentText = document.querySelectorAll('.content');
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", function(){
        let content = this.parentElement.nextElementSibling.children[0];
        content.classList.toggle("appear");
        for(var i=0 ; i < ContentText.length ; i++){
            if(content.id !== ContentText[i].id){
               ContentText[i].classList.remove("appear"); 
            }
        }
            
        });
        
}