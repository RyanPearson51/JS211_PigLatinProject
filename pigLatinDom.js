const pigLatin = (word) => {
    
    
      // Your code here
      word = word.trim().toLowerCase();
      let vowel = 'aeiouy'
      if (vowel.includes(word[0])) {
        return word + 'yay';
      } else {
        for (let i = 0; i<word.length; i++){
          if (vowel.indexOf(word[i])!== -1){
            let beforeVowel = word.substring(0,i)
            return word.substring(i) + beforeVowel + 'ay';
            //if there is a vowel, beforeVowel will equal every character up to the first one
            //then return the rest of the word, + the initial characters before the vowel, + ay
          }
        }
      }
    
    }

    

    
    let button = document.getElementById('inputButton');

    button.addEventListener("click", function(){
        
        console.log('button clicked');
    
        let input = document.getElementById('inputBox');
        let word = input.value;
        console.log("Item to add: ", word);
    
        if(word.trim().length == 0){
            console.log('---');
            return;
        }
    
        let li = document.createElement('li');
    
        let ul = document.getElementById('todoList')
        ul.appendChild(li);
    
        li.innerText = word + ":  " + pigLatin(word);
        input.value = '';
    });