// ESERCIZIO 2
// Replicare le card in dinamica con JavaScript, come visto a lezione.
// Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS.

// // artista:
// album:
// ano:
// prezzo:
let elenco = document.querySelector('.elenco')
let wrapper = document.querySelector('.wrapper')
let lista = [
    {artist: 'Cleo Sol', 
    album: 'Gold', 
    year: '2023', 
    price: '€29,90', 
    img: 'src="https://i.discogs.com/S6RwAlD2In522YxalDZyoKALK2yQsFOpQ-voBNZLYUQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4NTUy/MDQyLTE2OTY5Mzc1/NzgtMTI1Mi5qcGVn.jpeg"'},

    {artist: 'Hiromi', 
    album: 'Sonicwonderland', 
    year: '2023', 
    price: '€34,90', 
    img: 'src="https://i.discogs.com/OSeQs5CKS7bb6EqRAPITWqcdVGyfanh37lKbN85EuyQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MTc0/NDU5LTE2OTM4OTMy/OTQtNDQ0OS5qcGVn.jpeg"'},

    {artist: 'Svaneborg Kardyb', 
    album: 'Over Tage', 
    year: '2022', 
    price: '€32,90', 
    img: 'src="https://i.discogs.com/m7nLEL6i_-SytyPwK2KIQpZw4HEIOKJLuZCaxm9ZXOM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjAw/MzY2LTE2ODkxMDY2/OTEtNzY1NS5qcGVn.jpeg"'},

    {artist: 'FKJ', 
    album: 'Just Piano', 
    year: '2021', 
    price: '€24,90', 
    img: 'src="https://i.discogs.com/VWLtmljNxlkui9qwDaq3fXiFYSHl99TRUOTzrax1d4s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjUy/Mjc2LTE2NTMwODUy/ODQtMTc1Mi5qcGVn.jpeg"'},
];

lista.forEach((article) => {
    let div = document.createElement('div')
    
    div.innerHTML = `
    <div class="card m-5 shadow-lg">
                    <img data-bs-toggle="modal" data-bs-target="#ModalCleo" ${article.img} class="card-img-top border-bottom" alt="...">

                    <div class="card-body bg-dark text-white">
                      <h5 class="card-title">${article.artist} - ${article.album}</h5>
                    
                        <div class="col d-flex justify-content-between align-items-end">

                            <ul class="card-text ms-0 ps-0">
                                <li>${article.year}</li>
                                <li class="fs-5 text-warning">${article.price}</li>
                            </ul>

                            <div>
                                <button type="button" class="btn btn-outliner text-warning border-2 border-warning" data-bs-toggle="modal" data-bs-target="#ModalCleo">
                                    + info</button>
                            </div>
                        </div>
                    </div>
                </div>
    `;
wrapper.appendChild(div)
})

