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

name:"Saco de Ráfia 25kg",

slug:"saco-rafia-25kg",

category:"sacos",

images:[
img("saco1.png"),
img("saco2.png"),
img("saco3.png")
],

description:
"Saco industrial resistente para armazenamento e transporte de mercadorias.",

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

name:"Saco de Ráfia 50kg",

slug:"saco-rafia-50kg",

category:"sacos",

images:[
img("saco1.png"),
img("saco2.png"),
img("saco3.png")
],

description:
"Ideal para grãos, logística e materiais de grande volume.",

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

name:"Saco Laminado",

slug:"saco-laminado",

category:"sacos",

images:[
img("saco1.png")
],

description:
"Saco laminado com proteção contra umidade e maior conservação.",

specs:[
{label:"Tipo",value:"Laminado"},
{label:"Proteção",value:"Umidade"}
]

},

{
id:"saco-personalizado",

name:"Saco Personalizado",

slug:"saco-personalizado",

category:"sacos",

images:[
img("saco1.png"),
img("saco2.png"),
img("saco3.png")
],

description:
"Sacos personalizados com impressão para marcas e operações comerciais.",

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
img("carteirag1.png"),
img("carteirag2.png"),
img("carteira3.png")
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

name:"Carteira Universitária",

slug:"carteira-universitaria",

category:"carteiras",

images:[
img("carteirag1.png"),
img("carteirag4.png")
],

description:
"Modelo universitário com apoio lateral e estrutura reforçada.",

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
img("carteirag1.png"),
img("carteirag4.png")
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
img("carteirag1.png"),
img("carteirag2.png")
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

name:"Caderno Brochura",

slug:"caderno-brochura",

category:"cadernos",

images:[
img("caderno1.png"),
img("caderno2.png")
],

description:
"Caderno brochura para uso escolar e distribuição institucional.",

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

name:"Caderno Espiral",

slug:"caderno-espiral",

category:"cadernos",

images:[
img("caderno1.png"),
img("caderno2.png")
],

description:
"Caderno espiral resistente para estudantes.",

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

name:"Caderno Capa Dura",

slug:"caderno-capa-dura",

category:"cadernos",

images:[
img("caderno1.png"),
img("caderno3.png")
],

description:
"Caderno premium com capa dura e alta durabilidade.",

specs:[
{label:"Capa",value:"Dura"}
]

},

{
id:"caderno-universitario",

name:"Caderno Universitário",

slug:"caderno-universitario",

category:"cadernos",

images:[
img("caderno2.png"),
img("caderno3.png")
],

description:
"Caderno universitário com divisórias para múltiplas matérias.",

variants:[
{name:"5 matérias",value:"5"},
{name:"10 matérias",value:"10"}
],

specs:[
{label:"Divisórias",value:"Sim"}
]

}

]