"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[129,247,186],{247:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),i=n.n(a),s=n(791),u=n(395),o=n(184);t.default=function(e){var t=e.movieId,n=(0,s.useState)([]),a=(0,c.Z)(n,2),f=a[0],l=a[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.zv)(t);case 2:n=e.sent,l(n.cast);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Cast"}),(0,o.jsx)("ul",{children:f.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:""}),(0,o.jsx)("p",{children:e.name}),(0,o.jsx)("p",{children:e.character})]},e.id)}))})]})}},129:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return y}});var i=n(861),s=n(439),u=n(757),o=n.n(u),f=n(791),l=n(87),p=n(689),v="MovieDetails_MovieDetailsPage__yhCHb",h="MovieDetails_MovieDetailsNavLink__PF4eg",d="MovieDetails_MovieDetailsLink__XCAMI",x="MovieDetails_ButtonBack__B3TPC",j=n(395),m=n(247),w=n(186),b=n(184);var y=function(){var e,t,n=(0,p.UO)().movieId,r=(0,f.useState)(null),c=(0,s.Z)(r,2),u=c[0],y=c[1],k=(0,f.useState)(null),_=(0,s.Z)(k,2),g=_[0],O=_[1],P=(0,f.useState)(null),Z=(0,s.Z)(P,2),D=Z[0],C=Z[1],M=(0,p.TH)(),S=null!==(e=null===(t=M.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,f.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.TP)(n);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),!u)return(0,b.jsx)("div",{children:"Loading..."});var N=u.title,I=u.overview,E=u.release_date,B=u.poster_path,R=u.genres,T=u.runtime,U=u.vote_average;return(0,b.jsx)("div",{className:v,children:(0,b.jsxs)(f.Suspense,{children:[(0,b.jsx)(l.rU,{className:x,to:S,children:"Back"}),(0,b.jsx)("h1",{children:N}),(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(B),alt:N}),(0,b.jsx)("p",{children:I}),(0,b.jsxs)("p",{children:["Release date: ",E]}),(0,b.jsxs)("p",{children:["Genres: ",R.map((function(e){return e.name})).join(", ")]}),(0,b.jsxs)("p",{children:["Runtime: ",T," minutes"]}),(0,b.jsxs)("p",{children:["Vote average: ",U]}),(0,b.jsx)("nav",{children:(0,b.jsxs)("ul",{className:h,children:[(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{className:d,to:"/movies/".concat(n,"/cast"),onClick:function(){O(!0),C(!1)},state:a({},M.state),children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{className:d,to:"/movies/".concat(n,"/reviews"),onClick:function(){C(!0),O(!1)},state:a({},M.state),children:"Reviews"})})]})}),g&&(0,b.jsx)(m.default,{movieId:n}),D&&(0,b.jsx)(w.default,{movieId:n})]})})}},186:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),i=n.n(a),s=n(791),u=n(395),o=n(184);t.default=function(e){var t=e.movieId,n=(0,s.useState)([]),a=(0,c.Z)(n,2),f=a[0],l=a[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.tx)(t);case 2:n=e.sent,l(n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Reviews:"}),f.length>0?(0,o.jsx)("ul",{children:f.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))}):(0,o.jsx)("p",{children:"No reviews available."})]})}},395:function(e,t,n){n.d(t,{Df:function(){return u},TP:function(){return f},tx:function(){return p},z1:function(){return o},zv:function(){return l}});var r=n(861),c=n(757),a=n.n(c),i="996f90502411052111a97ebd41f1eb4e",s="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,n){function r(e,t,n,r,c,a,i){try{var s=e[a](i),u=s.value}catch(o){return void n(o)}s.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var i=e.apply(t,n);function s(e){r(i,c,a,s,u,"next",e)}function u(e){r(i,c,a,s,u,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=129.2bce250f.chunk.js.map