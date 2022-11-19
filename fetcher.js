const fetch = require("node-fetch");

// Consigue el JSON de una API //
async function getAPIjson(APIurl)
{
    try
    {
        const response = await fetch(APIurl);
        const json = await response.json();
        // console.log("JSON obtenido:\n", json);
        
        return json;
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = { getAPIjson };