let dictionary = [
                    {
                        word: "apple",
                        def: "Mwnse gusu jaigayao taigra pitai",
                        rel:["mango","pear","guava"]
                    },
                    {
                        word:"football",
                        def:"Jwlud",
                        rel:["football","baseball","basketball"]
                    },
                    {
                        word:"car",
                        def:"Gari",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"cat",
                        def:" maoji, mwnse gib",
                        rel:["dog","pussy","leopard"]
                    },
                    {
                        word:"Desert",
                        def:"1. A large area covered in sands 2. Sweet meal taken after main course",
                        rel:["Snow desert","Mountain","Desert strom"]
                    },
                    {
                        word:"Elephant",
                        def:"Mwider",
                        related:["Giraffe","Hippophotomus","Rhino"]
                    },
                    {
                        word: "apple",
                        def: "A round fruit with seed at its center",
                        rel:["mango","pear","guava"]
                    },
                    {
                        word:"baby",
                        def:"The young one of a human",
                        rel:["child","toodler","teen"]
                    },
                    {
                        word:"car",
                        def:"Transports people from one place to other",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"computer",
                        def:" An electronic device",
                        rel:["laptop","tablet","palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"Twi swbgra tampwi",
                        rel:["ant","butterfly","beetle"]
                    },
                    {
                        word:"Guitar",
                        def:"A musical instrument with strings",
                        related:["ukule","violin","tabla"]
                    },
                    {
                        word: "mango",
                        def: "taijou",
                        rel:["orange","pear","guava"]
                    },
                    {
                        word:"baby",
                        def:"Mansi ni pisa",
                        rel:["child","toodler","teen"]
                    },
                    {
                        word:"car",
                        def:"Transports people from one place to other",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"computer",
                        def:" An electronic device",
                        rel:["laptop","tablet","palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"an insect",
                        rel:["ant","butterfly","beetle"]
                    },
                    {
                        word:"Guitar",
                        def:"A musical instrument with strings",
                        related:["ukule","violin","tabla"]
                    },
                    {
                        word:"car",
                        def:"Transports people from one place to other",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"computer",
                        def:" An electronic device",
                        rel:["laptop","tablet","palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"an insect",
                        rel:["ant","butterfly","beetle"]
                    },
                    {
                        word:"Guitar",
                        def:"A musical instrument with strings",
                        related:["ukule","violin","tabla"]
                    },
                    {
                        word:"car",
                        def:"Transports people from one place to other",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"computer",
                        def:" An electronic device",
                        rel:["laptop","tablet","palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"an insect",
                        rel:["ant","butterfly","beetle"]
                    },
                    {
                        word:"Guitar",
                        def:"A musical instrument with strings",
                        related:["ukule","violin","tabla"]
                    },
                    {
                        word:"car",
                        def:"Transports people from one place to other",
                        rel:["bus", "Bicycle","truck"]
                    },
                    {
                        word:"computer",
                        def:" An electronic device",
                        rel:["laptop","tablet","palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"an insect",
                        rel:["ant","butterfly","beetle"]
                    },
                    {
                        word:"Guitar",
                        def:"A musical instrument with strings",
                        related:["ukule","violin","tabla"]
                    },
];

//Fill the dictionary with words.
init = function(){

    for (let i = 0; i<dictionary.length; i++){
        document.getElementById('word_list').innerHTML += "<li onClick='show(" + i +")'>" + dictionary[i].word+ "</li>";
     }
}

// call the init function when page loads.

init();


//Displays a word,Its defination and related words

function show(i){
    document.getElementById('wordText').innerHTML = dictionary[i].word;
    document.getElementById('defination').innerHTML = dictionary[i].def;

    let list = "";

    for( let j = 0; j< dictionary[i].rel.length; j++){
        list += "<li>" + dictionary[i].rel[j] + "</li>";
        document.getElementById('related').innerHTML = list;
    }

}
//Show first word in the dictionary when the page loads
show(0);


//search funtionality

function search(){
    query = document.getElementById('search').value;

    if (query == ""){
        return;
    }
    found = -1; //initialise found to false

    for (let i = 0; dictionary.length; i++){
        if (query == dictionary[i].word){
            found = i;
            break;
        }else{
            document.getElementById('wordText').innerHTML = "Word not found";
            document.getElementById('defination').innerHTML = "The word you entered is not in our dictionary";
            document.getElementById('related').innerHTML = "No related words";
        }
    }
    if(found >= 0){
        show(found);

    }
}