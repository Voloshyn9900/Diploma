import axios from "axios"

const refs = {
    portfolio: document.querySelector("#portfolio"),
    gallery_list: document.querySelector("#gallery_list")
}


const HOST_CARDS_URL = "http://localhost:3001/portfolio"



const fetchCards = async () => {
    try {
        const response_cards = await axios(HOST_CARDS_URL).then(res => res.data.cards)
        console.log(response_cards)
        return response_cards
    } catch (error) {
        console.log(error)
    }
}

async function renderMarkup() {
    try {
        const markup = await fetchCards();
        const render = await markup
            .map(({title, subtitle, description}) => {
                return `<li class="offer-item">
                        <a href="#" class="offer-link">
                            <div class="offer-animation">
                                <img src="http://localhost:1234/img-1.cc85c684.jpg" alt="Photo didn't load" width="370" height="294">
                                <div class="offer-overlay">
                                    <p class="offer-animation-p">${description}
                                    </p>
                                </div>
                            </div>
                            <div class="offer-div">
                                <h2 class="offer-h2">${title}</h2>
                                <p class="offer-p">${subtitle}</p>
                            </div>    
                        </a>
                    </li>`;
            })
            .join('');

     //   refs.gallery_list.insertAdjacentHTML('beforeend', render);
        refs,gallery_list.innerHTML = render
    } catch (error) {
        'error', error;
    }
}
refs.portfolio.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("click portfolio")
  //  fetchCards()
     renderMarkup()
})