const noparam = document.getElementById("noparam")
const param = document.getElementById("paramsactive")
const DNText = document.getElementById("DisplayNamePls")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

checkforparams()

function checkforparams(){
    var url = window.location.href;
    if (url.indexOf("?") > -1) {
        //Pararmeter gegeben
        const Name = urlParams.get('n')
        noparam.style.setProperty('padding-top', 'initial')
        noparam.style.visibility = 'hidden';
        console.log(Name)
        DNText.textContent = Name;

    }else{
        //keine Pararmeter
        noparam.style.visibility = 'visible'
        param.style.visibility = 'hidden'
    }
}