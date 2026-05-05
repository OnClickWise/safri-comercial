// ===============================
// TYPES
// ===============================

export interface ProductVariant {
name:string
value:string
}

export interface ProductSpec {
label:string
value:string
}

export type ProductCategory=
| "sacos"
| "carteiras"
| "cadernos"

export interface Product{
id:string
name:string
slug:string

category:ProductCategory

images:string[]

description:string

variants?:ProductVariant[]

specs?:ProductSpec[]
}

// ===============================
// IMAGE HELPER
// ===============================

const IMG="/images/products"

const img=(file:string)=>
`${IMG}/${file}`


// ===============================
// PRODUCTS
// ===============================

export const products:Product[]=[


// =====================================
// SACOS
// =====================================

{
id:"saco-rafia-25",

name:"Sacos",

slug:"saco-rafia-25kg",

category:"sacos",

images:[
img("saco1.png"),
img("saco2.png"),
img("saco3.png")
],

description:
"",

variants:[
{name:"25kg",value:"25kg"},
{name:"50kg",value:"50kg"},
{name:"100kg",value:"100kg"}
],

specs:[
{label:"Material",value:"Polipropileno"},
{label:"Uso",value:"Industrial"},
{label:"Resistência",value:"Alta"}
]

},

{
id:"saco-rafia-50",

name:"Sacos",

slug:"saco-rafia-50kg",

category:"sacos",

images:[
img("saco2.png"),
img("sacola2.png"),
img("sacola2.png")
],

description:
"Ideal para batata, frutas, e frãos.",

variants:[
{name:"50kg",value:"50kg"},
{name:"150kg",value:"150kg"}
],

specs:[
{label:"Material",value:"Polipropileno"},
{label:"Durabilidade",value:"Alta"}
]

},

{
id:"saco-laminado",

name:"Saco Normais e Laminado",

slug:"saco-laminado",

category:"sacos",

images:[
img("saco5.png"),
img("saco2.png"),
img("saco3.png")   
],

description:
"",

specs:[
{label:"Tipo",value:"Laminado"},
{label:"Proteção",value:"Umidade"}
]

},

{
id:"saco-personalizado",

name:"Sacos Normais e Laminado",

slug:"saco-personalizado",

category:"sacos",

images:[
img("saco4.png"),
img("sacola1.png"),
img("sacola2.png")
],

description:
"",

specs:[
{label:"Customização",value:"Sim"},
{label:"Impressão",value:"Alta qualidade"}
]

},


// =====================================
// CARTEIRAS
// =====================================

{
id:"carteira-dupla",

name:"Carteira Escolar Dupla",

slug:"carteira-escolar-dupla",

category:"carteiras",

images:[
img("carteirag3.png"),
img("carteirag8.png"),
img("carteirag8.png")
],

description:
"Carteira dupla reforçada para salas de aula e instituições.",

variants:[
{name:"Dupla",value:"dupla"},
{name:"Individual",value:"individual"}
],

specs:[
{label:"Material",value:"Metal + MDF"},
{label:"Capacidade",value:"2 alunos"}
]

},

{
id:"carteira-universitaria",

name:"Carteira Individual",

slug:"carteira-universitaria",

category:"carteiras",

images:[
img("carteirag2.png"),
img("carteirag4.png"),
img("carteirag4.png"),
],

description:
"Modelo Individual.",

specs:[
{label:"Material",value:"Metal + Madeira"},
{label:"Uso",value:"Universitário"}
]

},

{
id:"carteira-infantil",

name:"Carteira Escolar Infantil",

slug:"carteira-escolar-infantil",

category:"carteiras",

images:[
img("carteirag7.png"),
img("carteirag6.png"),
img("carteirag5.png")
],

description:
"Modelo escolar infantil com ergonomia e segurança.",

specs:[
{label:"Faixa Etária",value:"Infantil"}
]

},

{
id:"mesa-escolar",

name:"Mesa Escolar",

slug:"mesa-escolar",

category:"carteiras",

images:[
img("mesa2.png"),
img("mesa2.png"),
img("mesa.jpeg")
],

description:
"Mesas escolares resistentes para salas e centros de formação.",

specs:[
{label:"Material",value:"Madeira + Metal"}
]

},


// =====================================
// CADERNOS
// =====================================

{
id:"caderno-brochura",

name:"Caderno Escolar",

slug:"caderno-brochura",

category:"cadernos",

images:[
img("caderno1.png"),
img("caderno3.png"),
img("caderno4.png")
],

description:
"",

variants:[
{name:"96 folhas",value:"96"},
{name:"200 folhas",value:"200"}
],

specs:[
{label:"Tipo",value:"Brochura"}
]

},

{
id:"caderno-espiral",

name:"Caderno Escolar",

slug:"caderno-espiral",

category:"cadernos",

images:[
img("caderno4.png"),
img("caderno3.png"),
img("caderno1.png")
],

description:
"",

variants:[
{name:"100 folhas",value:"100"},
{name:"200 folhas",value:"200"}
],

specs:[
{label:"Encadernação",value:"Espiral"}
]

},

{
id:"caderno-capa-dura",

name:"Caderno Escolar",

slug:"caderno-capa-dura",

category:"cadernos",

images:[
img("caderno2.png"),
img("caderno4.png"),
img("caderno4.png")
],

description:
"",

specs:[
{label:"Capa",value:"Dura"}
]

},

{
id:"caderno-universitario",

name:"Caderno Escolar",

slug:"caderno-universitario",

category:"cadernos",

images:[
img("caderno3.png"),
img("caderno4.png"),
img("caderno1.png")
],

description:
"",

variants:[
{name:"5 matérias",value:"5"},
{name:"10 matérias",value:"10"}
],

specs:[
{label:"Divisórias",value:"Sim"}
]

}

]