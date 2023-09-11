const tid=document.getElementById("textid");
const gid=document.getElementById("generateid");
gid.addEventListener(
    "click",
    getrandomcolor=()=>{
        const randomNumber=Math.floor(Math.random()*1677215);
        const randomCode="#"+randomNumber.toString(16);
        document.body.style.backgroundColor=randomCode;
        tid.value=randomCode;
        console.log(randomCode)
    }
);
const toastid=document.getElementById('toastmessageid');
const cid=document.getElementById("copyid");
cid.addEventListener(
    "click", 
    copycode=()=>{
        codevalue=tid.value;
        navigator.clipboard.writeText(codevalue);
        toastid.style.display="flex";
    }
);
const closebtnid=document.getElementById('closebuttonid');
closebtnid.addEventListener(
    'click',
    close=()=>{
        toastid.style.display="none";
    }
)