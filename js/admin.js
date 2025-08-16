  function handleSearch(){
        const text=document.body.innerHTML;
        const searchTerm=document.getElementById("searchInput").value.trim();

        //remove previous highlights
        const cleanText=text.replace(/<mark>|<\/mark>/g, "");
            document.body.innerHTML=cleanText;
            if(searchTerm==="")return;
            //Highlight new matches
              const regex = new RegExp(`(${searchTerm})`, "gi");
         document.body.innerHTML = document.body.innerHTML.replace(regex, "<mark>$1</mark>");
    }
// toggle
