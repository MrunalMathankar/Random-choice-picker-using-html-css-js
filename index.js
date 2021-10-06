 const tagsEl = document.getElementById('tags');
 const textarea = document.getElementById('textarea');

 textarea.focus(); //directly focus to the textarea when the page gets load 

 textarea.addEventListener('keyup' , (e)=>{
     createTags(e.target.value);

     if(e.key == 'Enter'){
         setTimeout(()=>{
             e.target.value = '';
         },10);
         
     randomSelect();
     }
 });

 function createTags(input){
     //    const tags = input.split(','); //split method splits the character whenever comma is pressed in this case and splits the characters into a array element
     const tags = input.split(',').filter(tag=>tag.trim()!== '').map(tag=>tag.trim());
       //the above code tells that whatever inside the input tag split it into the array first then the filter method is used if there any blankspaces in the array then do not add it to the array and finally the map mthod tells that trim the blankspace from both side of the string and return the new array for the elements 
    
       tagsEl.innerHTML = '';
     tags.forEach(tag => {
         const tagEl = document.createElement('span');
         tagEl.classList.add('tag');
         tagEl.innerText = tag;
         tagsEl.appendChild(tagEl);
     });
 }

 function randomSelect(){
     const times = 30;

     const interval = setInterval(()=>{
         const randomTag = pickRandomTag();
         highlightTag(randomTag);

         setTimeout(()=>{
            unhighlightTag(randomTag);
         },100)
     } , 100);

     setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        } , 10);
     } , times*100);
    
 }

 function pickRandomTag(){
     const tags = document.querySelectorAll('.tag');
     return tags[Math.floor(Math.random()*tags.length)];
 }

 function highlightTag(tag){
     tag.classList.add('highlight')
 }

 function unhighlightTag(tag){
    tag.classList.remove('highlight')
}
