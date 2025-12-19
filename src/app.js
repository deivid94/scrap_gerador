import { chromium } from "playwright";
import { fetchInfoGerador } from "./FetchInfoGerador.js";




const url = "http://10.35.4.253"
const username = "infofull";
const senha = "simmais10";


async function acessarPaginaGerador() {

    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
try {
    console.log (`acessando a pagina ${url}`);
    await page.goto(url, {waitUntil : "networkidle0"});

    const localDeLogin = page.locator('input[name="username"]');
    const localDeSenha = page.locator('input[name="password"]');
    const botaoLogon = page.locator('input[name="login"]');
    

    
    await localDeLogin.fill(username);
    await localDeSenha.fill(senha);
    await page.waitForSelector('input[name="login"]');
    await page.waitForTimeout(2000)
    await botaoLogon.click();
    


    
    const paginaCarregada = await page.evaluate(() => document.readyState === 'loading');
    const loginSucesso = page.locator('div[id="logindetail"]')?.isVisible

     if (!paginaCarregada && !loginSucesso){
        fetchInfoGerador(page)
     }
     
  fetchInfoGerador(page)

//
}catch(error){
    console.log(error.message);
} finally{
    //await browser.close();
}   
    }
await acessarPaginaGerador()
