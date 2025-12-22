import { chromium } from "playwright";

export async function   fetchStatusGerador(page) {  

    const statusOnOffAutoGerador = await  page.locator('controls')
    const isVisible = await statusOnOffAutoGerador.isVisible()

    
     if (!isVisible){

        return "Os dados do gerador nao foram carregados corretamente";
     }

    const LEDOn = await statusOnOffAutoGerador.locator('div').filter({hasText:"gobutton"}).isVisible
    const LEDOff = await statusOnOffAutoGerador.locator('div').filter({hasText:"autobutton"}).isVisible
    const LEDAuto = await statusOnOffAutoGerador.locator('div').filter({hasText:"offbutton"}).isVisible

     console,log ("Estou, no fetchStatusGerador: ")
     console.log (LEDOn, LEDOff, LEDAuto)

     
    
}