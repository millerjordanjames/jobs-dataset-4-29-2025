const job_title = document.getElementsByClassName("base-search-card__title");
const job_company = document.getElementsByClassName("base-search-card__subtitle");
const job_location = document.getElementsByClassName("job-search-card__location");
const job_url = document.getElementsByClassName("base-card__full-link");


let csvContent = "data:text/csv;charset=utf-8,";


function getElementData(elements,type){
    for(i = 0; i < elements.length; i++){
        let text = "";
        if(type == "textContent"){
            text = elements[i].textContent.trimStart().trimEnd();
        }
        else if(type == "href"){
            text = elements[i].getAttribute("href");
        }
        csvContent += text + "\n";
    }
}

getElementData(job_title,"textContent");
getElementData(job_company,"textContent");
getElementData(job_location,"textContent");
getElementData(job_url,"href");

//confirm("Scrape complete - Continuing to CSV download.");

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);