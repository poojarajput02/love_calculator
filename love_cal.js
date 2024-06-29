
        function love(){
        var name1 = document.getElementById("NameOne").value;
        var name2 = document.getElementById("NameTwo").value;
        if(name1.length<=2){
            alert("Enter at least 3 character");
        }
        if(name2.length<=2){
            alert("Enter at least 3 character");
        }
        else{
            var random = Math.floor(Math.random()*100);
            document.getElementById("print").innerHTML = name1 + " and " + name2 + "=" +random + "%" + "of love";
        }
        if(random<=10 || random<=50){
            document.getElementById("statement").innerHTML = "Good Relationship";
        }
        else if(random<=50 || random<=80){
            document.getElementById("statement").innerHTML = "Great Relationship ";
        }
        else if(random<=80 || random<=100){
            document.getElementById("statement").innerHTML = "lovely Relationship ";
        }
    }
