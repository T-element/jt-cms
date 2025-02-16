/* empty css             *//* empty css               *//* empty css                *//* empty css                */import{_ as y,c as r,o as i,b as n,w as e,k as t,E as x,F as l,x as p,B as o,s as b,n as u,a3 as k,y as h,a4 as E,a5 as j}from"./index-DYtJqOqJ.js";const V=[{title:"开发工具",desp:"Visual Studio Code"},{title:"编程语言",desp:"TypeScript 4.x + JavaScript"},{title:"构建工具",desp:"Vite 2.x / Webpack5.x"},{title:"前端框架",desp:"Vue 3.x"},{title:"路由工具",desp:"Vue Router 4.x"},{title:"状态管理",desp:"Vuex 4.x"},{title:"UI 框架",desp:"Element Plus"},{title:"可视化",desp:"Echart5.x"},{title:"富文本",desp:"WangEditor"},{title:"工具库",desp:" @vueuse/core + dayjs + countup.js"},{title:"CSS 预编译",desp:"Sass / Less"},{title:"HTTP 工具",desp:"Axios"},{title:"Git Hook 工具",desp:"husky"},{title:"代码规范",desp:"EditorConfig + Prettier + ESLint"},{title:"提交规范",desp:"Commitizen + Commitlint"},{title:"自动部署",desp:"Centos + Jenkins + Nginx"}],S=[{name:"vue",description:"^3.0.5"},{name:"vue-router",description:"^4.0.6"},{name:"vuex",description:"^4.0.0"},{name:"axios",description:"^0.21.1"},{name:"element-plus",description:"^1.0.2-beta.41"},{name:"mockjs",description:"^1.1.0"},{name:"less",description:"^4.1.1"},{name:"scss",description:"^0.2.4"},{name:"EChart",description:"^5.1.1"},{name:"@vueuse/core",description:"^4.9.1"},{name:"countup.js",description:"^2.0.7"},{name:"dayjs",description:"^1.10.4"},{name:"pinia",description:"^2.0.0-alpha.13"},{name:"wangeditor",description:"^4.6.17"}],w=[{name:"typescript",description:"^4.1.3"},{name:"webpack",description:"5"},{name:"vite",description:"^2.2.3"},{name:"eslint",description:"^7.25.0"},{name:"prettier",description:"^2.2.1"},{name:"stylelint",description:"^13.13.0"},{name:"husky",description:"^6.0.0"},{name:"lint-staged",description:"^10.5.4"},{name:"rimraf",description:"^3.0.2"},{name:"@commitlint/cli",description:"^12.1.1"},{name:"@commitlint/config-conventional",description:"^12.1.1"},{name:"@types/node",description:"^14.14.41"},{name:"@typescript-eslint/eslint-plugin",description:"^4.22.0"},{name:"@typescript-eslint/parser",description:"^4.22.0"},{name:"@vitejs/plugin-vue",description:"^1.2.2"},{name:"@vue/compiler-sfc",description:"^3.0.5"},{name:"commitizen",description:"^4.2.3"},{name:"cz-conventional-changelog",description:"3.3.0"},{name:"eslint-config-airbnb-base",description:"^14.2.1"},{name:"eslint-config-prettier",description:"^8.3.0"},{name:"eslint-plugin-import",description:"^2.22.1"},{name:"eslint-plugin-prettier",description:"^3.4.0"},{name:"eslint-plugin-vue",description:"^7.9.0"},{name:"stylelint-config-prettier",description:"^8.0.2"},{name:"stylelint-config-standard",description:"^22.0.0"},{name:"stylelint-order",description:"^4.1.0"},{name:"vite-plugin-mock",description:"^2.5.0"},{name:"vue-tsc",description:"^0.0.8"}],C=`
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css
│   │   │   ├── index.css
│   │   │   └── variable.less
│   │   └── img
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── code.vue
│   │   ├── count-up
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── countup.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── descriptions.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEcharts.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── table.vue
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── textlink.vue
│   ├── components
│   │   ├── nav-header
│   │   │   ├── hooks
│   │   │   │   └── useMenuIconHook.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── nav-header.vue
│   │   │       └── nav-info.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── nav-menu.vue
│   │   ├── page-charts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-modal.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-search.vue
│   │   └── statistical-panel
│   │       ├── index.ts
│   │       └── src
│   │           └── statistical-panel.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── useEcharts.ts
│   │   ├── usePageModal.ts
│   │   ├── usePageSearch.ts
│   │   └── usePermission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── login.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard
│   │   │   │   │   └── dashboard.ts
│   │   │   │   └── overview
│   │   │   │       └── overview.ts
│   │   │   ├── main.ts
│   │   │   ├── product
│   │   │   │   ├── category
│   │   │   │   │   └── category.ts
│   │   │   │   └── goods
│   │   │   │       └── goods.ts
│   │   │   ├── story
│   │   │   │   ├── chat
│   │   │   │   │   └── chat.ts
│   │   │   │   └── list
│   │   │   │       └── list.ts
│   │   │   └── system
│   │   │       ├── department
│   │   │       │   └── department.ts
│   │   │       ├── menu
│   │   │       │   └── menu.ts
│   │   │       ├── role
│   │   │       │   └── role.ts
│   │   │       └── user
│   │   │           └── user.ts
│   │   └── not-found
│   │       └── not-found.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── analysis.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       └── system.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── request.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── analysis.ts
│   │   │   │   └── types.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-formt.ts
│   │   └── map-menu.ts
│   └── views
│       ├── login
│       │   ├── cpns
│       │   │   ├── login-account.vue
│       │   │   ├── login-account2.vue
│       │   │   ├── login-panel.vue
│       │   │   └── login-phone.vue
│       │   ├── login.vue
│       │   └── types
│       │       └── index.ts
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── index.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── overview.vue
│       │   ├── main.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── category.vue
│       │   │   │   └── config
│       │   │   │       ├── content.config.ts
│       │   │   │       └── search.config.ts
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── user.vue
│       └── not-found
│           └── not-found.vue
├── tsconfig.json
├── types
│   └── vuex.d.ts
└── vue.config.js
`,D=[{name:"文件夹",description:"统一小写, 多个单词使用-分割"},{name:"文件(.ts .vue .json .d.ts)",description:"统一小写, 多个单词使用-分割"}],z=[{name:"组件的文件",description:"统一小写, 多个单词使用-分割"},{name:"组件的目录结构",description:"例如 button 组件：button/src/index.vue, 统一在button/index.ts导出"},{name:"组件导包顺序",description:"导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数"},{name:"组件的名称",description:"统一大写开头，驼峰命名"},{name:"组件属性顺序",description:"name, components, props, emits, setup ..."},{name:"template标签",description:"小写加 - ( 例如：<case-panel/> )"},{name:"template标签属性顺序",description:"v-if , v-for , ref, class, style, ... ,事件"},{name:"组件的props",description:"小写开头，驼峰命名，必须编写类型默认值"},{name:"组件的样式",description:"作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割"}],P=[{name:"add 操作",description:"git add "},{name:"commit 操作",description:"yarn commit "},{name:"pull 操作",description:"git pull "},{name:"push 操作",description:"git push "}],R={components:{},data(){return{technologyStacks:V,dependencies:S,devDependencies:w,projectDir:C,namingConventions:D,componentRules:z,gitRules:P}}},T={class:"overview"},B={class:"card-content"},A={class:"text-link"},I={class:"title"},L={class:"cell-item"},N={class:"cell-item"},H={class:"card-content"},M={class:"projectDir"},q={class:"card-content"},F={class:"cell-item"},G={class:"cell-item"},J={class:"card-content"},W={class:"cell-item"};function U(K,c,O,Q,d,X){const m=x,_=b,v=j,g=E,f=k;return i(),r("div",T,[n(m,null,{header:e(()=>c[0]||(c[0]=[t("h4",{class:"card-header"},"关于",-1)])),default:e(()=>[c[1]||(c[1]=t("p",null," Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。 ",-1))]),_:1}),n(m,null,{header:e(()=>c[2]||(c[2]=[t("h4",{class:"card-header"},"技术栈",-1)])),default:e(()=>[t("div",B,[t("div",A,[(i(!0),r(l,null,p(d.technologyStacks,(s,a)=>(i(),r("div",{key:a,class:"item"},[t("span",I,o(s.title)+"：",1),n(_,{type:"primary",href:" "},{default:e(()=>[u(o(s.desp),1)]),_:2},1024)]))),128))]),n(f,{class:"descriptions",title:"生产环境依赖",column:2,border:""},{default:e(()=>[(i(!0),r(l,null,p(d.dependencies,(s,a)=>(i(),h(g,{key:a},{label:e(()=>[t("div",L,o(s.name),1)]),default:e(()=>[n(v,{size:"small"},{default:e(()=>[u(o(s.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),n(f,{class:"descriptions",title:"开发环境依赖",column:2,border:""},{default:e(()=>[(i(!0),r(l,null,p(d.devDependencies,(s,a)=>(i(),h(g,{key:a},{label:e(()=>[t("div",N,o(s.name),1)]),default:e(()=>[n(v,{size:"small"},{default:e(()=>[u(o(s.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1}),n(m,null,{header:e(()=>c[3]||(c[3]=[t("h4",{class:"card-header"},"项目结构",-1)])),default:e(()=>[t("div",H,[t("pre",M,o(d.projectDir),1)])]),_:1}),n(m,null,{header:e(()=>c[4]||(c[4]=[t("h4",{class:"card-header"},"项目规范",-1)])),default:e(()=>[t("div",q,[n(f,{class:"descriptions",title:"文件命名规范",column:1,border:""},{default:e(()=>[(i(!0),r(l,null,p(d.namingConventions,(s,a)=>(i(),h(g,{key:a},{label:e(()=>[t("div",F,o(s.name),1)]),default:e(()=>[n(v,{size:"small"},{default:e(()=>[u(o(s.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),n(f,{class:"descriptions",title:"编写组件规范",column:1,border:""},{default:e(()=>[(i(!0),r(l,null,p(d.componentRules,(s,a)=>(i(),h(g,{key:a},{label:e(()=>[t("div",G,o(s.name),1)]),default:e(()=>[n(v,{size:"small"},{default:e(()=>[u(o(s.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1}),n(m,null,{header:e(()=>c[5]||(c[5]=[t("h4",{class:"card-header"},"Git提交规范",-1)])),default:e(()=>[t("div",J,[n(f,{class:"descriptions",column:1,border:""},{default:e(()=>[(i(!0),r(l,null,p(d.gitRules,(s,a)=>(i(),h(g,{key:a},{label:e(()=>[t("div",W,o(s.name),1)]),default:e(()=>[n(v,{size:"small"},{default:e(()=>[u(o(s.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})])}const se=y(R,[["render",U],["__scopeId","data-v-8fd253eb"]]);export{se as default};
