const translate = require("@iamtraction/google-translate");
let { getAPIjson } = require("./fetcher");

// Regresa el mensaje de un ajolotito sabio //
async function ajolotitoWisdomQuoe()
{
    /// Regresa una frase inspiracional aleatoria; [String quoe].
    let ajolotitoQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=wisdom");
    let ajolotitoQuoe = "\"" + ajolotitoQuoeJSON.content + "\"";
    ajolotitoQuoe = await translate(ajolotitoQuoe, {to: "es"});
    
    return ajolotitoQuoe.text;
}
async function ajolotitoWisdomPhoto()
{
    /// Regresa la foto de un ajolotito aleatorio; [String  url].
    try
    {
        let ajolotitoPhotoJSON = await getAPIjson("https://axoltlapi.herokuapp.com/");
        let ajolotitoPhoto = ajolotitoPhotoJSON.url;

        return ajolotitoPhoto;
    }
    catch
    {
        return "Imágen no encontrada :("
    }
}

async function getAjolotito()
{
    /// Regresa un JSON con la información necesaria del ajolotito:
    let ajolotito =
    {
        "queue": await ajolotitoWisdomQuoe(),
        "image": await ajolotitoWisdomPhoto()
    };
    return ajolotito;
}

module.exports = { ajolotitoWisdomQuoe, ajolotitoWisdomPhoto, getAjolotito };