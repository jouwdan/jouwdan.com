const o=async({fetch:t})=>({posts:await(await t("/api/posts/all")).json()}),e=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{e as _,o as l};
