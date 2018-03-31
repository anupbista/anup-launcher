var addBtn = document.getElementById('add-link-btn');
var submitBtn = document.getElementById('submitBtn');
var removeBtn = document.getElementById('remove-link-btn');

addBtn.addEventListener('click',function(){
    var addContainer = document.getElementById('add-container'); 
    if (addContainer.style.display === "none") {
        addContainer.style.display = "block";
    } else {
        addContainer.style.display = "none";
    }
});




var lastID = localStorage.getItem( 'lastID' );
 
function initializeID() {
    var lastID = localStorage.getItem( 'lastID' );
    if ( lastID == null ) {
        location.reload(true);
        localStorage.setItem( 'lastID',0 );
    }
}

initializeID();

var uniqueID = lastID;

loadHistory(uniqueID);


submitBtn.addEventListener('click',function(){
    const favicon_url = "https://plus.google.com/_/favicon?domain_url=";
    var app_url = document.getElementById('link').value;
    var logoUrl = favicon_url+app_url;
    console.log(logoUrl);
    if ( app_url=="" || logoUrl=="" ){
        alert("All Fields must be filled!!!");
    }
    else{

        var formSaveID = uniqueID.toString();

        var links = {};
            links.id = uniqueID;
            links.app_url = app_url;
            links.logoUrl = logoUrl;

        localStorage.setItem( formSaveID, JSON.stringify( links ) );
       
    uniqueID.toString();
        var history =  JSON.parse(localStorage.getItem(uniqueID));

            app_url = history.app_url;
            logoUrl = history.logoUrl;
            id = history.id;

        var flex = document.createElement("a");
        var flexlogo = document.createElement("img");
        flexlogo.setAttribute("src",logoUrl);
        flex.setAttribute("id","id-"+uniqueID);
        flex.setAttribute("target","_blank");      
        flex.setAttribute("href",app_url);                            
        flex.classList.add('flex');
        flex.appendChild(flexlogo);
        document.getElementById("flex-container").appendChild(flex);
        

        uniqueID++;
        localStorage.removeItem( 'lastID' );
        localStorage.setItem( 'lastID', uniqueID );
        document.getElementById("add-form").reset();

        var flexContainer = document.getElementById("flex-container").children;
        for(var i=0; i<flexContainer.length; i++) {
            flexContainer[i].classList.remove("remove-icon");           
        }  

    }
});

function loadHistory(uniqueID) {
    formSaveID = 0;
    var history =  JSON.parse(localStorage.getItem(formSaveID.toString()));
    if(history !== null){
    while (formSaveID<=uniqueID-1) {
        formSaveID.toString();     
        var history =  JSON.parse(localStorage.getItem(formSaveID.toString()));
            app_url = history.app_url;
            logoUrl = history.logoUrl;
            id = history.id;


        var flex = document.createElement("a");
        var flexlogo = document.createElement("img");
        flexlogo.setAttribute("src",logoUrl);
        flex.setAttribute("id","id-"+id);
        flex.setAttribute("target","_blank");      
        flex.setAttribute("href",app_url);                            
        flex.classList.add('flex');
        flex.appendChild(flexlogo);
        document.getElementById("flex-container").appendChild(flex);

        formSaveID++;
    }}
  }

//   removeBtn.addEventListener('click',function(){
//     var flexContainer = document.getElementById("flex-container").children; 

//         for(var i=0; i<flexContainer.length; i++) {
//             flexContainer[i].classList.toggle("remove-icon");         
//         }
//   });