var Base={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",setD:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},getD:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
/*
 * Variaveis
 */

// Nome do produto, sempre sem espaÃ§os e caracteres especiais
var nomeProduto = 'Keto 30';

// Menu acompanhar a pÃ¡gina. Sim - 1, NÃ£o - 0
var menuPage = '0';

// Bloquear botÃ£o direito, Ctrl+s, Ctrl+u, F12. Sim - 1, NÃ£o - 0
var blockAll = '0';

/*NOTIFICACOES*/
// 1 - usar, 0 - nÃ£o usar
var usarNotificacoes = '1';
// link do site + #ofertas
var linkComprar = '#comprar';
// lado da tela para aparecer. Direita - right, Esquerda - left
var ladoNotificacoes = 'top-right';

var acessoC = ['QWxpY2U=','TWlndWVs','U29waGlh','QXJ0aHVy','SGVsZW5h','QmVuYXJkbw==','VmFsZW50aW5h','SGVpdG9y','TGF1cmE=','RGF2aQ==','SXNhYmVsbGE=','TG9yZW56bw==','TWFudWVsYQ==','VGjDqW8=','SsO6bGlh','UGVkcm8=','SGVsb8Otc2E=','R2FicmllbA==','THVpemE=','RW56bw==','TWFyaWEgTHVpemE=','TWF0aGV1cw==','TG9yZW5h','THVjYXM=','TMOtdmlh','QmVuamFtaW4=','R2lvdmFubmE=','Tmljb2xhcw==','TWFyaWEgRWR1YXJkYQ==','R3VpbGhlcm1l','QmVhdHJpeg==','UmFmYWVs','TWFyaWEgQ2xhcmE=','Sm9hcXVpbQ==','Q2Vjw61saWE=','U2FtdWVs','RWxvw6E=','RW56byBHYWJyaWVs','TGFyYQ==','Sm/Do28gTWlndWVs','TWFyaWEgSsO6bGlh','SGVucmlxdWU=','SXNhZG9yYQ==','R3VzdGF2bw==','TWFyaWFuYQ==','TXVyaWxv','RW1hbnVlbGx5','UGVkcm8gSGVucmlxdWU=','QW5hIErDumxpYQ==','UGlldHJv','QW5hIEx1aXph','THVjY2E=','QW5hIENsYXJh','RmVsaXBl','TWVsaXNzYQ==','Sm/Do28gUGVkcm8=','WWFzbWlu','SXNhYWM=','TWFyaWEgQWxpY2U=','QmVuw61jaW8=','SXNhYmVsbHk=','RGFuaWVs','TGF2w61uaWE=','QW50aG9ueQ==','RXN0aGVy','TGVvbmFyZG8=','U2FyYWg=','RGF2aSBMdWNjYQ==','RWxpc2E=','QnJ5YW4=','QW50b25lbGxh','RWR1YXJkbw==','UmFmYWVsYQ==','Sm/Do28gTHVjYXM=','TWFyaWEgQ2Vjw61saWE=','VmljdG9y','TGl6','Sm/Do28=','TWFyaW5h','Q2F1w6M=','Tmljb2xl','QW50w7RuaW8=','TWFpdMOq','VmljZW50ZQ==','SXNpcw==','Q2FsZWI=','QWzDrWNpYQ==','R2FlbA==','THVuYQ==','QmVudG8=','UmViZWNh','Q2Fpbw==','QWdhdGhh','RW1hbnVlbA==','TGV0w61jaWE=','Vmluw61jaXVz','TWFyaWE=','Sm/Do28gR3VpbGhlcm1l','R2FicmllbGE=','RGF2aSBMdWNhcw==','QW5hIExhdXJh','Tm9haA==','Q2F0YXJpbmE=','Sm/Do28gR2FicmllbA==','Q2xhcmE=','Sm/Do28gVmljdG9y','QW5hIEJlYXRyaXo=','THVpeiBNaWd1ZWw=','Vml0w7NyaWE=','RnJhbmNpc2Nv','T2zDrXZpYQ==','S2FpcXVl','TWFyaWEgRmVuYW5kYQ==','T3TDoXZpbw==','RW1pbGx5','QXVndXN0bw==','TWFyaWEgVmFsZW50aW5h','TGV2aQ==','TWlsZW5h','WXVyaQ==','TWFyaWEgSGVsZW5h','RW5yaWNv','QmlhbmNh','VGhpYWdv','TGFyaXNzYQ==','SWFu','TWlyZWxsYQ==','VmljdG9yIEh1Z28=','TWFyaWEgRmxvcg==','VGhvbWFz','QWxsYW5h','SGVucnk=','QW5hIFNvcGhpYQ==','THVpeiBGZWxpcGU=','Q2xhcmljZQ==','Unlhbg==','UGlldHJh','QXJ0aHVyIE1pZ3VlbA==','TWFyaWEgVml0w7NyaWE=','RGF2aSBMdWl6','TWF5YQ==','TmF0aGFu','TGHDrXM=','UGVkcm8gTHVjYXM=','QXlsYQ==','RGF2aSBNaWd1ZWw=','QW5hIEzDrXZpYQ==','UmF1bA==','RWR1YXJkYQ==','UGVkcm8gTWlndWVs','THVpeg==','SGVucmlxdWU=','U3RlbGxh','THVhbg==','QW5h','RXJpY2s=','R2FicmllbGx5','TWFydGlu','U29waGll','QnJ1bm8=','Q2Fyb2xpbmE=','Um9kcmlnbw==','TWFyaWEgTGF1cmE=','THVpeiBHdXN0YXZv','TWFyaWEgSGVsb8Otc2E=','QXJ0aHVyIEdhYnJpZWw=','TWFyaWEgU29waGlh','QnJlbm8=','RmVuYW5kYQ==','S2F1w6o=','TWFsdQ==','RW56byBNaWd1ZWw=','QW5hbHU=','RmVuYW5kbw==','QW1hbmRh','QXJ0aHVyIEhlbnJpcXVl','QXVyb3Jh','THVpeiBPdMOhdmlv','TWFyaWEgSXNpcw==','Q2FybG9zIEVkdWFyZG8=','TG91aXNl','VG9tw6Fz','SGVsb2lzZQ==','THVjYXM=','R2FicmllbA==','QW5hIFZpdMOzcmlh','QW5kcsOp','QW5hIENlY8OtbGlh','Sm9zw6k=','QW5hIExpeg==','WWFnbw==','Sm9hbmE=','RGFuaWxv','THVhbmE=','QW50aG9ueSBHYWJyaWVs','QW50w7RuaWE=','UnVhbg==','SXNhYmVs','TWlndWVsIEhlbnJpcXVl','QnJ1bmE=','T2xpdmVy'];

/*CONTADOR*/
// Valor padrao de 0 dias 2 horas 30 minutos 0 segundos
var day = 0,
    hour = 0,
    minute = 59,
    seconds = 59;
// Manter valores do contador ao recarregar a pagina. Sim - 1, NÃ£o - 0
var everGreen = '1';
// Ao contador terminar, exibir uma mensagem. Sim - 1, NÃ£o - 0
var usarMsgContador = '1',
    msgContador = 'PromoÃ§Ã£o Expirada!';
/*CONTADOR*/

// Direcionar para https. Sim - 1, NÃ£o - 0
var https = '0',
    linkHttps = '';

// Redirecionamento ao clicar em voltar. Sim - 1, NÃ£o - 0
var redirect = '0',
    linkAtual = '',
    linkRedirect = '';

// Redirecionamento ao confirmar o nao fechamento da pagina. Sim - 1, NÃ£o - 0
var redirectClose = '0',
    redirectLinkClose = '';

var timerT = 1000;
$(document).ready(function(){
    /*Liberar restante da pÃ¡gina*/
    setTimeout(function(){
        $('#hiddened').show();
    }, 600000);

    $('#jsPerguntas .perg').click(function(e){
        $('#jsPerguntas .resposta.ativo').slideUp();
        if($('#jsPerguntas .resposta.ativo').is($(this).next('.resposta'))){
            $('#jsPerguntas .resposta.ativo').removeClass('ativo');
            $('#jsPerguntas .perg.ativo').removeClass('ativo');
        } else {
            $('#jsPerguntas .resposta.ativo').removeClass('ativo');
            $('#jsPerguntas .perg.ativo').removeClass('ativo');
            $(this).next('.resposta').slideDown();
            $(this).next('.resposta').addClass('ativo');
            $(this).addClass('ativo');
        }
    });
   /* $('.topo #playVideo').click(function(){
        $('.topo #playVideo').hide();
        $('.topo #videoIframe').css('display','block');
        $('.topo #videoIframe').attr('src', 'https://player.vimeo.com/video/453396185?autoplay=1&title=0&byline=0&portrait=0');
    });

    if(iOS()){
        $('.topo #playVideo').hide();
        $('.topo #videoIframe').css('display','block');
        $('.topo #videoIframe').attr('src', 'https://player.vimeo.com/video/453396185?autoplay=1&title=0&byline=0&portrait=0');
    }
    */

    var qtd = Math.floor((Math.random() * 20) + 1);
    if (qtd < 5)qtd = 5;
    acessoC = shuffle(acessoC);
    if (usarNotificacoes == '1') {
        if ($('.test-mobile').css('display') == 'block') {
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Clique e garanta o seu tambÃ©m!</a>', qtd + ' novas pessoas compraram nos Ãºltimos 30min.', {
                    timeOut: 10000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Aproveite o desconto!</a>', Base.getD(acessoC[0]) + ' acabou de comprar.', {
                    timeOut: 15000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*20);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Falta pouco para essa oferta acabar!</a>', Base.getD(acessoC[1]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*57);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Clique e garanta o seu tambÃ©m!</a>', Base.getD(acessoC[2]) + ' acabou de comprar.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*100);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Garanta o seu tambÃ©m!</a>', Base.getD(acessoC[3]) + ' acabou de comprar ' + nomeProduto + ' na promoÃ§Ã£o.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*200);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Corra e aproveite a oferta!</a>', Base.getD(acessoC[4]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*300);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Esse preÃ§o Ã© por tempo limitado!</a>', Base.getD(acessoC[5]) + ' estÃ¡ comprando agora ' + nomeProduto + '', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*350);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Falta pouco para essa oferta acabar!</a>', Base.getD(acessoC[6]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*450);
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Corra e aproveite a oferta!</a>', qtd + 9 + ' novas pessoas compraram nos Ãºltimos 30min.', {
                    timeOut: 20000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*600);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Clique e garanta o seu tambÃ©m!</a>', Base.getD(acessoC[7]) + ' acabou de comprar ' + nomeProduto + ' na oferta.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*620);
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Corra e aproveite a oferta!</a>', qtd + 11 + ' novas pessoas compraram nos Ãºltimos 30min.', {
                    timeOut: 20000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*1200)
        }
    }
});

function openModalKit(kit) {
    $(".modal-kit-" + kit).addClass("is-active");
}

function closeModalKit(kit) {
    $(".modal-kit-" + kit).removeClass("is-active");
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue
    }
    return array
}

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}