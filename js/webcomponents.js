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
         <h1>${name}</h1>
         <img src=${img} alt=${name} slot="image">
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