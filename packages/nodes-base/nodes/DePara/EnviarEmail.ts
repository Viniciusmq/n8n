import {
    IExecuteFunctions,
    ILoadOptionsFunctions,

} from 'n8n-core';

import { createTransport } from 'nodemailer';
import SMTPTransport = require('nodemailer/lib/smtp-transport');

export async function enviarEmail(this: IExecuteFunctions | ILoadOptionsFunctions, toEmail: string, Equivalente: string, valorOrigem: string,fluxo:string, dadosEnvio: string,) {

    const subject = `ATENÇÃO: Equevalência não encontrada para: ${Equivalente} e Fluxo: ${fluxo}`;
    const html = `<b>Detalhes do problema: </b>\n<br />\n<br />\n<b>Equivalencia:</b> ${Equivalente}\n<br />\n<b>Fluxo:</b> ${fluxo}\n<br />\n<b>Valor de Origem:</b> ${valorOrigem}\n<br /><br />\n<b>Dados do Envio:</b> [${dadosEnvio}]\n<br /><br />\n<b>Favor verificar o de/Para na gestão de equivalência da plataforma e integrar novamente o dado.</b>` 



    const connectionOptions: SMTPTransport.Options = {
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
    };
    4
    connectionOptions.auth = {
        user: 'ipaas-noreply@hubconexa.com',
        pass: 'Dox49807'
    };

    const transporter = createTransport(connectionOptions);

    const mailOptions = {
        from: 'ipaas-noreply@hubconexa.com',
        to: toEmail,
        cc: 'elismar.flavio@hubconexa.com',
        subject,
        html,
    };

    const info = await transporter.sendMail(mailOptions);
}

