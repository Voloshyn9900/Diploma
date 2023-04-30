import axios from "axios"

const refs = {
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector(".modal-form"),
    name: document.querySelector("#name"),
    tel: document.querySelector("#tel"),
    email: document.querySelector("#email"),
    comments: document.querySelector("#textarea"),
    checkBox: document.querySelector(".modal-checkbox"),
    btn: document.querySelector(".send-button"),
}
const HOST_URL = "http://localhost:3000/"

const postData = async () => {
    
    let data = {
            "name": refs.name.value,
            "phone": refs.tel.value,
            "email": refs.email.value,
            "comment": refs.comments.value
    };
    try {
       const response = await axios.post(`${HOST_URL}register`,data)
        
        console.log("response", response)
           
    } catch (error) {
        console.log(error.message)
    };
};

refs.checkBox.addEventListener("click", (e) => {
    if (!e.target.checked) {
       return refs.btn.setAttribute("disabled", "")
    }
    refs.btn.removeAttribute("disabled")
})
refs.btn.addEventListener("click", (e) => {
   //e.preventDefault();
          
    postData()
})
  
