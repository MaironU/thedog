
export function getXML(endpoint){
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", endpoint, true);
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(JSON.parse(xhttp.responseText))
                resolve(JSON.parse(xhttp.responseText))
            }
        };
        xhttp.setRequestHeader("x-api-key","f9a72429-8573-405a-b637- bb54cca21efd");
        xhttp.send();
    })
}





