(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{191:function(e,s,a){},401:function(e,s,a){},402:function(e,s,a){},421:function(e,s,a){"use strict";a.r(s);var t=a(2),c=a.n(t),n=a(54),i=a.n(n),r=(a(191),a(47)),l=a(16),o=a(55),j=a(0),d=Object(t.createContext)(),m=function(e){var s=e.children,a=Object(t.useState)(!1),c=Object(o.a)(a,2),n=c[0],i=c[1],r=Object(t.useState)(0),l=Object(o.a)(r,2),m=l[0],b=l[1];return Object(t.useEffect)((function(){function e(){b((function(e){return window.innerWidth}))}return window.addEventListener("resize",e),e(),m})),Object(j.jsx)(d.Provider,{value:{isNavOpen:n,toggleNavOpen:function(){return i((function(e){return!e}))},screenWidth:m},children:s})},b=a(76),u=a(182),h=a.n(u),O=a(8),p="NAME_INPUT",_="EMAIL_INPUT",x="PHONE_INPUT",N="NAME_ERROR",f="EMAIL_ERROR",v="PHONE_ERROR",g="INCREASE_TIME",k="DECREASE_TIME",y="INCREASE_COVERS",C="DECREASE_COVERS",E="INCREASE_DURATION",w="DECREASE_DURATION",S="SELECT_TABLE",D="HANDLE_CALENDAR",I="CONFIRM_BOOKING",L="RESET_STATE",P={enteredName:"",enteredEmail:"",enteredPhone:"",errorName:null,errorEmail:null,errorPhone:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case p:return Object(O.a)(Object(O.a)({},e),{},{enteredName:s.value});case _:return Object(O.a)(Object(O.a)({},e),{},{enteredEmail:s.value});case x:return Object(O.a)(Object(O.a)({},e),{},{enteredPhone:s.value});case N:return Object(O.a)(Object(O.a)({},e),{},{errorName:s.error});case f:return Object(O.a)(Object(O.a)({},e),{},{errorEmail:s.error});case v:return Object(O.a)(Object(O.a)({},e),{},{errorPhone:s.error});case L:return P;default:return e}},R={showCalendar:!1,timeHours:12,timeMinutes:0,covers:1,durationHours:1,durationMinutes:0,tableNr:null,confirmBooking:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case g:case k:return Object(O.a)(Object(O.a)({},e),{},{timeHours:s.payload.hour,timeMinutes:s.payload.minutes});case y:return Object(O.a)(Object(O.a)({},e),{},{covers:e.covers+1});case C:return Object(O.a)(Object(O.a)({},e),{},{covers:e.covers-1});case E:case w:return Object(O.a)(Object(O.a)({},e),{},{durationHours:s.payload.hour,durationMinutes:s.payload.minutes});case S:return Object(O.a)(Object(O.a)({},e),{},{tableNr:e.tableNr===s.tableNr?null:s.tableNr});case D:return Object(O.a)(Object(O.a)({},e),{},{showCalendar:!e.showCalendar});case I:return Object(O.a)(Object(O.a)({},e),{},{confirmBooking:s.confirm});case L:return R;default:return e}},A=Object(t.createContext)(),M=function(e){var s=e.children,a=h()({details:[B,R],inputs:[T,P]}),c=Object(o.a)(a,2),n=c[0],i=c[1],r=Object(t.useReducer)(n,i),l=Object(o.a)(r,2),d=l[0],m=l[1],u=Object(t.useState)(new Date),O=Object(o.a)(u,2),p=O[0],_=O[1];return Object(j.jsx)(A.Provider,{value:{state:d,dispatch:m,value:p,onChange:_,addBookedTable:function(){var e=Object(b.a)(document.getElementsByClassName("table--active")),s=Object(b.a)(document.getElementsByClassName("table--inactive"));e.forEach((function(e){e.classList.remove("table--active"),e.classList.add("table--booked")})),s.forEach((function(e){e.classList.remove("table--inactive")}))}},children:s})},H=(a(401),a(402),a(96)),F=function(){var e=Object(t.useContext)(d),s=e.isNavOpen,a=e.toggleNavOpen;return Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsxs)("ul",{className:"navigation-list",children:[Object(j.jsx)("li",{className:"navigation-list__item",children:Object(j.jsx)(H.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:800,onClick:a,children:"About"})}),Object(j.jsx)("li",{className:"navigation-list__item",children:Object(j.jsx)(H.Link,{activeClass:"active",to:"menu",spy:!0,smooth:!0,offset:0,duration:800,onClick:a,children:"Menu"})}),Object(j.jsx)("li",{className:"navigation-list__item",children:Object(j.jsx)(r.b,{to:"/booking",onClick:a,children:"Bookings"})}),Object(j.jsx)("li",{className:"navigation-list__item",children:Object(j.jsx)(H.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:800,onClick:a,children:"Contact"})})]})})},U=(a(414),a(185)),W=a.p+"static/media/picture1.7dee50b3.jpg",z=a.p+"static/media/picture2.c8ce8784.jpg",G=a.p+"static/media/picture3.ef9924aa.jpg",V=a.p+"static/media/picture4.890951f6.jpg",q=function(){return Object(j.jsx)("div",{className:"slides",children:Object(j.jsxs)(U.Carousel,{children:[Object(j.jsx)("div",{className:"slides__slide",children:Object(j.jsx)("img",{src:W,alt:"Page",className:"slide-img"})}),Object(j.jsx)("div",{className:"slides__slide",children:Object(j.jsx)("img",{src:z,alt:"Page",className:"slide-img"})}),Object(j.jsx)("div",{className:"slides__slide",children:Object(j.jsx)("img",{src:G,alt:"Page",className:"slide-img"})}),Object(j.jsx)("div",{className:"slides__slide",children:Object(j.jsx)("img",{src:V,alt:"Page",className:"slide-img"})})]})})},J=function(){var e=Object(t.useContext)(d),s=e.isNavOpen,a=e.toggleNavOpen,c=e.screenWidth;return Object(j.jsxs)("div",{className:"header ",children:[Object(j.jsx)("div",{className:"header__hamburger",children:Object(j.jsx)("span",{className:s?"fas fa-times":"fas fa-bars",onClick:a})}),Object(j.jsxs)("div",{className:"header__logo",children:[Object(j.jsx)("h6",{children:"The"}),Object(j.jsx)("h1",{children:"Lockdown"})]}),c>767&&Object(j.jsxs)("div",{className:"header__socials",children:[Object(j.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{className:"fab fa-instagram"})}),Object(j.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{className:"fab fa-twitter"})})]}),Object(j.jsx)("div",{className:"header__book-btn",children:Object(j.jsxs)(r.b,{to:"/booking",children:[Object(j.jsx)("span",{className:"fas fa-book-open"}),Object(j.jsx)("span",{className:"book-text",children:"Bookings"})]})})]})},K=a.p+"static/media/drinks.064d1e74.jpg",Q=a.p+"static/media/food.5303c375.jpg",X=a.p+"static/media/events.2f61e0e3.jpg",Y=function(){return Object(j.jsx)("div",{className:"about",id:"about",children:Object(j.jsxs)("div",{className:"about__wrapper",children:[Object(j.jsxs)("div",{className:"about__text",children:[Object(j.jsx)("h1",{children:"WELCOME TO THE LOCKDOWN"}),Object(j.jsx)("span",{children:"Located next to overlooking the river Thames, The Lockdown is a restaurant & bar with cosy interiors and a warming fireplace, serving seasonal British food. Be it a light lunch, a lavish dinner or something sweet, our seasonally changing menu is packed full of flavour and is sure to tantalise your taste buds.  Our menu, with gluten-free, vegan and vegetarian options, makes us the best place for dinner!"}),Object(j.jsx)("p",{children:"Don\u2019t miss out, we look forward to seeing you soon!"})]}),Object(j.jsxs)("div",{className:"about__promosion",children:[Object(j.jsxs)("div",{className:"about__promosion__section",children:[Object(j.jsx)("img",{src:Q,alt:""}),Object(j.jsx)("h2",{children:"OUR DELICIOUS FOOD"}),Object(j.jsx)("span",{children:"Our food is delicious, tasty, mouth-watering, appetizing, scrumptious, luscious, enjoyable, palatable, delightful, toothsome, pleasing, satisfying. Never tasteless, disgusting, or nauseating."})]}),Object(j.jsxs)("div",{className:"about__promosion__section",children:[Object(j.jsx)("img",{src:X,alt:""}),Object(j.jsx)("h2",{children:"PARTIES AND EVENTS"}),Object(j.jsx)("span",{children:"Looking for a venue for your next party, celebration or work event? With the ability to cater for up to 200 people in 4 semi-private bookable spaces, we are the go to destination for birthday celebrations, engagements and office parties."})]}),Object(j.jsxs)("div",{className:"about__promosion__section",children:[Object(j.jsx)("img",{src:K,alt:""}),Object(j.jsx)("h2",{children:"Coctails"}),Object(j.jsx)("span",{children:"An alcoholic drink is a drink that contains ethanol, a type of alcohol produced by fermentation of grains, fruits, or other sources of sugar. The consumption of alcohol plays an important social role in many cultures."})]})]})]})})},Z=function(){return Object(j.jsxs)("div",{className:"menu",id:"menu",children:[Object(j.jsx)("h1",{children:"MAIN MENU"}),Object(j.jsxs)("div",{className:"menu__wrapper",children:[Object(j.jsxs)("div",{className:"menu__name",children:[Object(j.jsx)("h2",{className:"menu__heading",children:"SMALL DISHES & LIGHT BITES"}),Object(j.jsxs)("div",{className:"menu__container",children:[Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Buffalo mozzarella, roasted figs, truffle"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa38 "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Turkey & apricot Scotch Egg"}),Object(j.jsx)("p",{className:"menu__price",children:" 6.5"})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Salt baked beetroot, roast artichoke, orange & chicory salad"}),Object(j.jsx)("p",{className:"menu__price",children:" 7"})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Butlers secret cheddar & Guinness rarebit"}),Object(j.jsx)("p",{className:"menu__price",children:" 7.5 "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Pea & Devonshire crab cake, watercress & pickled fennel salad"}),Object(j.jsx)("p",{className:"menu__price",children:" 9 "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Angus beef blade croquettes, horseradish cream"}),Object(j.jsx)("p",{className:"menu__price",children:"7.5"})]})]})]}),Object(j.jsxs)("div",{className:"menu__name",children:[Object(j.jsx)("h2",{className:"menu__heading",children:"SHARES"}),Object(j.jsxs)("div",{className:"menu__container",children:[Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Baked Camembert (v) garlic & rosemary, onion jam, truffle honey, foccacia"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa316   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"British Charcuterie. Coppa, air-dried Cumbrian ham, Suffolk salami & chorizo, goat's cheese, sun dried tomatoes, gherkins, bread"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa320"})]})]})]}),Object(j.jsxs)("div",{className:"menu__name",children:[Object(j.jsx)("h2",{className:"menu__heading",children:"MAINS"}),Object(j.jsxs)("div",{className:"menu__container",children:[Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"The Lockdown burger, cheese, ale onions, shredded lettuce, ketchup, mayo, pickles, fries"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa315.75   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Beer battered cod, triple cooked chips, mushy peas, tartare sauce"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa315.50   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"28 day aged 8 oz rib-eye steak, roasted tomato, watercress, fries, peppercorn sauce"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa326   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Pan fried gnocchi, spiced tomato sauce, spinach, rocket pesto, crispy shallots (vg"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa312.50   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Pan roasted sea bass, crushed new potatoes & bacon, samphire, buttered leeks"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa317.50   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Cumberland sausages, crushed winter roots, savoy cabbage, crispy shallots, gravy"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa314.50   "})]})]})]}),Object(j.jsxs)("div",{className:"menu__name",children:[Object(j.jsx)("h2",{className:"menu__heading",children:"PUDDINGS"}),Object(j.jsxs)("div",{className:"menu__container",children:[Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Spiced fruit Bakewell tart, clotted cream"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa37   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Flourless chocolate & orange brownie, vegan vavilla ice-cream"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa36.5   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"Sticky toffee pudding, clotted cream, caramel sauce"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa36   "})]}),Object(j.jsxs)("div",{className:"menu__meal",children:[Object(j.jsx)("p",{className:"menu__title",children:"3 Scoops lemon, mango or raspberry sorbet (vg)"}),Object(j.jsx)("p",{className:"menu__price",children:" \xa36   "})]})]})]})]})]})},$=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:e.id,className:"form-input__label",children:e.title}),Object(j.jsx)("input",{type:e.type,id:e.id,name:e.name,value:e.value,onChange:e.handleInput}),null===e.error?null:Object(j.jsx)("span",{className:"form-input__error",children:e.error})]})})},ee=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=s.inputs,n=c.enteredName,i=c.enteredEmail,r=c.enteredPhone,l=c.errorName,o=c.errorEmail,d=c.errorPhone;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)($,{title:"Name",type:"text",name:"name",id:"name",handleInput:function(e){var s=e.target.value;a({type:p,value:s})},value:n,error:l}),Object(j.jsx)($,{title:"Email",type:"email",name:"email",id:"email",handleInput:function(e){var s=e.target.value;a({type:_,value:s})},value:i,error:o}),Object(j.jsx)($,{title:"Phone",type:"number",name:"phone",id:"phone",handleInput:function(e){var s=e.target.value;a({type:x,value:s})},value:r,error:d})]})},se=function(e){return i.a.createPortal(Object(j.jsx)("div",{className:"backdrop",onClick:e.handleClick,children:e.children}),document.getElementById("backdrop-root"))},ae=a(186),te=(a(420),function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=e.value,n=e.onChange,i=s.details.showCalendar,r=function(){a({type:D})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-details",children:[Object(j.jsx)("span",{className:"form-details__label",children:"Date"}),Object(j.jsx)("span",{className:"form-details__info",onClick:r,children:c.toDateString()}),Object(j.jsx)("div",{className:"form-details__option",children:Object(j.jsx)("span",{className:i?"fas fa-arrow-up":"fas fa-arrow-down",onClick:r})})]}),i&&Object(j.jsx)(se,{children:Object(j.jsxs)("div",{className:"form-calendar",children:[Object(j.jsx)("span",{className:"form-calendar__close",onClick:r,children:"Close"}),Object(j.jsx)(ae.a,{onChange:n,value:c,minDate:new Date})]})})]})}),ce=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=s.details,n=c.timeHours,i=c.timeMinutes;return Object(j.jsxs)("div",{className:"form-details",children:[Object(j.jsx)("span",{className:"form-details__label",children:"Time"}),n<20?Object(j.jsxs)("span",{className:"form-details__info",children:[n," : ",i<10?"".concat(i,"0"):"".concat(i)]}):Object(j.jsx)("h2",{className:"form-details__info text--red",children:"Reservation close"}),Object(j.jsxs)("div",{className:"form-details__option",children:[n<=12&&0===i?Object(j.jsx)("span",{className:"fas fa-minus-circle disabled"}):Object(j.jsx)("span",{className:"fas fa-minus-circle",onClick:function(){var e=i-15,s=n;e<0&&(e=45,s=n-1),a({type:k,payload:{hour:s,minutes:e}})}}),n>=20&&0===i?Object(j.jsx)("span",{className:"fas fa-plus-circle disabled"}):Object(j.jsx)("span",{className:"fas fa-plus-circle",onClick:function(){var e=i+15,s=n;e>45&&(e=0,s=n+1),a({type:g,payload:{hour:s,minutes:e}})}})]})]})},ne=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=s.details.covers;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-details",children:[Object(j.jsx)("span",{className:"form-details__label",children:"Covers"}),Object(j.jsx)("span",{className:"form-details__info",children:c}),Object(j.jsxs)("div",{className:"form-details__option",children:[c<=1?Object(j.jsx)("span",{disabled:!0,className:"fas fa-minus-circle disabled"}):Object(j.jsx)("span",{className:"fas fa-minus-circle",onClick:function(){a({type:C})}}),Object(j.jsx)("span",{className:"fas fa-plus-circle",onClick:function(){a({type:y})}})]})]})})},ie=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=s.details,n=c.durationHours,i=c.durationMinutes;return Object(j.jsxs)("div",{className:"form-details",children:[Object(j.jsx)("span",{className:"form-details__label",children:"Duration"}),Object(j.jsxs)("span",{className:"form-details__info",children:[n,"h ",i<10?"".concat(i,"0"):i,"min"]}),Object(j.jsxs)("div",{className:"form-details__option",children:[n<=1&&0===i?Object(j.jsx)("span",{className:"fas fa-minus-circle disabled"}):Object(j.jsx)("span",{className:"fas fa-minus-circle",onClick:function(){var e=i-15,s=n;e<0&&(e=45,s=n-1),a({type:w,payload:{hour:s,minutes:e}})}}),Object(j.jsx)("span",{className:"fas fa-plus-circle",onClick:function(){var e=i+15,s=n;e>45&&(e=0,s=n+1),a({type:E,payload:{hour:s,minutes:e}})}})]})]})},re=function(){var e=Object(t.useContext)(A).state.details.tableNr;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-details",children:[Object(j.jsx)("span",{className:"form-details__label",children:"Tabel"}),Object(j.jsx)("span",{className:"form-details__table",children:e})]})})},le=function(){return Object(j.jsxs)("div",{className:"form-details-container",children:[Object(j.jsx)(te,{}),Object(j.jsx)(ce,{}),Object(j.jsx)(ne,{}),Object(j.jsx)(ie,{}),Object(j.jsx)(re,{})]})},oe=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=s.details.tableNr,n=s.inputs,i=n.enteredName,r=n.enteredEmail,l=n.enteredPhone;return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{className:"form__heading",children:"Reservation form"}),Object(j.jsxs)("div",{className:"form__wrapper",children:[Object(j.jsx)(ee,{}),Object(j.jsx)(le,{}),Object(j.jsx)("div",{className:"form__submit",children:Object(j.jsxs)("button",{className:"form__submit__button",onClick:function(e){var s=document.querySelector(".form-details__table");i.length<3?(e.preventDefault(),a({type:N,error:"Please type min 3 characters"})):a({type:N,error:null}),r.includes("@")?a({type:f,error:null}):(e.preventDefault(),a({type:f,error:"Invalid email"})),10!==l.length?(e.preventDefault(),a({type:v,error:"Please type 10 digits"})):a({type:v,error:null}),null===c?(e.preventDefault(),s.classList.add("form-details__table--invalid")):s.classList.remove("form-details__table--invalid"),i.length>=3&&r.includes("@")&&10===l.length&&null!==c&&a({type:I,confirm:!0})},children:[Object(j.jsx)("span",{className:"form__submit__text",children:"Book now"}),Object(j.jsx)("span",{className:"fas fa-pen-nib"})]})})]})]})},je=function(e){var s,a=Object(t.useContext)(A).dispatch,c=function(e){var s=Object(b.a)(document.getElementsByClassName("table")),t=e.target.id;s.forEach((function(e){t===e.id&&e.classList.toggle("table--active"),t!==e.id&&e.classList.toggle("table--inactive")})),a({type:S,tableNr:t})};return Object(j.jsx)("div",{className:"restaurant__tables-row",children:(s=e.row,s.map((function(e,s){return Object(j.jsx)("div",{className:"restaurant__tables-row__table",children:Object(j.jsx)("span",{className:"table",id:e,onClick:c,children:e})},s)})))})},de=function(){return Object(j.jsxs)("div",{className:"restaurant",children:[Object(j.jsx)(je,{row:[1,2,3,4]}),Object(j.jsx)(je,{row:[5,6,7,8]}),Object(j.jsx)(je,{row:[9,10,11,12]})]})},me=function(e){var s=e.title,a=e.detail;return Object(j.jsxs)("div",{className:"booking-message__detail",children:[Object(j.jsxs)("span",{className:"booking-message__detail__info",children:[s," :"]}),Object(j.jsx)("span",{className:"booking-message__detail__data",children:a})]})},be=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=e.value,n=e.onChange,i=e.addBookedTable,r=s.details,l=r.timeHours,o=r.timeMinutes,d=r.covers,m=r.durationHours,b=r.durationMinutes,u=r.tableNr,h=r.confirmBooking,O=s.inputs,p=O.enteredName,_=O.enteredEmail,x=O.enteredPhone,N=Math.floor(100*Math.random()+19);return h&&Object(j.jsx)(se,{children:Object(j.jsx)("div",{className:"booking-message",children:Object(j.jsxs)("div",{className:"booking-message__wrapper",children:[Object(j.jsx)("h1",{className:"booking-message__heading",children:"We are pleased to inform you that your reservation was successful."}),Object(j.jsx)(me,{title:"Booking number",detail:"#".concat(N)}),Object(j.jsx)(me,{title:"Name",detail:p}),Object(j.jsx)(me,{title:"Email",detail:_}),Object(j.jsx)(me,{title:"Phone",detail:x}),Object(j.jsx)(me,{title:"Date",detail:c.toDateString()}),Object(j.jsx)(me,{title:"Time",detail:"".concat(l," : ").concat(o<10?"".concat(o,"0"):"".concat(o))}),Object(j.jsx)(me,{title:"Covers",detail:d}),Object(j.jsx)(me,{title:"Duration",detail:"".concat(m,"h : ").concat(b<10?"".concat(b,"0"):"".concat(b),"min")}),Object(j.jsx)(me,{title:"Table",detail:"#".concat(u)}),Object(j.jsx)("button",{className:"booking-message__exit-btn",onClick:function(){i(),n(new Date),a({type:I,confirm:!1}),a({type:L})},children:"Close"})]})})})},ue=function(){var e=Object(t.useContext)(A),s=e.state,a=e.dispatch,c=e.onChange,n=s.details.confirmBooking;return Object(j.jsxs)("div",{className:"booking",children:[Object(j.jsx)("div",{className:"booking__cancel-btn",children:Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("span",{className:"fas fa-times",onClick:function(){c(new Date),a({type:L})}})})}),Object(j.jsx)(oe,{}),Object(j.jsx)(de,{}),n&&Object(j.jsx)(be,{})]})},he=function(){return Object(j.jsxs)("div",{className:"footer",id:"contact",children:[Object(j.jsxs)("div",{className:"footer__opening-hours",children:[Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:"OPENING HOURS"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Monday - Friday"}),Object(j.jsx)("span",{children:"12.00 - 20.00"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Saturday - Sunday"}),Object(j.jsx)("span",{children:"12.00 - 16.00"})]})]}),Object(j.jsxs)("div",{className:"footer__contact-details",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"fas fa-map-marker-alt"}),Object(j.jsx)("span",{children:"01 Big Ben, LONDON SW007"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"fas fa-phone-alt"}),Object(j.jsx)("span",{children:"020 7766 5544"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"fas fa-envelope"}),Object(j.jsx)("span",{children:"Lockdown@Lockdown.co.uk"})]})]})]})},Oe=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(m,{children:Object(j.jsxs)(M,{children:[Object(j.jsx)(F,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{path:"/",exact:!0,children:[Object(j.jsx)(J,{}),Object(j.jsx)(q,{}),Object(j.jsx)(Y,{}),Object(j.jsx)(Z,{}),Object(j.jsx)(he,{})]}),Object(j.jsx)(l.a,{path:"/booking",component:ue})]})]})})})})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Oe,{})}),document.getElementById("root"))}},[[421,1,2]]]);
//# sourceMappingURL=main.771bb356.chunk.js.map