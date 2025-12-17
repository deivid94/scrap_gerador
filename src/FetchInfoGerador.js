// import chromiune from "playwright-chromium";

import { chromium } from "playwright";

export async function fetchInfoGerador(page) {
    const dadosGerador = [];
    const dadosDoGerador = page.locator('class[name="infotable"]')
    const infotable = dadosDoGerador.isVisible  
    

    if (!infotable) {
        return "Os dados do gerador nao foram carregados corretamente";
    }
    
    
   
    const dados = await page.locator('td.lable').evaluateAll(elementos => elementos.map(td => td.innerText));
    console.log(dados)

    for (dado of dados){
        console.log(dado)
    }
    }
  
    


