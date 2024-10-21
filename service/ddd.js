export const buscarDDD = async (ddd)=>{
    let urlAPI = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
    try {
        const resposta = await fetch(urlAPI,{
            method: "GET"
        })
        if(!resposta.ok){
            throw new Error("Falha no fetch");
        }
        return await resposta.json();
    } catch (error) {
        
    }
}