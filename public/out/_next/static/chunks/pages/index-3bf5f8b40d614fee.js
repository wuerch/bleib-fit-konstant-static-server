(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5379)}])},5379:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(5893);n(7294);var s=n(9008),i=n.n(s),l=n(5675),r=n.n(l),c=n(4298),o=n.n(c),d={src:"/_next/static/media/Onboarding.07a46aca.png",height:2796,width:1290,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAYUlEQVR42g3HOw7CMBAE0Jn1xqJBHADB/S9ERUcEFU3k/ORsMvHrHuv//el/7un5uLN8X2aWc4ZkAOq2SQJayJbYg6QT6JJn7wh4aA/EVBe35KWWYR0163a5UqXHcaAxOwEYSy0gBDbQowAAAABJRU5ErkJggg==",blurWidth:4,blurHeight:8},h={src:"/_next/static/media/\xdcbungen.7a62706a.png",height:2796,width:1290,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAXUlEQVR42g3HQQqDQAwF0P8zSRWnFNre/2zdVwRRUYRkom/32Obff5xIfD9vnbel1uFZB3fXhtyPA8j+0QnBW3iAkEJBpqoS0N665mlmecesvLSKEADbuUZEgqXoBc45IiCSBIZhAAAAAElFTkSuQmCC",blurWidth:4,blurHeight:8},u={src:"/_next/static/media/Weight.41838145.png",height:2796,width:1290,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAXElEQVR42jXHwQ5AMBBF0XnTERXS4v9/TiQWFRuCSKujGye5iwvdpxBWAOPQy5uS9w6EnFUYXJWYiSHzthzPJca4phPfOltbUqqlKuMJoEJVNCf6Id6n5ggQG/MBrTIeNGERFV8AAAAASUVORK5CYII=",blurWidth:4,blurHeight:8},A=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"smart-button-container",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{id:"paypal-button-container"})})}),(0,a.jsx)(o(),{src:"https://www.paypal.com/sdk/js?client-id=Adof2kE4SRVaTMiZ3P2UhBf6aAD4zAlk_egaJWmL1g-F96dmUEow7z6ZKjWwisoJMXXJJ4rbkSXlufiy&enable-funding=venmo&currency=EUR","data-sdk-integration-source":"button-factory",strategy:"beforeInteractive"}),(0,a.jsx)(o(),{children:"\n    function initPayPalButton() {\n      paypal.Buttons({\n        style: {\n          shape: 'pill',\n          color: 'gold',\n          layout: 'horizontal',\n          label: 'paypal',\n          \n        },\n\n        createOrder: function(data, actions) {\n          return actions.order.create({\n            purchase_units: [{\"description\":\"1 Jahr App Zugriff\",\"amount\":{\"currency_code\":\"EUR\",\"value\":120}}]\n          });\n        },\n\n        onApprove: function(data, actions) {\n          return actions.order.capture().then(function(orderData) {\n            \n            // Full available details\n            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));\n\n            // Show a success message within this page, e.g.\n            const element = document.getElementById('paypal-button-container');\n            element.innerHTML = '';\n            element.innerHTML = '<h3>Thank you for your payment!</h3>';\n\n            // Or go to another URL:  actions.redirect('thank_you.html');\n            \n          });\n        },\n\n        onError: function(err) {\n          console.log(err);\n        }\n      }).render('#paypal-button-container');\n    }\n    initPayPalButton();\n    "})]})},m=function(){return(0,a.jsxs)("div",{className:"flex flex-col justify-center text-stone-200 text-center",children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Bleib fit"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&family=IBM+Plex+Sans:wght@400;600&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/intl-tel-input@17.0.18/build/css/intlTelInput.min.css"})]}),(0,a.jsx)("h1",{className:"text-6xl font-bold mt-16",children:"Bleib fit ohne Jojo-Effekt"}),(0,a.jsxs)("h4",{className:"text-xl text-stone-400 mt-8 md:",children:["Du spielst in deiner Freizeit Fussball, ",(0,a.jsx)("b",{className:"text-stone-200",children:"schaffst es aber nicht fit zu bleiben"}),"? Diese ",(0,a.jsx)("b",{className:"text-stone-200",children:"IOS App"})," hilft dir !"]}),(0,a.jsx)("h1",{className:"text-6xl font-bold mt-8",children:"Wie funktioniert es?"}),(0,a.jsx)("h3",{className:"text-[18px] text-stone-200 font-bold my-2",children:"• Einmalig stellst du deine w\xf6chentlichen \xdcbungen ein"}),(0,a.jsx)("div",{className:"w-[40%] mx-[30%] md:w-[20%] md:mx-[40%]",children:(0,a.jsx)(r(),{className:"",src:d,alt:"Onboarding Image"})}),(0,a.jsxs)("h3",{className:"text-[18px] text-stone-400 my-2",children:["• ",(0,a.jsx)("b",{className:"text-stone-200",children:"Mit einem Klick"})," kannst du ",(0,a.jsx)("b",{className:"text-stone-200",children:"\xdcbungen als erledigt markieren"})]}),(0,a.jsx)("div",{className:"w-[40%] mx-[30%] md:w-[20%] md:mx-[40%]",children:(0,a.jsx)(r(),{className:"",src:h,alt:"Exercise Tracker Image"})}),(0,a.jsxs)("h3",{className:"text-[18px] text-stone-400 my-2",children:["• Mit ",(0,a.jsx)("b",{className:"text-stone-200",children:"einem Klick"})," kannst du dein ",(0,a.jsx)("b",{className:"text-stone-200",children:"Gewicht hinzuf\xfcgen"})]}),(0,a.jsx)("div",{className:"w-[40%] mx-[30%] md:w-[20%] md:mx-[40%]",children:(0,a.jsx)(r(),{className:"",src:u,alt:"Weight Tracker Image"})}),(0,a.jsx)("h1",{className:"text-4xl font-bold mt-8 mx-4",children:"Sichere dir 1 Jahr Mitgliedschaft"}),(0,a.jsx)("h1",{className:"text-4xl font-bold my-8 mx-4",children:"Bis zum Release am 14. Februar 50% Rabatt, 120€ statt 240€"}),(0,a.jsx)(A,{}),(0,a.jsx)("div",{className:"mb-16"})]})}}},function(e){e.O(0,[869,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);