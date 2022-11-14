const nftSection = document.getElementById("colecciones");

const nft = [
    {
        title: "Cursed Creatures",
        baner: "images/baner_1.jpg",
        url: "https://foundation.app/@aquamariart/cursed-creatures/",
        desc: "lorem inpusm desko lorem lorem lorem lorem",
        id: 1
    },
    {
        title: "Colored Tears",
        baner: "images/baner_1.jpg",
        url: "https://foundation.app/@aquamariart/colored-tears/",
        desc: "lorem inpusm desko lorem lorem lorem lorem",
        id: 1
    }
]



function createCollections(){
    let cardContent = document.createElement("div");
    cardContent.className = "card-content";
    nft.forEach((item)=> {
        let nftCard = document.createElement("div");
        nftCard.className = "nft-card";
        nftCard.innerHTML = `
        <figure class="baner-content">
            <img class="baner" alt="Imagen de coleccion" src=${item.baner}></img>
        </figure>
        <p class="colection-desc">${item.desc}</p>
        <nav><a href="${item.url}" rel="nofollow" target="_blank"><buttom class="btn-market"><ion-icon name="eye"></ion-icon>Ver</buttom></a></nav>
        `;
        cardContent.append(nftCard);
    })
    nftSection.append(cardContent);
}


