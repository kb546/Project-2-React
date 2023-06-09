//this is my function to get all of the data from the api!
const proxyServer = 
'http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
//https://people.rit.edu/dsbics/proxy/

//endpoint could be something like 'about/'
async function getData(endpoint){
    return fetch(`${proxyServer}${endpoint}`)
        .then((res) => res.json());
}

export default getData;