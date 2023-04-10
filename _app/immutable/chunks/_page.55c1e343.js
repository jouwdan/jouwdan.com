const o=async({fetch:t})=>({posts:await(await t("/api/posts")).json()}),s=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{s as _,o as l};
