(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,s,t){},28:function(e,s,t){},29:function(e,s,t){},30:function(e,s,t){},31:function(e,s,t){},32:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},38:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),n=t(7),a=t.n(n),r=t(3),l=(t(22),t(52)),o=t(53),j=t(0);function d(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar neu "+(s&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return t(!s)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]}),Object(j.jsx)("a",{href:"#intro",className:"logo",children:"genius."})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"+91 6205123312"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"vatsalarya1@gmail.com"})]})]})]})})}t(28);var b=t(14);function m(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Web Developer","IOS App developer"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi There, I'm"}),Object(j.jsx)("h1",{children:"Vatsal Arya"}),Object(j.jsxs)("h3",{children:["A ",Object(j.jsx)("span",{ref:e})]}),Object(j.jsx)("p",{children:"jebkwhwvef inqhqpiugfoiqgugf iugwqi ugwfogqeiwquewi ugb euigwqe ugefw oiqu goi euegofug fewugefw jebkwhwvef inqhqpiugfoiqgugfgefw jebkwhwvef inqhqpiugfoiqgugf iugwqi ugwfogqeiwquewi ugb euigwqe ugefw oiqu goi euegofug fewugefw"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"submit",className:"neu",children:"Contact Me"}),Object(j.jsx)("button",{type:"submit",className:"neu",children:"More"})]})]})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/mying.png",alt:""})}),Object(j.jsxs)("div",{className:"mob_but",children:[Object(j.jsx)("button",{type:"submit",className:"neu",children:"Contact Me"}),Object(j.jsx)("button",{type:"submit",className:"neu arrow",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}t(29);function u(e){var s=e.id,t=e.title,c=e.active,i=e.setSelected;return Object(j.jsx)("li",{className:c?"portfolioList neu active":"portfolioList neu",onClick:function(){return i(s)},children:t})}t(30);var p=[{id:1,title:"Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Rampa UI Design",img:"https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900"},{id:3,title:"E-commerce Web Design",img:"https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900"}],h=[{id:1,title:"Web Social Media App",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"},{id:2,title:"Web Rampa UI Design",img:"https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900"},{id:3,title:"Web E-commerce Design",img:"https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900"}],g=[{id:1,title:"Mobile Social Media App",img:"https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900"},{id:2,title:"Mobile Rampa UI Design",img:"https://cdn.dribbble.com/users/5920881/screenshots/15463142/media/b5a460223798bd85d835710806e2f3dd.png?compress=1&resize=1200x900"},{id:3,title:"Mobile E-commerce Design",img:"https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/48ac2b43ebe81ba0866afea1383cc939.png?compress=1&resize=1200x900"}];function x(){var e=Object(c.useState)("featured"),s=Object(r.a)(e,2),t=s[0],i=s[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),l=a[0],o=a[1];return Object(c.useEffect)((function(){switch(t){case"featured":o(p);break;case"web":o(h);break;case"mobile":o(g);break;default:o(p)}}),[t]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"}].map((function(e){return Object(j.jsx)(u,{title:e.title,active:t===e.id,setSelected:i,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:l.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.title})]})}))})]})}t(31);function O(){var e=Object(c.useState)(0),s=Object(r.a)(e,2),t=s[0],i=s[1],n=[{id:"1",icon:"./assets/mobile.png",title:"Web Design",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"},{id:"2",icon:"./assets/globe.png",title:"Mobile Application",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"},{id:"3",icon:"./assets/writing.png",title:"Branding",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"}],a=function(e){i("left"===e?t>0?t-1:2:t<n.length-1?t+1:0)};return Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:n.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsx)("span",{children:"Projects"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",alt:""})})]})})}))}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}t(32);function f(){return Object(j.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(j.jsx)("h1",{children:"Testimonials"}),Object(j.jsx)("div",{className:"container",children:[{id:1,name:"Tom Durden",title:"Senior Developer",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/twitter.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."},{id:2,name:"Alex Kalinski",title:"Co-Founder of DELKA",img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/youtube.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",featured:!0},{id:3,name:"Martin Harold",title:"CEO of ALBI",img:"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/linkedin.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem"}].map((function(e){return Object(j.jsxs)("div",{className:e.featured?"card featured neu":"card neu",children:[Object(j.jsxs)("div",{className:"top neu",children:[Object(j.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(j.jsx)("img",{className:"user",src:e.img,alt:""}),Object(j.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(j.jsx)("div",{className:"center neu",children:e.desc}),Object(j.jsxs)("div",{className:"bottom neu",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h4",{children:e.title})]})]})}))})]})}t(33);function N(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],i=s[1];return Object(j.jsx)("div",{className:"contact",id:"contact",children:Object(j.jsxs)("div",{className:"right neu",children:[Object(j.jsx)("h2",{children:"CONTACT"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0)},children:[Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"text",placeholder:"Email"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("label",{children:"Message"}),Object(j.jsx)("textarea",{placeholder:"Message"})]}),Object(j.jsx)("button",{type:"submit",className:"neu",children:"Send"}),t&&Object(j.jsx)("span",{className:"neu2",children:"Thanks, I'll reply ASAP :)"})]})]})})}t(34),t(35);var v=t(4),w=t.n(v),y=t(15),k=t.n(y);function C(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu neu "+(s&&"active neu"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"top neu",onClick:function(){return t(!1)},children:Object(j.jsx)(k.a,{className:"icon"})}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#intro",children:"Home"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#portfolio",children:"Portfolio"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#works",children:"Works"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#testimonials",children:"Testimonials"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(j.jsxs)("li",{className:"bottom",onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#contact",children:"LinkedIn"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#contact",children:"Twitter"})]}),Object(j.jsxs)("li",{onClick:function(){return t(!1)},children:[Object(j.jsx)(w.a,{className:"icon"}),Object(j.jsx)("a",{href:"#contact",children:"GitHub"})]})]})})}var q=function(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],i=s[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{menuOpen:t,setMenuOpen:i}),Object(j.jsx)(C,{menuOpen:t,setMenuOpen:i}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(m,{}),Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(f,{}),Object(j.jsx)(N,{})]})]})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.548be0a5.chunk.js.map