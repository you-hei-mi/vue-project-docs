import{R as p,o as u,r as d,a as m,_ as c,b as h}from"./utils.2P_zrqee.js";import{d as f,a9 as v,y as l,N as g,r as w,D as x,h as y,o as _,c as b,q as k,z as r}from"./framework.a5IFYzQQ.js";const t=JSON.parse(`{"handling-input":{"App":{"composition.js":"import { ref } from 'vue'\\r\\n\\r\\nexport default {\\r\\n  setup() {\\r\\n    const message = ref('Hello World!')\\r\\n\\r\\n    function reverseMessage() {\\r\\n      // Access/mutate the value of a ref via\\r\\n      // its .value property.\\r\\n      message.value = message.value.split('').reverse().join('')\\r\\n    }\\r\\n\\r\\n    function notify() {\\r\\n      alert('navigation was prevented.')\\r\\n    }\\r\\n\\r\\n    return {\\r\\n      message,\\r\\n      reverseMessage,\\r\\n      notify\\r\\n    }\\r\\n  }\\r\\n}\\r\\n","options.js":"export default {\\r\\n  data() {\\r\\n    return {\\r\\n      message: 'Hello World!'\\r\\n    }\\r\\n  },\\r\\n  methods: {\\r\\n    reverseMessage() {\\r\\n      this.message = this.message.split('').reverse().join('')\\r\\n    },\\r\\n    notify() {\\r\\n      alert('navigation was prevented.')\\r\\n    }\\r\\n  }\\r\\n}\\r\\n","style.css":"button, a {\\r\\n  display: block;\\r\\n  margin-bottom: 1em;\\r\\n}\\n","template.html":"<!--\\r\\n  Note we don't need .value inside templates because\\r\\n  refs are automatically \\"unwrapped\\" in templates.\\r\\n-->\\r\\n<h1>{{ message }}</h1>\\r\\n\\r\\n<!--\\r\\n  Bind to a method/function.\\r\\n  The @click syntax is short for v-on:click.\\r\\n-->\\r\\n<button @click=\\"reverseMessage\\">Reverse Message</button>\\r\\n\\r\\n<!-- Can also be an inline expression statement -->\\r\\n<button @click=\\"message += '!'\\">Append \\"!\\"</button>\\r\\n\\r\\n<!--\\r\\n  Vue also provides modifiers for common tasks\\r\\n  such as e.preventDefault() and e.stopPropagation()\\r\\n-->\\r\\n<a href=\\"https://vuejs.org\\" @click.prevent=\\"notify\\">\\r\\n  A link with e.preventDefault()\\r\\n</a>\\r\\n"},"description.txt":"This example demonstrates handling user input with the v-on directive."},"hello-world":{"App":{"composition.js":"import { ref } from 'vue'\\r\\n\\r\\nexport default {\\r\\n  setup() {\\r\\n    // A \\"ref\\" is a reactive data source that stores a value.\\r\\n    // Technically, we don't need to wrap the string with ref()\\r\\n    // in order to display it, but we will see in the next\\r\\n    // example why it is needed if we ever intend to change\\r\\n    // the value.\\r\\n    const message = ref('Hello World!')\\r\\n\\r\\n    return {\\r\\n      message\\r\\n    }\\r\\n  }\\r\\n}\\r\\n","options.js":"export default {\\r\\n  data() {\\r\\n    return {\\r\\n      message: 'Hello World!'\\r\\n    }\\r\\n  }\\r\\n}\\n","template.html":"<h1>{{ message }}</h1>\\n"},"description.txt":"Say Hello World with Vue!"}}`),A=f({__name:"ExampleRepl",setup(j){const s=new p({defaultVueRuntimeURL:`https://unpkg.com/vue@${v}/dist/vue.esm-browser.js`}),o=l("prefer-composition"),n=l("prefer-sfc");g(a,{onTrigger(e){console.log(e);debugger}}),u(a);function a(){let e=location.hash.slice(1);t.hasOwnProperty(e)||(e="hello-world",location.hash=`#${e}`),s.setFiles(n.value?d(t[e],o.value):m(t[e],o.value),n.value?"App.vue":"index.html")}const i=w();return x(()=>{const e=()=>{i.value.style.setProperty("--vh",window.innerHeight+"px")};e(),window.addEventListener("resize",e),y(()=>{window.removeEventListener("resize",e)})}),(e,C)=>(_(),b("div",{ref_key:"heightProvider",ref:i},[k(r(h),{editor:r(c),store:r(s),showImportMap:!r(n),showCompileOutput:!1,clearConsole:!1},null,8,["editor","store","showImportMap"])],512))}});export{A as default};
