(function(e){function a(a){for(var i,r,o=a[0],l=a[1],c=a[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],i=!0,o=1;o<t.length;o++){var l=t[o];0!==s[l]&&(i=!1)}i&&(n.splice(a--,1),e=r(r.s=t[0]))}return e}var i={},s={app:0},n=[];function r(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)r.d(t,i,function(a){return e[a]}.bind(null,i));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/crud-autenticacion-usuarios-dependencias/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"174b":function(e,a,t){"use strict";var i=t("a659"),s=t.n(i);s.a},"39b9":function(e,a,t){},"4fda":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("Navigation")],1),t("router-view")],1)},n=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t("h3",{staticClass:"title is-3"},[e._v("MyApp")])]),t("a",{staticClass:"navbar-burger burger",class:{"is-active":e.isOpen},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(a){return a.preventDefault(),e.toggleMenu(a)}}},[t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}})])],1),t("div",{staticClass:"navbar-menu",class:{"is-active":e.isOpen},attrs:{id:"navbarBasicExample"}},[t("div",{staticClass:"navbar-start"},[t("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v(" Home ")])],1),t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item"},[e.user?[t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link"},[e._v(" "+e._s(e.user.displayName||e.user.email)+" ")]),t("div",{staticClass:"navbar-dropdown"},[t("router-link",{staticClass:"navbar-item",attrs:{to:"/dependencias"}},[e._v(" Dependencias ")]),t("router-link",{staticClass:"navbar-item",attrs:{to:"/usuarios"}},[e._v(" Usuarios ")]),t("a",{staticClass:"navbar-item",on:{click:function(a){return a.preventDefault(),e.logout(a)}}},[e._v(" Cerrar sesion ")])],1)])]:[t("div",{staticClass:"buttons"},[t("router-link",{staticClass:"button is-primary",attrs:{to:"/register"}},[t("strong",[e._v("Registrarme")])]),t("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[e._v(" Iniciar sesion ")])],1)]],2)])])])},o=[],l=t("8aa5"),c=t.n(l),u={data:function(){return{isOpen:!1,user:null}},methods:{toggleMenu:function(){var e=!this.isOpen;this.isOpen=e},logout:function(){var e=this;c.a.auth().signOut().then((function(){e.$router.push({name:"login"})}))}},created:function(){var e=this;c.a.auth().onAuthStateChanged((function(a){e.user=a||null}))}},d=u,p=t("2877"),v=Object(p["a"])(d,r,o,!1,null,null,null),m=v.exports,f={components:{Navigation:m}},b=f,h=(t("5c0b"),Object(p["a"])(b,s,n,!1,null,null,null)),C=h.exports,_=(t("45fc"),t("8c4f")),g=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",{staticClass:"title is-1",attrs:{align:"center"}},[e._v("¡Bienvenido al sistema!")])])}],w={name:"home",components:{}},y=w,A=(t("174b"),Object(p["a"])(y,g,x,!1,null,"5d5eedb2",null)),D=A.exports,N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Iniciar sesion")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.login(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Email")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Contraseña")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("Iniciar sesion")])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])},E=[],$={data:function(){return{email:"",password:"",error:"",prueba:{nombre:"p1",apellido:"p2"}}},name:"Login",methods:{login:function(){var e=this;this.error="",this.email&&this.password?c.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(a){console.log(a),e.$router.push({name:"dashboard",params:{mensaje:e.prueba}})})).catch((function(a){e.error=a.message})):this.error="Todos los campos son requeridos"}}},k=$,P=Object(p["a"])(k,N,E,!1,null,null,null),O=P.exports,j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Crear una cuenta")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombres")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.nombres,expression:"usuario.nombres"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith"},domProps:{value:e.usuario.nombres},on:{input:function(a){a.target.composing||e.$set(e.usuario,"nombres",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Apellidos")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.apellidos,expression:"usuario.apellidos"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.apellidos},on:{input:function(a){a.target.composing||e.$set(e.usuario,"apellidos",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Email")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.email,expression:"usuario.email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.email},on:{input:function(a){a.target.composing||e.$set(e.usuario,"email",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Contraseña")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.password,expression:"usuario.password"}],staticClass:"input",attrs:{type:"password",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.password},on:{input:function(a){a.target.composing||e.$set(e.usuario,"password",a.target.value)}}})])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("Registrarme")])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])},U=[],S={apiKey:"AIzaSyBqeJnN3IQdiOSLaZ3Vbgdn3dDniPvqwjs",authDomain:"crudautenticacion.firebaseapp.com",databaseURL:"https://crudautenticacion.firebaseio.com",projectId:"crudautenticacion",storageBucket:"crudautenticacion.appspot.com",messagingSenderId:"525866673441",appId:"1:525866673441:web:cb2dda10e5099b45d14a60"},R=c.a.initializeApp(S);R.firestore().settings({timestampsInSnapshots:!0});var B=R.firestore(),q={data:function(){return{name:"",email:"",password:"",error:"",ref:B.collection("users"),usuario:{}}},name:"Register",methods:{register:function(){var e=this;this.error="",this.usuario.nombres&&this.usuario.apellidos&&this.usuario.email&&this.usuario.password?c.a.auth().createUserWithEmailAndPassword(this.usuario.email,this.usuario.password).then((function(a){a&&e.ref.add(e.usuario).then((function(a){console.log(a),e.usuario.nombres="",e.usuario.apellidos="",e.usuario.email="",e.usuario.password="",e.$router.push({name:"dashboard"})}))})).catch((function(a){e.error=a.message})):this.error="Todos los campos son requeridos"}}},I=q,M=Object(p["a"])(I,j,U,!1,null,null,null),z=M.exports,L=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"tabs"},[t("ul",[t("li",{class:{"is-active":"pictures"==e.isActive}},[t("a",{on:{click:function(a){e.isActive="pictures"}}},[e._v("Crear Dependencia")])]),t("li",{class:{"is-active":"music"==e.isActive}},[t("a",{on:{click:function(a){e.isActive="music"}}},[e._v("Listar Dependencias")])])])]),t("div",{staticClass:"tab-contents"},[t("div",{staticClass:"content",class:{"is-active":"pictures"==e.isActive}},[t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Crear una dependencia")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombre dependencia")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencia.nombre,expression:"dependencia.nombre"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith"},domProps:{value:e.dependencia.nombre},on:{input:function(a){a.target.composing||e.$set(e.dependencia,"nombre",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Coordinador")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencia.coordinador,expression:"dependencia.coordinador"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.dependencia.coordinador},on:{input:function(a){a.target.composing||e.$set(e.dependencia,"coordinador",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Maximo numero de usuarios")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencia.maximo,expression:"dependencia.maximo"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.dependencia.maximo},on:{input:function(a){a.target.composing||e.$set(e.dependencia,"maximo",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Ubicación")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependencia.ubicacion,expression:"dependencia.ubicacion"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.dependencia.ubicacion},on:{input:function(a){a.target.composing||e.$set(e.dependencia,"ubicacion",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Activa?")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.dependencia.activa,expression:"dependencia.activa"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.dependencia,"activa",a.target.multiple?t:t[0])}}},[t("option",[e._v("Si")]),t("option",[e._v("No")])])])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("Crear")])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])]),t("div",{staticClass:"content",class:{"is-active":"music"==e.isActive}},[t("table",{staticClass:"table"},[e._m(0),t("tbody",e._l(e.dependencias,(function(a){return t("tr",{key:a.nombre},[t("td",[e._v(e._s(a.nombre))]),t("td",[e._v(e._s(a.coordinador))]),t("td",[e._v(e._s(a.maximo))]),t("td",[e._v(e._s(a.ubicacion))]),t("td",[e._v(e._s(a.activa))]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.detalle(a)}}},[e._v("Detalle")])]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.editar(a)}}},[e._v("Editar")])]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.eliminar(a)}}},[e._v("Eliminar")])])])})),0)]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])},T=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("Dependencia")]),t("th",[e._v("Coordinador")]),t("th",[e._v("Máximo # de usuarios")]),t("th",[e._v("Ubicación")]),t("th",[e._v("Activa")]),t("th",[e._v("Detalle")]),t("th",[e._v("Editar")]),t("th",[e._v("Eliminar")])])])}],V=(t("4160"),t("a434"),t("159b"),t("96cf"),t("1da1")),J={data:function(){return{isActive:"pictures",ref:B.collection("dependencias"),dependencia:{nombre:"",coordinador:"",maximo:"",ubicacion:"",activa:!1,users:[]},dependencias:[],error:""}},name:"Dependencias",created:function(){this.listarDependencias()},methods:{listarDependencias:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.ref.get();case 3:t=a.sent,e.dependencias.splice(0,e.dependencias.length),t.forEach((function(a){var t={id:a.id,nombre:a.data().nombre,coordinador:a.data().coordinador,maximo:a.data().maximo,ubicacion:a.data().ubicacion,activa:a.data().activa,users:a.data().users};e.dependencias.push(t)})),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},register:function(){var e=this;this.error="",this.dependencia.nombre&&this.dependencia.coordinador&&this.dependencia.maximo&&this.dependencia.ubicacion?("Si"===this.dependencia.activa?this.dependencia.activa=!0:this.dependencia.activa=!1,this.ref.add(this.dependencia).then((function(a){console.log(a),e.dependencia.nombre="",e.dependencia.coordinador="",e.dependencia.maximo="",e.dependencia.ubicacion="",e.dependencia.activa=""})),this.listarDependencias()):this.error="Todos los campos son requeridos"},detalle:function(e){this.$router.push({name:"detalle",params:{dependenciaactual:e}})},editar:function(e){this.$router.push({name:"editar",params:{dependenciaactual:e}})},eliminar:function(e){console.log(e),0===e.users.length?(console.log("Se puede eliminar"),this.ref.doc(e.id).delete(),this.listarDependencias()):this.error="Tiene usuarios asociados"}},props:{mensaje:{}}},W=J,H=(t("80ad"),Object(p["a"])(W,L,T,!1,null,"79bd7529",null)),K=H.exports,Q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"tabs"},[t("ul",[t("li",{class:{"is-active":"pictures"==e.isActive}},[t("a",{on:{click:function(a){e.isActive="pictures"}}},[e._v("Crear Usuarios")])]),t("li",{class:{"is-active":"music"==e.isActive}},[t("a",{on:{click:function(a){e.isActive="music"}}},[e._v("Listar Usuarios")])])])]),t("div",{staticClass:"tab-contents"},[t("div",{staticClass:"content",class:{"is-active":"pictures"==e.isActive}},[t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Crear un usuario")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombres")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.nombres,expression:"usuario.nombres"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith"},domProps:{value:e.usuario.nombres},on:{input:function(a){a.target.composing||e.$set(e.usuario,"nombres",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Apellidos")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.apellidos,expression:"usuario.apellidos"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.apellidos},on:{input:function(a){a.target.composing||e.$set(e.usuario,"apellidos",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Email")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.email,expression:"usuario.email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.email},on:{input:function(a){a.target.composing||e.$set(e.usuario,"email",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Contraseña")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.password,expression:"usuario.password"}],staticClass:"input",attrs:{type:"password",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.password},on:{input:function(a){a.target.composing||e.$set(e.usuario,"password",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Valido hasta")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.validohasta,expression:"usuario.validohasta"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:e.usuario.validohasta},on:{input:function(a){a.target.composing||e.$set(e.usuario,"validohasta",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Dependencia")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.usuario.dependencia,expression:"usuario.dependencia"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.usuario,"dependencia",a.target.multiple?t:t[0])}}},e._l(e.dependencias,(function(a){return t("option",{key:a.id},[e._v(e._s(a.nombre))])})),0)])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Activo")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.usuario.activo,expression:"usuario.activo"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.usuario,"activo",a.target.multiple?t:t[0])}}},[t("option",[e._v("Si")]),t("option",[e._v("No")])])])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),e.register()}}},[e._v("Crear")])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])]),t("div",{staticClass:"content",class:{"is-active":"music"==e.isActive}},[t("div",{staticClass:"field has-addons has-addons-centered"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Por ejemplo Andrés"},domProps:{value:e.search},on:{input:function(a){a.target.composing||(e.search=a.target.value)}}})]),t("p",{staticClass:"control"},[t("a",{staticClass:"button is-primary",on:{click:function(a){return a.preventDefault(),e.filtrarUsuariosN()}}},[e._v(" Buscar por nombre ")])])]),t("div",{staticClass:"field has-addons has-addons-centered"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchd,expression:"searchd"}],staticClass:"input",attrs:{type:"text",placeholder:"Por ejemplo Ventas"},domProps:{value:e.searchd},on:{input:function(a){a.target.composing||(e.searchd=a.target.value)}}})]),t("p",{staticClass:"control"},[t("a",{staticClass:"button is-primary",on:{click:function(a){return a.preventDefault(),e.filtrarUsuariosD()}}},[e._v(" Buscar por dependencia ")])])]),t("table",{staticClass:"table"},[e._m(0),this.usuariosBuscados.length>0?t("tbody",e._l(e.usuariosBuscados,(function(a){return t("tr",{key:a.email},[t("td",[e._v(e._s(a.nombres))]),t("td",[e._v(e._s(a.apellidos))]),t("td",[e._v(e._s(a.email))]),t("td",[e._v(e._s(a.dependencia))]),t("td",[e._v(e._s(a.validohasta))]),t("td",[e._v(e._s(a.activo))]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.editar(a)}}},[e._v("Editar")])]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.eliminar(a)}}},[e._v("Eliminar")])])])})),0):e._e(),0==this.usuariosBuscados.length?t("tbody",e._l(e.usuarios,(function(a){return t("tr",{key:a.email},[t("td",[e._v(e._s(a.nombres))]),t("td",[e._v(e._s(a.apellidos))]),t("td",[e._v(e._s(a.email))]),t("td",[e._v(e._s(a.dependencia))]),t("td",[e._v(e._s(a.validohasta))]),t("td",[e._v(e._s(a.activo))]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.editar(a)}}},[e._v("Editar")])]),t("td",[t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.eliminar(a)}}},[e._v("Eliminar")])])])})),0):e._e()])])])])},Z=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("Nombres")]),t("th",[e._v("Apellidos")]),t("th",[e._v("Email")]),t("th",[e._v("Dependencia")]),t("th",[e._v("Valido hasta")]),t("th",[e._v("Activo")]),t("th",[e._v("Editar")]),t("th",[e._v("Eliminar")])])])}],F=(t("4de4"),t("7db0"),t("caad"),t("ac1f"),t("2532"),t("841c"),{data:function(){return{isActive:"pictures",ref:B.collection("users"),usuario:{},usuarios:[],dependencias:[],dependenciatemp:"",error:"",search:"",searchd:"",usuariosBuscados:[]}},name:"Usuarios",created:function(){this.listarDependencias(),this.listarUsuarios()},methods:{filtrarUsuariosN:function(){var e=this;this.usuariosBuscados=this.usuarios.filter((function(a){return a.nombres.toLowerCase().includes(e.search.toLowerCase())}))},filtrarUsuariosD:function(){var e=this;this.usuariosBuscados=this.usuarios.filter((function(a){return a.dependencia.toLowerCase().includes(e.searchd.toLowerCase())}))},listarDependencias:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B.collection("dependencias").get();case 3:t=a.sent,t.forEach((function(a){var t={id:a.id,nombre:a.data().nombre,coordinador:a.data().coordinador,maximo:a.data().maximo,ubicacion:a.data().ubicacion,activa:a.data().activa,users:a.data().users};console.log(e.dependencias),e.dependencias.push(t)})),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},listarUsuarios:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B.collection("users").get();case 3:t=a.sent,e.usuarios.splice(0,e.usuarios.length),t.forEach((function(a){var t={id:a.id,nombres:a.data().nombres,apellidos:a.data().apellidos,email:a.data().email,password:a.data().password,dependencia:a.data().dependencia,validohasta:a.data().validohasta,activo:a.data().activo};e.usuarios.push(t)})),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},register:function(){var e=this;this.error="",this.usuario.nombres&&this.usuario.apellidos&&this.usuario.email&&this.usuario.password?c.a.auth().createUserWithEmailAndPassword(this.usuario.email,this.usuario.password).then((function(a){if(a){e.dependenciatemp=e.dependencias.find((function(a){return a.nombre===e.usuario.dependencia})),e.dependenciatemp.users.push({nombre:e.usuario.nombres,apellido:e.usuario.apellidos,email:e.usuario.email});var t=B.collection("dependencias").doc(e.dependenciatemp.id);t.set(e.dependenciatemp).then((function(e){console.log(e)})),e.ref.add(e.usuario).then((function(a){console.log(a),e.usuario.nombres="",e.usuario.apellidos="",e.usuario.email="",e.usuario.password="",e.usuario.validohasta="",e.usuario.dependencia="",e.usuario.activo=""})),e.listarUsuarios()}})).catch((function(a){e.error=a.message})):this.error="Todos los campos son requeridos"},editar:function(e){this.$router.push({name:"editarusr",params:{usractual:e}})},eliminar:function(e){this.ref.doc(e.id).delete(),this.listarUsuarios()}}}),G=F,X=(t("e2a8"),Object(p["a"])(G,Q,Z,!1,null,"79d854c1",null)),Y=X.exports,ee=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Información dependencia")]),t("hr"),t("form",{attrs:{action:"#"}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombre dependencia")]),t("div",{staticClass:"control"},[t("span",[e._v(e._s(e.dependenciaactual.nombre))])])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Coordinador")]),t("div",{staticClass:"control"},[t("span",[e._v(e._s(e.dependenciaactual.coordinador))])])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Máximo numero de usuarios")]),t("div",{staticClass:"control"},[t("span",[e._v(e._s(e.dependenciaactual.maximo))])])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Ubicacion")]),t("div",{staticClass:"control"},[t("span",[e._v(e._s(e.dependenciaactual.ubicacion))])])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Activa")]),t("div",{staticClass:"control"},[t("span",[e._v(e._s(e.dependenciaactual.activa))])])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Usuarios asociados")]),t("div",{staticClass:"control"},[t("table",{staticClass:"table"},[e._m(0),t("tbody",e._l(e.dependenciaactual.users,(function(a){return t("tr",{key:a.email},[t("td",[e._v(e._s(a.nombre))]),t("td",[e._v(e._s(a.apellido))]),t("td",[e._v(e._s(a.email))])])})),0)])])])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])},ae=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("Nombre")]),t("th",[e._v("Apellido")]),t("th",[e._v("Email")])])])}],te={data:function(){return{}},name:"Detalle",props:{dependenciaactual:{}}},ie=te,se=Object(p["a"])(ie,ee,ae,!1,null,null,null),ne=se.exports,re=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Editar dependencia")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombre dependencia")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependenciaactual.nombre,expression:"dependenciaactual.nombre"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.dependenciaactual.nombre},on:{input:function(a){a.target.composing||e.$set(e.dependenciaactual,"nombre",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Coordinador")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependenciaactual.coordinador,expression:"dependenciaactual.coordinador"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.dependenciaactual.coordinador},on:{input:function(a){a.target.composing||e.$set(e.dependenciaactual,"coordinador",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Máximo número de usuarios")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependenciaactual.maximo,expression:"dependenciaactual.maximo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.dependenciaactual.maximo},on:{input:function(a){a.target.composing||e.$set(e.dependenciaactual,"maximo",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Ubicación")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dependenciaactual.ubicacion,expression:"dependenciaactual.ubicacion"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.dependenciaactual.ubicacion},on:{input:function(a){a.target.composing||e.$set(e.dependenciaactual,"ubicacion",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("¿Dependencia activa?")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.dependenciaactual.activa,expression:"dependenciaactual.activa"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.dependenciaactual,"activa",a.target.multiple?t:t[0])}}},[t("option",[e._v("Si")]),t("option",[e._v("No")])])])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),e.actualizarDependencia(e.dependenciaactual)}}},[e._v("Actualizar dependencia")])]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])},oe=[],le={data:function(){return{error:"",listdepen:[]}},created:function(){this.misdependencias()},name:"Editar",props:{dependenciaactual:{}},methods:{misdependencias:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,B.collection("dependencias").get();case 2:t=a.sent,t.forEach((function(a){var t={id:a.id,nombre:a.data().nombre,coordinador:a.data().coordinador,maximo:a.data().maximo,ubicacion:a.data().ubicacion,activa:a.data().activa};e.listdepen.push(t)}));case 4:case"end":return a.stop()}}),a)})))()},actualizarDependencia:function(e){var a=B.collection("dependencias").doc(e.id);a.set({nombre:e.nombre,coordinador:e.coordinador,maximo:e.maximo,ubicacion:e.ubicacion,activa:e.activa}),e.nombre="",e.coordinador="",e.maximo="",e.ubicacion="",e.activa="",alert("¡La dependencia se ha actualizado con exito! \nDirijase a la lista de dependencias para ver los cambios.")}}},ce=le,ue=Object(p["a"])(ce,re,oe,!1,null,null,null),de=ue.exports,pe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-50"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("h3",{staticClass:"title is-3"},[e._v("Editar usuario")]),t("hr"),t("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Nombres")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usractual.nombres,expression:"usractual.nombres"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.usractual.nombres},on:{input:function(a){a.target.composing||e.$set(e.usractual,"nombres",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Apellidos")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usractual.apellidos,expression:"usractual.apellidos"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.usractual.apellidos},on:{input:function(a){a.target.composing||e.$set(e.usractual,"apellidos",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("E-mail")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usractual.email,expression:"usractual.email"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.usractual.email},on:{input:function(a){a.target.composing||e.$set(e.usractual,"email",a.target.value)}}})])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Dependencia")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.usractual.dependencia,expression:"usractual.dependencia"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.usractual,"dependencia",a.target.multiple?t:t[0])}}},e._l(e.dependencias,(function(a){return t("option",{key:a.id},[e._v(e._s(a.nombre))])})),0)])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("¿Activo?")]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.usractual.activo,expression:"usractual.activo"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.usractual,"activo",a.target.multiple?t:t[0])}}},[t("option",[e._v("Si")]),t("option",[e._v("No")])])])]),t("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),e.actualizarUsuario(e.usractual)}}},[e._v("Actualizar usuario")]),e.error?t("div",{staticClass:"notification is-danger mt-10"},[e._v(" "+e._s(e.error)+" ")]):e._e()])])])])},ve=[],me={data:function(){return{error:"",dependencias:[],listusers:[]}},name:"Editarusr",props:{usractual:{}},created:function(){this.misDependencias(),this.misUsuarios()},methods:{misDependencias:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B.collection("dependencias").get();case 3:t=a.sent,t.forEach((function(a){var t={id:a.id,nombre:a.data().nombre,coordinador:a.data().coordinador,maximo:a.data().maximo,ubicacion:a.data().ubicacion,activa:a.data().activa,users:a.data().users};console.log(e.dependencias),e.dependencias.push(t),console.log(e.dependencias)})),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},misUsuarios:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,B.collection("users").get();case 2:t=a.sent,t.forEach((function(a){var t={id:a.id,nombres:a.data().nombres,apellidos:a.data().apellidos,email:a.data().email,password:a.data().dependencia,activo:a.data().activo};e.listusers.push(t)}));case 4:case"end":return a.stop()}}),a)})))()},actualizarUsuario:function(e){var a=B.collection("users").doc(e.id);a.set({nombres:e.nombres,apellidos:e.apellidos,email:e.email,dependencia:e.dependencia}),e.nombres="",e.apellidos="",e.email="",e.dependencia="",alert("¡El usuario se ha actualizado con exito! \nDirijase a la lista de usuarios para ver los cambios.")}}},fe=me,be=Object(p["a"])(fe,pe,ve,!1,null,null,null),he=be.exports;i["a"].use(_["a"]);var Ce=new _["a"]({routes:[{path:"/",name:"home",component:D},{path:"/login",name:"login",component:O},{path:"/register",name:"register",component:z},{path:"/dependencias",name:"dependencias",component:K,props:!0,meta:{requiresAuth:!0}},{path:"/detalle",name:"detalle",component:ne,props:!0,meta:{requiresAuth:!0}},{path:"/editar",name:"editar",component:de,props:!0,meta:{requiresAuth:!0}},{path:"/editarusr",name:"editarusr",component:he,props:!0,meta:{requiresAuth:!0}},{path:"/usuarios",name:"usuarios",component:Y,meta:{requiresAuth:!0}}]});Ce.beforeEach((function(e,a,t){if(e.matched.some((function(e){return e.meta.requiresAuth}))){var i=c.a.auth().currentUser;i?t():t({name:"login"})}else t()}));var _e=Ce;i["a"].config.productionTip=!1;var ge=null;c.a.auth().onAuthStateChanged((function(){ge||(ge=new i["a"]({router:_e,render:function(e){return e(C)}}).$mount("#app"))}))},"5c0b":function(e,a,t){"use strict";var i=t("9c0c"),s=t.n(i);s.a},"80ad":function(e,a,t){"use strict";var i=t("4fda"),s=t.n(i);s.a},"9c0c":function(e,a,t){},a659:function(e,a,t){},e2a8:function(e,a,t){"use strict";var i=t("39b9"),s=t.n(i);s.a}});
//# sourceMappingURL=app.4887a261.js.map