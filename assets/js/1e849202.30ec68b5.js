"use strict";(self.webpackChunksnoopforms_docs=self.webpackChunksnoopforms_docs||[]).push([[513],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},809:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={title:"Configuration",description:"Configuration options for snoopHub",hide_table_of_contents:!0},s=void 0,l={unversionedId:"hub/configuration",id:"hub/configuration",title:"Configuration",description:"Configuration options for snoopHub",source:"@site/docs/hub/3_configuration.md",sourceDirName:"hub",slug:"/hub/configuration",permalink:"/hub/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hub/3_configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuration",description:"Configuration options for snoopHub",hide_table_of_contents:!0},sidebar:"snoopFormsSidebar",previous:{title:"Deployment",permalink:"/hub/deployment"},next:{title:"React Library",permalink:"/category/react-library"}},c={},p=[{value:"SMTP Setup",id:"smtp-setup",level:2},{value:"Email Verification",id:"email-verification",level:2},{value:"Password reset",id:"password-reset",level:2},{value:"Telemetry",id:"telemetry",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"smtp-setup"},"SMTP Setup"),(0,i.kt)("p",null,"You can setup SMTP to send signup verification emails or password-reset emails. For that you need to set the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MAIL_FROM=noreply@example.com\nSMTP_HOST=smtp.example.com\nSMTP_PORT=587\nSMTP_USER=smtpUser\nSMTP_PASSWORD=smtpPassword\n")),(0,i.kt)("p",null,"If you use port 465 you also need to set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SMTP_SECURE_ENABLED=1\n")),(0,i.kt)("h2",{id:"email-verification"},"Email Verification"),(0,i.kt)("p",null,"To disable email verification and let your users signin directly after they created an account, you can disable email verification by setting the corresponding environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EMAIL_VERIFICATION_DISABLED=1\n")),(0,i.kt)("p",null,"Note: You need to setup SMTP to have email verification working."),(0,i.kt)("h2",{id:"password-reset"},"Password reset"),(0,i.kt)("p",null,"To disable the password reset functionality, you can disable it by setting the corresponding environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PASSWORD_RESET_DISABLED=1\n")),(0,i.kt)("p",null,"Note: You need to setup SMTP to have password reset functionality working."),(0,i.kt)("h2",{id:"telemetry"},"Telemetry"),(0,i.kt)("p",null,"We use this telemetry service to better understand how snoopForms is being used and how we can improve it. All data including the IP address is collected anonymously and we cannot trace anything back to you or your customers. You help us a lot by leaving telemetry activated. But if you still want to disable it, set this environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TELEMETRY_DISABLED=1\n")))}f.isMDXComponent=!0}}]);