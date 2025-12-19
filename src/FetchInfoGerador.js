


import { chromium } from "playwright";

export async function fetchInfoGerador(page) {
    const dadosDoGerador = await page.locator('.infotable2').isVisible
    const isVisible =  await dadosDoGerador

       if (!isVisible) {
        return "Os dados do gerador nao foram carregados corretamente";
    }
    const itemsGerador = page.locator('.infotable2').filter({hasText:'Engine'})
    const tabelasDoGerador = itemsGerador.locator('td tr')

    console.log(await itemsGerador.highlight()); 
    console.log (await tabelasDoGerador.highlight())

    await page.waitForTimeout(2000)

    const linhas =  await tabelasDoGerador.allInnerTexts()

    for (const  linha of linhas){
        const DadosExtraidor = []

        const [chave, valor] = linha.split(':')
        DadosExtraidor.push(chave, valor)
        console.log(DadosExtraidor)
    }
    
    


}
