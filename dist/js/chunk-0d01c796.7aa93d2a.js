(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d01c796"],{"36fe":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const a=e=>(Object(l["B"])("data-v-dbc03842"),e=e(),Object(l["z"])(),e),o={class:"grid"},i={class:"col-12"},d={class:"card"},s={class:"my-2"},r={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},n=a(()=>Object(l["j"])("h5",{class:"m-0"},"Devices",-1)),u={class:"block mt-2 md:mt-0 p-input-icon-left"},b=a(()=>Object(l["j"])("i",{class:"pi pi-search"},null,-1)),j=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Name",-1)),p=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Image",-1)),m=["src","alt"],O=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Active",-1)),h=a(()=>Object(l["j"])("span",{class:"p-column-title"},"battarey",-1)),y=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Signal",-1)),g=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Sensor",-1)),f=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Stick",-1)),v=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Uptime",-1)),S=a(()=>Object(l["j"])("span",{class:"p-column-title"},"Zapas",-1)),w=a(()=>Object(l["j"])("span",{class:"p-column-title"},"UpdateTime",-1)),P=a(()=>Object(l["j"])("span",{class:"p-column-title"},"CreatedAt",-1)),k=["src","alt"],C={class:"field"},D=a(()=>Object(l["j"])("label",{for:"name"},"Name",-1)),V={key:0,class:"p-invalid"},x={class:"field"},U=a(()=>Object(l["j"])("label",{for:"description"},"Description",-1)),Q={class:"field"},K=a(()=>Object(l["j"])("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1)),_={key:0},I={key:1},T={key:2},N={class:"field"},L=a(()=>Object(l["j"])("label",{class:"mb-3"},"Category",-1)),G={class:"formgrid grid"},A={class:"field-radiobutton col-6"},F=a(()=>Object(l["j"])("label",{for:"category1"},"Accessories",-1)),q={class:"field-radiobutton col-6"},B=a(()=>Object(l["j"])("label",{for:"category2"},"Clothing",-1)),z={class:"field-radiobutton col-6"},M=a(()=>Object(l["j"])("label",{for:"category3"},"Electronics",-1)),R={class:"field-radiobutton col-6"},$=a(()=>Object(l["j"])("label",{for:"category4"},"Fitness",-1)),E={class:"formgrid grid"},J={class:"field col"},W=a(()=>Object(l["j"])("label",{for:"price"},"Price",-1)),Y={class:"field col"},Z=a(()=>Object(l["j"])("label",{for:"quantity"},"Quantity",-1)),H={class:"flex align-items-center justify-content-center"},X=a(()=>Object(l["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),ee={key:0},te=Object(l["l"])("Are you sure you want to delete "),ce=Object(l["l"])("?"),le={class:"flex align-items-center justify-content-center"},ae=a(()=>Object(l["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),oe={key:0};function ie(e,t,c,a,ie,de){const se=Object(l["G"])("Toast"),re=Object(l["G"])("Button"),ne=Object(l["G"])("FileUpload"),ue=Object(l["G"])("Toolbar"),be=Object(l["G"])("InputText"),je=Object(l["G"])("Column"),pe=Object(l["G"])("DataTable"),me=Object(l["G"])("Textarea"),Oe=Object(l["G"])("Dropdown"),he=Object(l["G"])("RadioButton"),ye=Object(l["G"])("InputNumber"),ge=Object(l["G"])("Dialog");return Object(l["y"])(),Object(l["i"])("div",o,[Object(l["j"])("div",i,[Object(l["j"])("div",d,[Object(l["m"])(se),Object(l["m"])(ue,{class:"mb-4"},{start:Object(l["Q"])(()=>[Object(l["j"])("div",s,[Object(l["m"])(re,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:de.openNew},null,8,["onClick"]),Object(l["m"])(re,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:de.confirmDeleteSelected,disabled:!ie.selectedProducts||!ie.selectedProducts.length},null,8,["onClick","disabled"])])]),end:Object(l["Q"])(()=>[Object(l["m"])(ne,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),Object(l["m"])(re,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:t[0]||(t[0]=e=>de.exportCSV(e))})]),_:1}),Object(l["m"])(pe,{ref:"dt",value:ie.products,selection:ie.selectedProducts,"onUpdate:selection":t[2]||(t[2]=e=>ie.selectedProducts=e),dataKey:"id",paginator:!0,rows:10,filters:ie.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(l["Q"])(()=>[Object(l["j"])("div",r,[n,Object(l["j"])("span",u,[b,Object(l["m"])(be,{modelValue:ie.filters["global"].value,"onUpdate:modelValue":t[1]||(t[1]=e=>ie.filters["global"].value=e),placeholder:"Search..."},null,8,["modelValue"])])])]),default:Object(l["Q"])(()=>[Object(l["m"])(je,{selectionMode:"multiple",headerStyle:"width: 3rem"}),Object(l["m"])(je,{field:"code",header:"Device name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[j,Object(l["l"])(" "+Object(l["K"])(e.data.name),1)]),_:1}),Object(l["m"])(je,{header:"Device Image",headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[p,Object(l["j"])("img",{src:"images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,m)]),_:1}),Object(l["m"])(je,{field:"inventoryStatus",header:"Active",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[O,Object(l["j"])("span",{class:Object(l["t"])("product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():""))},Object(l["K"])(e.data.inventoryStatus),3)]),_:1}),Object(l["m"])(je,{field:"name",header:"Battarey",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[h,Object(l["l"])(" "+Object(l["K"])(e.data.battarey),1)]),_:1}),Object(l["m"])(je,{field:"price",header:"Signal",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(l["Q"])(e=>[y,Object(l["l"])(" "+Object(l["K"])(e.data.signal),1)]),_:1}),Object(l["m"])(je,{field:"price",header:"Sensor",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(l["Q"])(e=>[g,Object(l["l"])(" "+Object(l["K"])(e.data.sensor),1)]),_:1}),Object(l["m"])(je,{field:"price",header:"Stick",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(l["Q"])(e=>[f,Object(l["l"])(" "+Object(l["K"])(e.data.stick),1)]),_:1}),Object(l["m"])(je,{field:"price",header:"Uptime",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(l["Q"])(e=>[v,Object(l["l"])(" "+Object(l["K"])(e.data.uptime),1)]),_:1}),Object(l["m"])(je,{field:"price",header:"Zapas",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(l["Q"])(e=>[S,Object(l["l"])(" "+Object(l["K"])(e.data.zapas),1)]),_:1}),Object(l["m"])(je,{field:"name",header:"UpdateTime",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[w,Object(l["l"])(" "+Object(l["K"])(e.data.updatetime),1)]),_:1}),Object(l["m"])(je,{field:"name",header:"CreatedAt",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(l["Q"])(e=>[P,Object(l["l"])(" "+Object(l["K"])(e.data.createdat),1)]),_:1}),Object(l["m"])(je,{headerStyle:"min-width:10rem;"},{body:Object(l["Q"])(e=>[Object(l["m"])(re,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>de.editProduct(e.data)},null,8,["onClick"]),Object(l["m"])(re,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:t=>de.confirmDeleteProduct(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","filters"]),Object(l["m"])(ge,{visible:ie.productDialog,"onUpdate:visible":t[12]||(t[12]=e=>ie.productDialog=e),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:Object(l["Q"])(()=>[Object(l["m"])(re,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:de.hideDialog},null,8,["onClick"]),Object(l["m"])(re,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:de.saveProduct},null,8,["onClick"])]),default:Object(l["Q"])(()=>[ie.product.image?(Object(l["y"])(),Object(l["i"])("img",{key:0,src:"images/product/"+ie.product.image,alt:ie.product.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,k)):Object(l["h"])("",!0),Object(l["j"])("div",C,[D,Object(l["m"])(be,{id:"name",modelValue:ie.product.name,"onUpdate:modelValue":t[3]||(t[3]=e=>ie.product.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(l["t"])({"p-invalid":ie.submitted&&!ie.product.name})},null,8,["modelValue","class"]),ie.submitted&&!ie.product.name?(Object(l["y"])(),Object(l["i"])("small",V,"Name is required.")):Object(l["h"])("",!0)]),Object(l["j"])("div",x,[U,Object(l["m"])(me,{id:"description",modelValue:ie.product.description,"onUpdate:modelValue":t[4]||(t[4]=e=>ie.product.description=e),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),Object(l["j"])("div",Q,[K,Object(l["m"])(Oe,{id:"inventoryStatus",modelValue:ie.product.inventoryStatus,"onUpdate:modelValue":t[5]||(t[5]=e=>ie.product.inventoryStatus=e),options:ie.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:Object(l["Q"])(e=>[e.value&&e.value.value?(Object(l["y"])(),Object(l["i"])("div",_,[Object(l["j"])("span",{class:Object(l["t"])("product-badge status-"+e.value.value)},Object(l["K"])(e.value.label),3)])):e.value&&!e.value.value?(Object(l["y"])(),Object(l["i"])("div",I,[Object(l["j"])("span",{class:Object(l["t"])("product-badge status-"+e.value.toLowerCase())},Object(l["K"])(e.value),3)])):(Object(l["y"])(),Object(l["i"])("span",T,Object(l["K"])(e.placeholder),1))]),_:1},8,["modelValue","options"])]),Object(l["j"])("div",N,[L,Object(l["j"])("div",G,[Object(l["j"])("div",A,[Object(l["m"])(he,{id:"category1",name:"category",value:"Accessories",modelValue:ie.product.category,"onUpdate:modelValue":t[6]||(t[6]=e=>ie.product.category=e)},null,8,["modelValue"]),F]),Object(l["j"])("div",q,[Object(l["m"])(he,{id:"category2",name:"category",value:"Clothing",modelValue:ie.product.category,"onUpdate:modelValue":t[7]||(t[7]=e=>ie.product.category=e)},null,8,["modelValue"]),B]),Object(l["j"])("div",z,[Object(l["m"])(he,{id:"category3",name:"category",value:"Electronics",modelValue:ie.product.category,"onUpdate:modelValue":t[8]||(t[8]=e=>ie.product.category=e)},null,8,["modelValue"]),M]),Object(l["j"])("div",R,[Object(l["m"])(he,{id:"category4",name:"category",value:"Fitness",modelValue:ie.product.category,"onUpdate:modelValue":t[9]||(t[9]=e=>ie.product.category=e)},null,8,["modelValue"]),$])])]),Object(l["j"])("div",E,[Object(l["j"])("div",J,[W,Object(l["m"])(ye,{id:"price",modelValue:ie.product.price,"onUpdate:modelValue":t[10]||(t[10]=e=>ie.product.price=e),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),Object(l["j"])("div",Y,[Z,Object(l["m"])(ye,{id:"quantity",modelValue:ie.product.quantity,"onUpdate:modelValue":t[11]||(t[11]=e=>ie.product.quantity=e),integeronly:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),Object(l["m"])(ge,{visible:ie.deleteProductDialog,"onUpdate:visible":t[14]||(t[14]=e=>ie.deleteProductDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(l["Q"])(()=>[Object(l["m"])(re,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[13]||(t[13]=e=>ie.deleteProductDialog=!1)}),Object(l["m"])(re,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:de.deleteProduct},null,8,["onClick"])]),default:Object(l["Q"])(()=>[Object(l["j"])("div",H,[X,ie.product?(Object(l["y"])(),Object(l["i"])("span",ee,[te,Object(l["j"])("b",null,Object(l["K"])(ie.product.name),1),ce])):Object(l["h"])("",!0)])]),_:1},8,["visible"]),Object(l["m"])(ge,{visible:ie.deleteProductsDialog,"onUpdate:visible":t[16]||(t[16]=e=>ie.deleteProductsDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(l["Q"])(()=>[Object(l["m"])(re,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[15]||(t[15]=e=>ie.deleteProductsDialog=!1)}),Object(l["m"])(re,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:de.deleteSelectedProducts},null,8,["onClick"])]),default:Object(l["Q"])(()=>[Object(l["j"])("div",le,[ae,ie.product?(Object(l["y"])(),Object(l["i"])("span",oe,"Are you sure you want to delete the selected products?")):Object(l["h"])("",!0)])]),_:1},8,["visible"])])])])}var de=c("0393"),se=c("e9c0"),re={data(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}},productService:null,created(){this.productService=new se["a"],this.initFilters()},mounted(){this.productService.getProducts().then(e=>this.products=e)},methods:{formatCurrency(e){if(e)return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog(){this.productDialog=!1,this.submitted=!1},saveProduct(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct(e){this.product={...e},this.productDialog=!0},confirmDeleteProduct(e){this.product=e,this.deleteProductDialog=!0},deleteProduct(){this.products=this.products.filter(e=>e.id!==this.product.id),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById(e){let t=-1;for(let c=0;c<this.products.length;c++)if(this.products[c].id===e){t=c;break}return t},createId(){let e="";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<5;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},exportCSV(){this.$refs.dt.exportCSV()},confirmDeleteSelected(){this.deleteProductsDialog=!0},deleteSelectedProducts(){this.products=this.products.filter(e=>!this.selectedProducts.includes(e)),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},initFilters(){this.filters={global:{value:null,matchMode:de["a"].CONTAINS}}}}},ne=(c("fb7e"),c("6b0d")),ue=c.n(ne);const be=ue()(re,[["render",ie],["__scopeId","data-v-dbc03842"]]);t["default"]=be},bd17:function(e,t,c){},e9c0:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));class l{getProductsSmall(){return fetch("data/products-small.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall2(){return fetch("data/products-small2.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall3(){return fetch("data/products-small3.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall4(){return fetch("data/products-small4.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall5(){return fetch("data/products-small5.json").then(e=>e.json()).then(e=>e.data)}getProducts(){return fetch("data/products.json").then(e=>e.json()).then(e=>e.data)}getSetting(){return fetch("data/setting.json").then(e=>e.json()).then(e=>e.data)}getProductsWithOrdersSmall(){return fetch("data/products-orders-small.json").then(e=>e.json()).then(e=>e.data)}}},fb7e:function(e,t,c){"use strict";c("bd17")}}]);
//# sourceMappingURL=chunk-0d01c796.7aa93d2a.js.map