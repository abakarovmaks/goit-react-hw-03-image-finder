(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={header:"Searchbar_header__1xvId",form:"Searchbar_form__3GDlH",input:"Searchbar_input__fR0Ub",button:"Searchbar_button__2-PA9"}},13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3to7v",content:"Modal_content__3a0fl",closeIcon:"Modal_closeIcon__2FHwq"}},16:function(e,t,a){e.exports={item:"ImageGalleryItem_item__24nWI",image:"ImageGalleryItem_image__OnRa_",closeIcon:"ImageGalleryItem_closeIcon__3LUrG"}},17:function(e,t,a){e.exports={image:"ImageGalleryView_image__1GZw0",spinner:"ImageGalleryView_spinner__36CmV"}},19:function(e,t,a){e.exports={container:"Container_container__3e1Mh"}},21:function(e,t,a){e.exports={button:"Button_button__uv1mz"}},24:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1ml0V"}},30:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),c=a.n(r),i=a(4),o=a.n(i),s=(a(30),a(5)),l=a(6),u=a(8),d=a(7),h=a(9),m=(a(31),a(19)),p=a.n(m);function g(e){var t=e.children;return Object(n.jsx)("div",{className:p.a.container,children:t})}var b=a(20),f=a(0),j=a(10),v=a.n(j),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleInput=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.value.toLowerCase().trim();if(""===t)return h.b.error("Please enter a query"),void n.button.current.blur();n.props.getSearchQuery(t),n.setState({value:""}),n.button.current.blur()},n.button=c.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:v.a.header,children:Object(n.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:v.a.button,ref:this.button,children:Object(n.jsx)(f.b.Provider,{value:{size:"16px"},children:Object(n.jsx)(b.a,{})})}),Object(n.jsx)("input",{className:v.a.input,type:"text",value:this.state.value,placeholder:"Search images and photos",onChange:this.handleInput})]})})}}]),a}(r.Component),O=a(21),x=a.n(O);function I(e){var t=e.updatePage;return Object(n.jsx)("button",{className:x.a.button,onClick:t,children:"Load more"})}var _=a(18),S=a(22),M=a.n(S),k=a(12),w=a.n(k),P=a(11),C=a.n(P),A=a(15),N="19178590-f2f628b09a5664f3e2bf6a47d",Q="https://pixabay.com/api/";function G(){return(G=Object(A.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Q,"?q=").concat(t,"&page=").concat(a,"&key=").concat(N,"&image_type=photo&orientation=horizontal&per_page=12"),e.abrupt("return",R(n).then((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return E.apply(this,arguments)}function E(){return(E=Object(A.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={fetchImages:function(e,t){return G.apply(this,arguments)}},U=a.p+"static/media/findSomething.7f5b1b23.png",q=a.p+"static/media/error.5fb203fb.jpg",B=a(23),H=a(13),z=a.n(H),D=document.querySelector("#modal-root"),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleModalCloseOnEsc=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e.handleBtnClick=function(){e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleModalCloseOnEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleModalCloseOnEsc)}},{key:"render",value:function(){return Object(i.createPortal)(Object(n.jsx)("div",{className:z.a.backdrop,onClick:this.handleBackdropClick,children:Object(n.jsxs)("div",{className:z.a.content,children:[Object(n.jsx)("button",{className:z.a.closeIcon,onClick:this.handleBtnClick,children:Object(n.jsx)(f.b.Provider,{value:{size:"50px"},children:Object(n.jsx)(B.a,{})})}),this.props.children]})}),D)}}]),a}(r.Component),F=a(24),J=a.n(F),T=a(16),W=a.n(T);function Z(e){var t=e.image,a=e.imageModal;return Object(n.jsx)("li",{className:W.a.item,children:Object(n.jsx)(w.a,{src:t.webformatURL,placeholder:t.previewURL,children:function(e){return Object(n.jsx)("img",{src:e,alt:t.tags,"data-image":t.largeImageURL,className:W.a.image,onClick:a})}})})}function K(e){var t=e.images,a=e.imageModal;return Object(n.jsx)("ul",{className:J.a.gallery,children:t&&t.map((function(e){return Object(n.jsx)(Z,{image:e,imageModal:a},e.id)}))})}var X=a(17),Y=a.n(X),$="idle",ee="pending",te="resolved",ae="rejected",ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:null,totalSearchResults:null,error:null,status:$,modalIsOpen:!1,imageInModal:"",activeImage:""},e.updateImageAvialability=function(){if(e.state.images){var t=e.state.totalSearchResults>e.state.images.length;e.props.updateImageAvialability(t)}else e.props.updateImageAvialability(!1)},e.renderNewSearchQuery=function(t,a){e.props.resetPage(),e.setState({images:null,status:ee}),e.props.updateImageAvialability(!1),L.fetchImages(t,a).then((function(a){return 0===a.totalHits?(h.b.error("No images for ".concat(t,". Please try another query.")),void e.setState({status:ae})):0===a.hits.length?(h.b.error("Oops! Please refresh page & try again."),void e.setState({status:ae})):void e.setState({images:a.hits,totalSearchResults:a.totalHits,status:te})})).catch((function(t){return e.setState({error:t,status:ae})})).finally((function(t){e.updateImageAvialability()}))},e.renderMorePages=function(t,a){e.props.updateImageAvialability(!1),L.fetchImages(t,a).then((function(t){e.setState((function(e){return{images:[].concat(Object(_.a)(e.images),Object(_.a)(t.hits))}}))})).catch((function(t){return e.setState({error:t,status:ae})})).finally((function(t){window.scrollTo({top:document.documentElement.scrollHeight-1200,behavior:"smooth"}),e.updateImageAvialability()}))},e.toggleModal=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,imageInModal:"",activeImage:""}}))},e.imageModal=function(t){e.toggleModal(),e.setState((function(e){return{imageInModal:e.imageInModal?"":t.target.dataset.image,activeImage:e.activeImage?"":t.target.src}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){var t=e.searchQuery,a=this.props.searchQuery,n=e.page,r=this.props.page;t!==a&&this.renderNewSearchQuery(a,r),n!==r&&n<r&&this.renderMorePages(a,r)}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.modalIsOpen,r=e.imageInModal,c=e.activeImage,i=e.images;return t===$?Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:U,alt:"Please enter a query"})}):t===ee?Object(n.jsx)(M.a,{className:Y.a.spinner,type:"Circles",color:"orange",height:250,width:250,timeout:3e3}):t===ae?Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:q,alt:"error"})}):t===te?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(K,{images:i,imageModal:this.imageModal}),a&&Object(n.jsx)(V,{toggleModal:this.toggleModal,children:Object(n.jsx)(w.a,{src:r,placeholder:c,children:function(e){return Object(n.jsx)("img",{src:e,alt:"",className:Y.a.image})}})})]}):void 0}}]),a}(r.Component),re=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",searchPage:1,moreImagesAvailable:!1},e.getSearchQuery=function(t){e.setState({searchQuery:t})},e.updatePage=function(){e.setState((function(e){return{searchPage:e.searchPage+1}}))},e.resetPage=function(){e.setState({searchPage:1})},e.updateImageAvialability=function(t){e.setState({moreImagesAvailable:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.searchPage,r=e.moreImagesAvailable;return Object(n.jsxs)(g,{children:[Object(n.jsx)(y,{getSearchQuery:this.getSearchQuery}),Object(n.jsx)(ne,{searchQuery:t,page:a,resetPage:this.resetPage,updateImageAvialability:this.updateImageAvialability}),r&&Object(n.jsx)(I,{updatePage:this.updatePage}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9bdae7f5.chunk.js.map