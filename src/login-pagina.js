import { chromium } from "playwright";


export async function logarNaPagina( page, url, login,senha){
    try {
     await pagina.goto(url)
    await pagina.fill('input[name="username"]', login);
    await pagina.fill('input[name="password"]', senha);
    await pagina.click('button[type="login"]');
    const logaDoComSucesso = await pagina.locator('text=Logado com sucesso');
    await logaDoComSucesso.waitFor();

     if (!logaDoComSucesso) {
        throw new Error('Não foi possível logar na página.');
      }

      console.log ('login bem sucedido')
    }catch (error){
        console.log (`erro ao fazer login !,${error.message}`);
    }
}

