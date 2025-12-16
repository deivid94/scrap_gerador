import { chromium } from "playwright";




const url = "http://10.35.4.253"
const login = "infofull";
const senha = "simmais10";


async function acessarPaginaGerador() {

    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();
try {
    console.log (`acessando a pagina ${url}`);
    await page.goto(url, {waitUntil : "domcontentloaded"});

    const localDeLogin = await page.locator('input[name="username"]');
    const estaVisivel = await localDeLogin.isVisible();
    if (estaVisivel){
        console.log ('pagina carregada, login visivel');
    } else {
        console.log ("Faha em carregar a pagina");
    }

 
}catch(error){
    console.log(error.message);
} finally{
    await browser.close();
}   
    }



console.log (acessarPaginaGerador())