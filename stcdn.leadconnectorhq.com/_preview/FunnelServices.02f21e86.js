import{P as s}from"./entry.7aa2e1a5.js";import{$ as i}from"./constants.fdd6dcf3.js";const{addHeaderFromCookieForReferer:a}=i();function c(){return s().public.newBaseURL}const u=()=>{var t,r;const e={timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,channel:"APP",source:"WEB_USER",version:"2021-04-15"},o=(r=(t=Intl==null?void 0:Intl.DateTimeFormat())==null?void 0:t.resolvedOptions())==null?void 0:r.timeZone;return o&&(e.timezone=o),a(e),e},n=e=>{const o=s();return $fetch.create({baseURL:e||o.public.REST_API_URLS,headers:u()})},m={createContact:e=>n()("/funnels/order-form/contact",{body:e,method:"POST"}),listProducts:e=>n()("/funnels/order-form/public/products",{params:e}),findProductById:e=>n()("/funnels/order-form/public/product",{params:e}),verifyETag:e=>n({}.REST_API_URLS)("/funnels/domain/verify-etag",{params:e}),funnelPayment:e=>n(c())("/v2/funnel/product/pay",{body:e,method:"POST"}),getGeoLocation:()=>n()("/funnels/funnel/geo-location/"),getPage:e=>n()("/funnels/page/data",{params:e}),createPageViewEvent:e=>n()("/funnels/page/view/event",{params:e}),getXmlSiteMap:e=>n()("/funnels/domain/get-xml-sitemap",{params:e}),getRobotsTxt:e=>n()("/funnels/domain/get-robots-txt",{params:e}),sendConversionEvent:e=>n()("/funnels/event/conversion",{body:e,method:"POST"})};export{m as F};
