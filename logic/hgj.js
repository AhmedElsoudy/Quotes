var quotes = [
    {
        image : "image/stock-photo-gibran-khalil-gibran-born-january-april-was-a-lebanese-american-writer-1612287037.jpg",
        quote:"“Life without liberty is like a body without spirit.”",
        author:"_Khalil Gibran"
    },
    {
        image : "image/31_herbert_hoover.webp",
        quote:"“Freedom is the open window through which pours the sunlight of the human spirit and human dignity.”",
        author:"_Herbert Hoover"
    },
    {
        image : "image/charlotte bronte.jpg",
        quote:"“I am no bird; and no net ensnares me; I am a free human being with an independent will.”",
        author:"_Jane Eyre"
    },
    {
        image : "image/george martin.jpg",
        quote:"“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”",
        author:"_George R.R. Martin"
    },
    {
        image : "image/cal-newport-headshot1-web.jpg",
        quote:"“If you don’t produce, you won’t thrive—no matter how skilled or talented you are.”",
        author:"_Cal Newport"
    },
    {
        image : "image/Stephen-Covey.jpg",
        quote:"“The key is not to prioritize what's on your schedule, but to schedule your priorities.”",
        author:"_Stephen Covey"
    },
    {
        image : "image/MHUJj15g_400x400.jpeg",
        quote:"“The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.”",
        author:"_Robert T. Kiyosaki"
    }
]



var newIndex =0;
var lastIndex
var template = []
function chanQuote(){
    if(template.length == quotes.length){
        template = []
    }
    do{
        newIndex =Math.round( Math.random() * (quotes.length - 1))

    }while(newIndex == lastIndex || template.includes(newIndex) == true )
    lastIndex = newIndex
    template.push(newIndex)
    console.log(newIndex)
    var imag = document.getElementById('photo'); 
    imag.src = quotes[newIndex].image
    imag.innerHTML = imag
    document.getElementById("quote").innerHTML = quotes[newIndex].quote
    document.getElementById("author").innerHTML = quotes[newIndex].author

}


var imag = document.getElementById('photo'); 
imag.src = quotes[0].image
imag.innerHTML = imag
document.getElementById("quote").innerHTML = quotes[0].quote
document.getElementById("author").innerHTML = quotes[0].author






