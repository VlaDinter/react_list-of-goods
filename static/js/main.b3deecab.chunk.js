(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),l=n.n(r),s=n(1),c=n(4),i=n(5),u=n(7),p=n(6),m=(n(13),function(t){var e=t.isStart,n=t.start,a=t.reverse,r=t.sortAlphabetically,l=t.reset,s=t.sortLenght;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"App__button",type:"button",onClick:n,hidden:e},"Start"),o.a.createElement("button",{className:"App__button",type:"button",onClick:a,hidden:!e},"Reverse"),o.a.createElement("button",{className:"App__button",type:"button",onClick:r,hidden:!e},"Sort alphabetically"),o.a.createElement("button",{className:"App__button",type:"button",onClick:l,hidden:!e},"Reset"),o.a.createElement("button",{className:"App__button",type:"button",onClick:s,hidden:!e},"Sort by length"))}),h=(n(14),function(t){var e=t.isStart,n=t.selectValue,a=t.filterLength;return o.a.createElement("select",{className:"App__select",hidden:!e,value:n,onChange:a},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"),o.a.createElement("option",null,"6"),o.a.createElement("option",null,"7"),o.a.createElement("option",null,"8"),o.a.createElement("option",null,"9"),o.a.createElement("option",null,"10"))}),d=(n(15),function(t){var e=t.good;return o.a.createElement("li",{className:"GoodsList__Good Good"},e)}),g=(n(16),function(t){var e=t.goods;return o.a.createElement("ul",{className:"App__GoodsList GoodsList"},e.map((function(t){return o.a.createElement(d,{key:t,good:t})})))}),f=(n(17),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isStart:!1,selectValue:1,goods:f},t.start=function(){t.setState({isStart:!0})},t.reverse=function(){t.setState((function(t){return{goods:Object(s.a)(t.goods).reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:Object(s.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState({goods:f,selectValue:1})},t.sortLenght=function(){t.setState((function(t){return{goods:Object(s.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.filterLength=function(e){var n=Number(e.target.value);t.setState({goods:f.filter((function(t){return t.length>=n})),selectValue:n})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"App__header"},"Goods"),f.length,o.a.createElement(m,{isStart:this.state.isStart,start:this.start,reverse:this.reverse,sortAlphabetically:this.sortAlphabetically,reset:this.reset,sortLenght:this.sortLenght}),o.a.createElement(h,{isStart:this.state.isStart,selectValue:this.state.selectValue,filterLength:this.filterLength}),this.state.isStart?o.a.createElement(g,{goods:this.state.goods}):"")}}]),n}(o.a.Component);l.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b3deecab.chunk.js.map