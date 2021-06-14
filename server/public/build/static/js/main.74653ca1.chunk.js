(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(34),s=n.n(a),r=(n(41),n(9)),o=n(10),l=n(12),d=n(11),j=n(7),b=n(2),u=n(16),p=n(21),h=n(13),O=n(17),g=n.n(O),m=n(0);n(33).config();var x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onChangeIngredientHandler=function(t){return function(n){var i=e.state.ingredients.map((function(e,i){return t!==i?e:Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},n.target.name,n.target.value))}));e.setState({ingredients:i})}},e.minusIngredientHandler=function(t){return function(){e.setState({ingredients:e.state.ingredients.filter((function(e,n){return t!==n||0===t}))})}},e.onChangeHandler=e.onChangeHandler.bind(Object(h.a)(e)),e.onChangeIngredientHandler=e.onChangeIngredientHandler.bind(Object(h.a)(e)),e.addIngredientHandler=e.addIngredientHandler.bind(Object(h.a)(e)),e.minusIngredientHandler=e.minusIngredientHandler.bind(Object(h.a)(e)),e.onSubmit=e.onSubmit.bind(Object(h.a)(e)),e.state={title:"",ingredients:[{amount:"",unit:"",ingredient:""}],directions:""},e}return Object(o.a)(n,[{key:"onChangeHandler",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"addIngredientHandler",value:function(){this.setState({ingredients:this.state.ingredients.concat([{amount:"",unit:"",ingredient:""}])})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.ingredients.map((function(e){return"\n        ".concat(e.amount).concat(e.unit," \n        \xa0\xa0 - \xa0\xa0 \n        ").concat(e.ingredient,"  \n      ")})),n={title:this.state.title,ingredients:t,directions:this.state.directions};g.a.post("https://mkline.org/Recipe_app/recipe_app/add_recipe",n).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.setState({title:"",ingredients:[{amount:"",unit:"",ingredient:""}],directions:""})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"book",children:[Object(m.jsx)("h3",{children:"Add a recipe"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("label",{children:"Title: "}),Object(m.jsx)("input",{className:"recipeTitle",type:"text",name:"title",value:this.state.title,onChange:this.onChangeHandler}),Object(m.jsx)("label",{children:"Ingredients: "}),this.state.ingredients.map((function(t,n){return Object(m.jsxs)("span",{children:[Object(m.jsx)("input",{className:"amount",type:"text",name:"amount",value:t.amount,onChange:e.onChangeIngredientHandler(n)}),Object(m.jsxs)("select",{className:"amount",name:"unit",value:t.unit,onChange:e.onChangeIngredientHandler(n),children:[Object(m.jsx)("option",{value:""}),Object(m.jsx)("option",{value:"kg",children:"kg"}),Object(m.jsx)("option",{value:"g",children:"g"}),Object(m.jsx)("option",{value:"lbs",children:"lbs"}),Object(m.jsx)("option",{value:"oz",children:"oz"}),Object(m.jsx)("option",{value:"L",children:"l"}),Object(m.jsx)("option",{value:"ml",children:"ml"}),Object(m.jsx)("option",{value:"fl oz",children:"fl oz"}),Object(m.jsx)("option",{value:"cups",children:"cups"}),Object(m.jsx)("option",{value:"tbsp",children:"tbs"}),Object(m.jsx)("option",{value:"tsp",children:"tsp"})]}),"\xa0\xa0\xa0",Object(m.jsx)("input",{className:"ingredient",type:"text",name:"ingredient",value:t.ingredient,onChange:e.onChangeIngredientHandler(n)}),Object(m.jsx)("button",{type:"button",className:"addSubtractButtons",onClick:e.addIngredientHandler,children:"+"}),Object(m.jsx)("button",{type:"button",className:"addSubtractButtons",onClick:e.minusIngredientHandler(n),children:"-"})]},t.index)})),Object(m.jsx)("label",{children:"Directions: "}),Object(m.jsx)("textarea",{className:"directions",type:"text",name:"directions",value:this.state.directions,onChange:this.onChangeHandler}),Object(m.jsx)("button",{className:"submit",children:"Add recipe"})]})]})}}]),n}(i.Component),v=n(22),f=n.n(v),k=n(35);n(33).config();var N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={allRecipes:[]},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://mkline.org/Recipe_app/recipe_app/recipes").then((function(e){t.setState({allRecipes:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.allRecipes.map((function(e){return Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{className:"list",children:[Object(m.jsx)(j.b,{className:"recipeTitleDisplay",to:{pathname:"/recipe_book/recipes/".concat(e.title),state:{title:e.title,ingredients:e.ingredients,directions:e.directions}},children:Object(m.jsx)("td",{children:e.title})}),Object(m.jsx)("td",{children:"Ingredients:"}),e.ingredients.map((function(e,t){return Object(m.jsx)("td",{children:e})})),"\xa0",Object(m.jsx)("td",{children:"Directions:"}),Object(m.jsx)("td",{className:"listDirections",children:e.directions})]},e.key)})})}));return Object(m.jsx)("div",{className:"book",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Recipes"}),e]})})}}]),n}(i.Component),C=(n(71),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"recipeBookNav",children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)(j.b,{className:"bookOptions",to:"/Recipe_app/recipe_book/Add_Recipe",children:"Add a Recipe"}),Object(m.jsx)(j.b,{className:"bookOptions",to:"/Recipe_app/recipe_book/recipes",children:"All Recipes"})]}),Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/Recipe_app/recipe_book/Add_Recipe",component:x}),Object(m.jsx)(b.a,{path:"/Recipe_app/recipe_book/recipes",component:N})]})]})})}}]),n}(i.Component)),y=(n(72),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"mainPage",children:[Object(m.jsx)("header",{children:"A Cook's tale  in recipes and other nonsense"}),Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"backdrop",children:[Object(m.jsx)("p",{className:"title",children:"Menu"}),Object(m.jsxs)("nav",{className:"mainNav",children:[Object(m.jsx)(j.b,{className:"card recipe",to:"/Recipe_app/recipe_book",children:Object(m.jsx)("p",{className:"cardTitle",children:"My Recipe book"})}),Object(m.jsxs)(j.b,{className:"card bigOven",to:"/bigoven",children:[Object(m.jsx)("img",{className:"bigOvenImg",src:"https://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png",alt:"BigOven logo"}),Object(m.jsx)("p",{className:"cardTitle",children:"Recipes from Big oven"})]}),Object(m.jsx)(j.b,{className:"card conversion",to:"/products",children:Object(m.jsx)("p",{className:"cardTitle",children:"Measurement Conversions"})}),Object(m.jsx)(j.b,{className:"card timer",to:"/user",children:Object(m.jsx)("p",{className:"cardTitle",children:"Kitchen Timer"})})]}),Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/Recipe_app/recipe_book",component:C}),Object(m.jsx)(b.a,{exact:!0,path:"/",component:_}),Object(m.jsx)(b.a,{path:"/*",component:R})]})]})}),Object(m.jsx)("footer",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:"Copyright \xa9 Michael R. Kline 2020. All Rights Reserved. "})})}),Object(m.jsx)("div",{className:"rotate",children:"Please rotate Device"})]})}}]),n}(i.Component)),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{})}}]),n}(i.Component),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"404 Not Found"})}}]),n}(i.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),H()}},[[73,1,2]]]);
//# sourceMappingURL=main.74653ca1.chunk.js.map