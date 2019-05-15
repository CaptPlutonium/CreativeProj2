async function  myFunct()
{
    console.log("ok");
	
		const url2 = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat";
        
        const url = "https://aws.random.cat/meow";

        var response2 = await fetch(url2);
        console.log("responce2: ",response2);
        const json2 = await response2.json();
        console.log("json2: ", json2);
        console.log("1");
		try{
			//tryign to do something that might fail
			const response = await fetch(url);

			//console.log("responce: ",response);

			const json = await response.json();
			//console.log("json: ", json);

            let results = "";
            results +="<img src='" + json.file +"' class= 'picture'>"
			
			document.getElementById("catResults").innerHTML = results;


            //NEW STUFF
           fetch(url2)
                .then(function(response) {
                return response.json();
                   }).then(function(json) {
                console.log(json);
                let result2 = "";
                result2 += "<p id='catFact'>"
                result2 += json.text
                result2 += "</p>"
               

                console.log(document.getElementById("catFactResult"));
                document.getElementById("catFactResult").innerHTML = result2;
                });


		}catch(err){
			console.log(err);
		}

};