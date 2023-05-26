const myArr = [];
        const separator = "<br>"

        function pushData(){
            var inputText = document.getElementById('inputText').value;

            myArr.push(inputText);

            var pval = "";

            for(i = 0; i < myArr.length; i++){
                pval += myArr[i] + "<br>";
            }

            document.getElementById("display").innerHTML = pval + "<br>";
        }

        function sortItems(){
            var pval = "";
            myArr.sort();
            
            
            var sorted = myArr.sort();
            var text = sorted.join(separator);
            document.getElementById("display").innerHTML =  text;
        }

      function unSort(){
        var xSort = myArr;
        var shuffled = xSort.sort(() => Math.random() - 0.5);
        var newText = shuffled.join(separator);
        
        document.getElementById("display").innerHTML =  newText;
      }