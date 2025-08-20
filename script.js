// const api=zenquotes.io/api/quotes
const newquotetext=document.getElementsByClassName("quote-text")[0];
const newquoteauther=document.getElementsByClassName("quote-auther")[0];
const lindein="https://www.linkedin.com/feed/?shareActive=true&text="
let quotes=[];
async function getQuote(){
        const apiurl="https://zenquotes.io/api/quotes";
        const proxy="https://api.allorigins.win/raw?url=";
        try{
                const response=await fetch(proxy+apiurl);
                quotes=await response.json();
                
                showNewQuotes();

        }
        catch(error){
            console.error("Error fetching quotes:", error);
        }
}
//onclick
function showNewQuotes(){
    if (!quotes.length) return; 
    let quote;
    do{
    const randomnumber=Math.floor(Math.random()*quotes.length);
    quote=quotes[randomnumber];
    
    }while(!quote.q);
    newquotetext.textContent='"' +quote.q + '"';
    newquoteauther.textContent=quote.a ? '-'+ quote.a : 'Unknown';
    newquotetext.classList.remove("long-quote", "short-quote");


    if (quote.q.length > 50) {
        newquotetext.classList.add("long-quote");
    } else {
        newquotetext.classList.add("short-quote");
    }

}
function OpenPopUp(){
        const currentquote=newquotetext.textContent;
        const currentauther=newquoteauther.textContent;
        const postContent = currentquote + "\n" + currentauther;
        const shareUrl = lindein + encodeURIComponent(postContent);
   
        window.open(shareUrl, "_blank", "noopener;noreferrer");


}

//onload
getQuote();

