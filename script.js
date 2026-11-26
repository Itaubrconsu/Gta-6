const plans=document.getElementById('plans'), checkout=document.getElementById('checkout'), toast=document.getElementById('toast');
const testCodes={
 '9.99':'00020126580014br.gov.bcb.pix0136f0579eb7-6bd2-4062-8a85-5e115ea20f4352040000530398654049.995802BR5925MIKAEL EDUARDO RODRIGUES 6009SAO PAULO62070503***6304AD85',
 '15.00':'00020126580014br.gov.bcb.pix0136f0579eb7-6bd2-4062-8a85-5e115ea20f43520400005303986540515.005802BR5925MIKAEL EDUARDO RODRIGUES 6009SAO PAULO62070503***6304433D',
 '59.99':'00020126580014br.gov.bcb.pix0136f0579eb7-6bd2-4062-8a85-5e115ea20f43520400005303986540559.005802BR5925MIKAEL EDUARDO RODRIGUES 6009SAO PAULO62070503***63044381'
};
function showPlans(){plans.classList.remove('hidden');checkout.classList.add('hidden')}
function closePlans(){plans.classList.add('hidden')}
function notify(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.getElementById('viewPlans').onclick=showPlans;document.getElementById('plansTop').onclick=showPlans;document.getElementById('closePlans').onclick=closePlans;
document.querySelectorAll('.plan').forEach(btn=>btn.addEventListener('click',()=>{
 const value=btn.dataset.plan;const display=value==='9.99'?'9,99':value==='15.00'?'15,00':'59,99';
 document.getElementById('amount').textContent='R$ '+display;
 document.getElementById('pixCode').value=testCodes[value];
 plans.classList.add('hidden');checkout.classList.remove('hidden');
 notify('Aviso: pedido de demonstração selecionado.');
}));
document.getElementById('continue').onclick=()=>notify('Cadastro/login não conectado nesta versão demonstrativa.');
// Avisos de atividade são apenas exemplos, sem alegar compras reais.
setTimeout(()=>notify('Atividade demonstrativa: alguém visualizou um pacote.'),6500);
document.getElementById('backPlans').onclick=showPlans;
document.getElementById('copyPix').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('pixCode').value);document.getElementById('copyStatus').textContent='Código de teste copiado!';notify('Código de teste copiado. Não efetue pagamento.')}catch(e){document.getElementById('pixCode').select();document.execCommand('copy');document.getElementById('copyStatus').textContent='Código de teste selecionado/copiar manualmente.'}};
