window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://whathandle-functionapp.azurewebsites.net/api/GetResumeCounter?code=U77qfSeG7XLSwZR6O0_5PN9M5kQ8zdio4dBo_bJuHUkIAzFubbOcjQ==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
