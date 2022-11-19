const translate = require("@iamtraction/google-translate");
let { getAPIjson } = require("./fetcher");

// Regresa el mensaje de un michito sabio //
async function michiWisdomQuoe()
{
    /// Regresa una frase famosa aleatoria; [String quoe]:
    let michiQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=famous-quotes");
    let michiQuoe = "\"" + michiQuoeJSON.content + "\"";
    michiQuoe = await translate(michiQuoe, {to: "es"});

    return michiQuoe.text;
}

async function michiWisdomPhoto()
{
    /// Regresa la foto de un gatito aleatorio; [String  url]:
    let michiPhotoJSON = await getAPIjson("https://api.thecatapi.com/v1/images/search");
    let michiPhoto = michiPhotoJSON[0].url;

    return michiPhoto;
}

async function getMichi()
{
    /// Regresa un JSON con la información necesaria del gatito:
    let michi =
    {
        "queue": await michiWisdomQuoe(),
        "image": await michiWisdomPhoto()
    };
    return michi;
}

module.exports = { michiWisdomQuoe, michiWisdomPhoto, getMichi };