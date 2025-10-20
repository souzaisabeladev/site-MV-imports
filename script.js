// ---- Menu mobile ----
// Função que percorre uma seção e aplica o caminho da imagem baseado na ordem numérica
function mapearImagensPorSecao(idSecao, subpasta) {
    // 1. Seleciona todas as tags <img> DENTRO da seção específica
    const imagens = document.querySelectorAll(`#${idSecao} .card img`);
    
    // 2. Define o caminho base (ajuste 'img/' se a pasta raiz for outra)
    const caminhoBase = `img/${subpasta}/`; 
    
    // 3. Loop para percorrer cada imagem e inserir o src correto
    imagens.forEach((img, index) => {
        // O nome do arquivo é o índice + 1 (1.jpg, 2.jpg, 3.jpg, etc.)
        const numeroFoto = index + 1;
        
        // Assumindo que a extensão é .jpg
        const nomeArquivo = `${numeroFoto}.jpg`; 
        
        // Define o src completo (ex: img/celulares/1.jpg)
        img.src = caminhoBase + nomeArquivo;
    });
    
    // Confirma no console que a seção foi atualizada
    console.log(`Seção #${idSecao} atualizada com ${imagens.length} imagens da pasta ${caminhoBase}`);
}

// ---------------------------------------------------------------------
// 4. CHAME A FUNÇÃO PARA CADA SEÇÃO DO SEU CATÁLOGO
//    O segundo argumento ('nome-da-pasta') DEVE ser o nome EXATO da pasta
//    dentro de 'img/' onde as fotos estão (1.jpg, 2.jpg, etc.).
// ---------------------------------------------------------------------

// Seção: Celulares (ID no HTML: #celulares)
mapearImagensPorSecao('celulares', 'celulares'); 

// Seção: Perfumes Árabes (ID no HTML: #perfumes-arabes)
// Você deve ajustar 'nome-da-pasta-perfumes' para o nome exato da sua pasta
mapearImagensPorSecao('perfumes-arabes', 'perfumes-arabes'); 

// Seção: Body Splash (ID no HTML: #body-splash)
// Você deve ajustar 'nome-da-pasta-bodysplash'
mapearImagensPorSecao('body-splash', 'body-splash'); 

// Adicione aqui as outras seções (Decants, Outros, etc.) conforme a estrutura das suas pastas
// mapearImagensPorSecao('decants', 'decants'); 
// mapearImagensPorSecao('outros', 'outros');