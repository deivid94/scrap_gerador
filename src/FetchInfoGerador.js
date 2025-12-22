


import { chromium } from "playwright";

export async function fetchInfoGerador(page) {
    const dadosDoGerador = await page.locator('.infotable2').isVisible
    const isVisible =  await dadosDoGerador

       if (!isVisible) {
        return "Os dados do gerador nao foram carregados corretamente";
    }
    const itemsGerador = page.locator('.infotable2').filter({hasText:'Engine'})
    const tabelasDoGerador = itemsGerador.locator('td tr')

 
    await page.waitForTimeout(2000)
    const dadosExtraidos = []

    const linhas =  await tabelasDoGerador.allInnerTexts()

    for (const  linha of linhas){
        const [chave, valor] = linha.split("\t")
        dadosExtraidos.push(chave, valor)
        
    }
    
    console.log (dadosExtraidos)    
    return dadosExtraidos
    
}
 