"use strict";(self.webpackChunkfe_nextjs_sample=self.webpackChunkfe_nextjs_sample||[]).push([[640],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/molecules/Highlights/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyElement:()=>EmptyElement,MultipleElement:()=>MultipleElement,SingleElement:()=>SingleElement,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MultipleElement$para,_MultipleElement$para2,_MultipleElement$para3,_SingleElement$parame,_SingleElement$parame2,_SingleElement$parame3,_EmptyElement$paramet,_EmptyElement$paramet2,_EmptyElement$paramet3,_home_runner_work_fe_nextjs_sample_fe_nextjs_sample_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_nextjs_sample_fe_nextjs_sample_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/molecules/Highlights/index.tsx").Z};var MultipleElement={args:{highlights:["お風呂に浮く","握ると音が鳴る","シリコン製で丈夫","お子様の筋力強化にも"]}},SingleElement={args:{highlights:["お風呂に浮く"]}},EmptyElement={args:{highlights:[]}};MultipleElement.parameters=_objectSpread(_objectSpread({},MultipleElement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultipleElement$para=MultipleElement.parameters)||void 0===_MultipleElement$para?void 0:_MultipleElement$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    highlights: ['お風呂に浮く', '握ると音が鳴る', 'シリコン製で丈夫', 'お子様の筋力強化にも']\n  }\n}"},null===(_MultipleElement$para2=MultipleElement.parameters)||void 0===_MultipleElement$para2||null===(_MultipleElement$para3=_MultipleElement$para2.docs)||void 0===_MultipleElement$para3?void 0:_MultipleElement$para3.source)})}),SingleElement.parameters=_objectSpread(_objectSpread({},SingleElement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SingleElement$parame=SingleElement.parameters)||void 0===_SingleElement$parame?void 0:_SingleElement$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    highlights: ['お風呂に浮く']\n  }\n}"},null===(_SingleElement$parame2=SingleElement.parameters)||void 0===_SingleElement$parame2||null===(_SingleElement$parame3=_SingleElement$parame2.docs)||void 0===_SingleElement$parame3?void 0:_SingleElement$parame3.source)})}),EmptyElement.parameters=_objectSpread(_objectSpread({},EmptyElement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EmptyElement$paramet=EmptyElement.parameters)||void 0===_EmptyElement$paramet?void 0:_EmptyElement$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    highlights: []\n  }\n}"},null===(_EmptyElement$paramet2=EmptyElement.parameters)||void 0===_EmptyElement$paramet2||null===(_EmptyElement$paramet3=_EmptyElement$paramet2.docs)||void 0===_EmptyElement$paramet3?void 0:_EmptyElement$paramet3.source)})})},"./src/components/molecules/Highlights/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Highlights});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement;function Highlights(_ref){var highlights=_ref.highlights;return __jsx("div",{className:"mt-10"},__jsx("h3",{className:"text-sm font-medium text-gray-900"},"Highlights"),__jsx("div",{className:"mt-4"},__jsx("ul",{role:"list",className:"list-disc space-y-2 pl-4 text-sm"},highlights.map((function(highlight){return __jsx("li",{key:highlight,className:"text-gray-400"},__jsx("span",{className:"text-gray-600"},highlight))})))))}Highlights.displayName="Highlights",Highlights.__docgenInfo={description:"",methods:[],displayName:"Highlights",props:{highlights:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};try{Highlights.displayName="Highlights",Highlights.__docgenInfo={description:"",displayName:"Highlights",props:{highlights:{defaultValue:null,description:"",name:"highlights",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Highlights/index.tsx#Highlights"]={docgenInfo:Highlights.__docgenInfo,name:"Highlights",path:"src/components/molecules/Highlights/index.tsx#Highlights"})}catch(__react_docgen_typescript_loader_error){}}}]);