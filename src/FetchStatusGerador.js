import { fetchInfoGerador } from './FetchInfoGerador.js';

export async function fetchStatusGerador(page) {
  const dadosDoGerador = await fetchInfoGerador(page);

  const statusOnOffAutoGerador = await page.locator('.controls');
  const isVisible = await statusOnOffAutoGerador.isVisible;

  if (!isVisible) {
    return 'OS DADOS DO GERADOR NAO FORAM CARREGADOS CORRETAMENTE';
    //
  }

  await page.waitForTimeout(2000);
  const dataEngine = {};

  const engineSpeed = 'Engine Speed';
  const rpmCompare = '100RPM';
  for (let i = 0; i < dadosDoGerador.length; i += 2) {
    dataEngine[dadosDoGerador[i]] = dadosDoGerador[i + 1];
    if (dataEngine[dadosDoGerador[i]] === '0RPM') {
      const speedRPM = dataEngine[engineSpeed];
      if (speedRPM > rpmCompare) {
        return (
          'O Gerador esta ligado e a velocidade de rotacao e de',
          speedRPM
        );
      } else {
        return (
          'O gerador nao esta ligado e a velocidade de rotacao e de',
          speedRPM
        );
      }
    }
  }
}
