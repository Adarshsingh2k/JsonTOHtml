const rankBody= document.querySelector("#rank-table > tbody");

//console.log(rankBody);

function loadRanking (){
    const request= new XMLHttpRequest();

    request.open("get","data/ranking.json");

    request.onload= ()=>{
        try{
            const json= JSON.parse(request.responseText);
            populate(json);
        }
        catch(e){
            console.warn("Error in loading ranks :)");
        }

    };

    request.send();


}
function chkboxcolor(res){
    if(res.checked==true){
        res.parentNode.style.backgroundColor='yellow';
    }
    else{
        res.parentNode.style.backgroundColor='';
    }
}


function populate(json){
    console.log(json);

    // First lets clearthe existing Data in the table

    while(rankBody.firstChild){
        rankBody.removeChild(rankBody.firstChild);
    }

    // Now populate the table

    json.forEach((row) => {
        console.log(row);

        const tr=document.createElement("tr");
         
        //adding check box to each row

        var chk = document.createElement('input');
            chk.setAttribute('type', 'checkbox');
            chk.setAttribute('onClick','chkboxcolor(this)');
            tr.appendChild(chk);


        row.forEach((cell)=>{
            console.log(cell);

           
            const td=document.createElement("td");
            //td.appendChild(chk);
            td.textContent=cell;
            
            tr.appendChild(td);

        });

        rankBody.appendChild(tr);
    });

}

document.addEventListener("DOMContentLoaded", ()=>{
    loadRanking();
});