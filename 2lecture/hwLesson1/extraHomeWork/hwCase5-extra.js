var language = "de";
var languageChoices = "en" || "es" || "de" || "bg" || "‘缩写";
if (languageChoices) {
    } if (language === "en"   ) {
        console.log("Hello World!");
    } else if (language === "es" ) {
        console.log("Hola Mundo");
    } else if (language === "de" ) {
        console.log("Hallo Welt");
    } else if (language === "bg" ) {
        console.log("Здравей Свят");
    }else if (language === "‘缩写" ) {
        console.log("你好世界");
} else {
    console.log("Unknown command");
}


