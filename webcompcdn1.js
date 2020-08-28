let v = "indiacate variable";
class MyCountry extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p> this is a paragraph</p>
    <p>this is another one ${v}<p>
<button onclick="hel()">hello</button>`;
  }
}
class Another extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p> this is a another paragraph</p>
    <p>this is another one paragraph ${v}<p>
<button onclick="hel()">hello</button>`;
  }
}
function hel() {
  alert("clicked button");
}
window.customElements.define("my-india", MyCountry);
window.customElements.define("my-para", Another);
