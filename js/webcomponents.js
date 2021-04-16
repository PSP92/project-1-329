// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// // Web Components Classes Here
// //////////////////////////////////

// class TemplateExample extends HTMLElement {
//     constructor(){
//         super()

//         this.innerHTML = `<h1>Hello World</h1>`
//     }
// }
class MyCard extends HTMLElement{
    constructor() {
        super()
        const name =this.getAttribute("name")
        const git =this.getAttribute("git")
        const live =this.getAttribute("live")
        const img =this.getAttribute("img")

     this.innerHTML =`
     <sl-card>
         <h1 slot ="header">${name}</h1>
         <img class= "img" src=${img} alt=${name} slot="image">
         <sl-button-group>
        <a href=${git}> <sl-button>Git</sl-button></a>
        <a href=${live}> <sl-button>Live</sl-button></a>
         </sl-button-group>

     </sl-card>`
    }

}

customElements.define("my-card", MyCard)

/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

// customElements.define("template-example", TemplateExample)


var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thank you!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Something went wrong"
      });
    }
    form.addEventListener("submit", handleSubmit)
// USED THIS CODE FROM FORMSPREE
    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
    formbutton("create", { 
        action: "https://formspree.io/f/xoqyvqkn",
        title: "Contact Me",
        fields: [
          { 
            type: "email", 
            label: "Email:", 
            name: "email",
            required: true,
            placeholder: "your@email.com"
          },
          {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "How can I help you today?",
          },
          { type: "submit" }      
        ],
        styles: {
          title: {
            backgroundColor: "#D7D0E1"
          },
          button: {
            backgroundColor: " #434655"
          }
        }
      });