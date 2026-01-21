import { exec } from 'child_process';


async function enviarDadosZabbbix(FetchInfoGerador, FetchStatusGerador) {
        const zabbix = "192.168.1.100";
        const hostNoZabbix = "info_geradores";
        const chaveItem = "scrap.gerador.dados";

        const converDados = JSON.stringify (await FetchInfoGerador + " " + await FetchStatusGerador);
        console.log (typeof(converDados))

        const comando = `zabbix_sender -z ${zabbix} -s ${hostNoZabbix} -k ${chaveItem} -o ${converDados}`;

        exec (comando, (error, stdout,) => {
            if (error) {
                console.error(`Erro ao enviar dados para o Zabbix: ${error.message}`);
                return
            } 

            console.log(`Dados enviados para o Zabbix com sucesso! ${stdout.trim()}`);
        });

}

export default enviarDadosZabbbix