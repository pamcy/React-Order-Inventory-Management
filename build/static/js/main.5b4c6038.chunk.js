(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a(61),o=a(63),c=a(62),l=a(4),u=a(5),h=a(7),m=a(6),p=a(8);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).storeInput=r.a.createRef(),a.handleSubmit=function(e){e.preventDefault();var t=a.storeInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"",className:"store-selector",onClick:this.handleSubmit},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",placeholder:"Enter a store name",ref:this.storeInput,defaultValue:v(),required:!0}),r.a.createElement("button",{type:"submit"},"Visit store \u2192"))}}]),t}(r.a.Component),g=a(12),y=a(11),E=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},O=a(14),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.order[e],n=a.props.fishes[e],s=n&&"available"===n.status,i={key:e,timeout:{enter:500,exit:500},classNames:"order"};return n?s?r.a.createElement(O.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(O.TransitionGroup,{component:"span",className:"count"},r.a.createElement(O.CSSTransition,{key:t,timeout:{enter:500,exit:500},classNames:"count"},r.a.createElement("span",null,t))),"lbs ",n.name,r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")),r.a.createElement("span",{className:"price"},d(n.price*t)))):r.a.createElement(O.CSSTransition,i,r.a.createElement("li",{key:e},"Sorry, ",n?n.name:"fish"," is no longer available!")):null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.order[a],r=e.props.fishes[a];return r&&"available"===r.status?t+n*r.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Your Order"),r.a.createElement(O.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},r.a.createElement("strong",null,"Total:"),d(a)))}}]),t}(r.a.Component),w=a(17),k=a.n(w),S=a(20),F=a(16),C=a(13),N=a.n(C),x=(a(51),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef,type:"text",placeholder:"Status"},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Description"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image URL"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component)),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleInputChange=function(e){var t=Object(y.a)({},a.props.details,Object(g.a)({},e.currentTarget.name,"price"===e.currentTarget.name?parseFloat(e.currentTarget.value):e.currentTarget.value));a.props.updateFish(a.props.id,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.name,n=t.price,s=t.status,i=t.desc,o=t.image;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{name:"name",type:"text",value:a,onChange:this.handleInputChange}),r.a.createElement("input",{name:"price",type:"text",value:n,onChange:this.handleInputChange}),r.a.createElement("select",{name:"status",type:"text",value:s,onChange:this.handleInputChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",value:i,onChange:this.handleInputChange}),r.a.createElement("input",{name:"image",type:"text",value:o,onChange:this.handleInputChange}),r.a.createElement("button",{onClick:function(){return e.props.removeFish(e.props.id)}},"Remove Fish"))}}]),t}(r.a.Component),T=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log in with Github"),r.a.createElement("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")}},"Log in with Twitter"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log in with Facebook"))},I=a(29),A=a.n(I),L=(a(54),N.a.initializeApp({apiKey:"AIzaSyBuBR0sqlL7TniTV8VzW7oSl33nwkvbdQo",authDomain:"react-seafood-dashboard.firebaseapp.com",databaseURL:"https://react-seafood-dashboard.firebaseio.com"})),D=A.a.createClass(L.database()),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null,isLoading:!1},a.handleAuth=function(){var e=Object(S.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,D.fetch("".concat(a.props.storeId),{context:Object(F.a)(Object(F.a)(a))});case 3:if((n=e.sent).owner){e.next=7;break}return e.next=7,D.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 7:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid,isLoading:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(N.a.auth["".concat(e,"AuthProvider")]);L.auth().signInWithPopup(t).then(a.handleAuth)},a.logOut=Object(S.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.auth().signOut();case 2:a.setState({uid:null});case 3:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),N.a.auth().onAuthStateChanged(function(t){t?e.handleAuth({user:t}):e.setState({isLoading:!1})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{style:{marginBottom:20},onClick:this.logOut},"Log out");return this.state.isLoading?r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"})):this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, you are not the store owner."),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(R,{key:t,id:t,details:e.props.fishes[t],updateFish:e.props.updateFish,removeFish:e.props.removeFish})}),r.a.createElement(x,{addFish:this.props.addFish}),r.a.createElement("button",{className:"load-sample",onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(T,{authenticate:this.authenticate})}}]),t}(r.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.desc,s=t.name,i=t.price,o="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a,alt:s}),r.a.createElement("h3",{className:"fish-name"},s,r.a.createElement("span",{className:"price"},d(i))),r.a.createElement("p",null,n),r.a.createElement("button",{disabled:!o,onClick:function(){return e.props.addToOrder(e.props.id)}},o?"Add to order":"Sold out!"))}}]),t}(r.a.Component),B={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(y.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var n=Object(y.a)({},a.state.fishes,Object(g.a)({},e,t));a.setState({fishes:n})},a.removeFish=function(e){var t=Object(y.a)({},a.state.fishes,Object(g.a)({},e,null));a.setState({fishes:t});var n=Object(y.a)({},a.state.order);delete n[e],a.setState({order:n})},a.addToOrder=function(e){var t=Object(y.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(y.a)({},a.state.order);delete t[e],a.setState({order:t})},a.loadSampleFishes=function(){a.setState({fishes:B})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=D.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){D.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(E,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"list-of-fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(P,{key:t,id:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(j,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(M,{fishes:this.state.fishes,addFish:this.addFish,updateFish:this.updateFish,removeFish:this.removeFish,loadSampleFishes:this.loadSampleFishes,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component),z=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"The page is not found :("))},J=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:b}),r.a.createElement(c.a,{path:"/store/:storeId",component:U}),r.a.createElement(c.a,{component:z})))};a(58);Object(s.render)(r.a.createElement(J,null),document.querySelector("#main"))}},[[31,1,2]]]);
//# sourceMappingURL=main.5b4c6038.chunk.js.map