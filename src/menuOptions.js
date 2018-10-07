import LocalBar from '@material-ui/icons/LocalBar';
import Fastfood from '@material-ui/icons/Fastfood';
import Cake from '@material-ui/icons/Cake';
import Whatshot from '@material-ui/icons/Whatshot';



export const foodItem = [
    //Bebidas Quentes

    {name:"Café Caseiro", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cafe-caseiro.jpg?raw=true", description:"Nosso café caseiro coado é feito a moda antiga, no bule e com o coador, aquele cafezinho da vovó.", category:"bebidas", price:"R$1.50", recommended: true},
    {name:"Café Expresso", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cafe-expresso.jpg?raw=true", description:"Nosso expresso é suave e delicioso, pois utilizamos um Blend especial único com a marca do Deliciô.", category:"bebidas",price:"R$3,50", recommended:true},
    {name:"Café com Leite", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cafe-leite.jpg?raw=true",description:"Uma ótima combinação e de muito sabor, o tradicional café caseiro com leite.", category:"bebidas", price:"R$3,00", recommended:true},
    {name:"Capuccino tradicional", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cappuccino.jpg?raw=true", description:"Fazemos o cappuccino quente artesanal tipo italiano.", category:"bebidas", price:"R$4,90", recommended:true},
    {name:"Chocolate Quente", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/chocolate-quente.jpg?raw=true",description:"Aquele chocolate quente deliciÔso, para te esquentar nos dias de frio.", category:"bebidas", price:"R$6,50", recommended:true},
    {name:"Toddy", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/toddy.jpg?raw=true",description:"Leite quente com toddy.", category:"bebidas", price:"R$4,00", recommended:true},
    {name:"Chá Mate", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cha-mate.jpg?raw=true",description:"O tradicional Chá Mate quente, deliciÔso do jeito que o povo gosta.", category:"bebidas", price:"R$3,00", recommended:true},
    {name:"Mocha", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/mocha.jpg?raw=true",description:"Feito com café expresso, essa bebida é a mais perfeita combinação entre, Café, Leite, Chocolale, Graviola e Citrus Aurantium.", category:"bebidas", price:"R$6,50", recommended:true},
    {name:"Macchiato", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/macchiato.jpg?raw=true",description:"Café com leite típico da itália, consistindo em café expresso misturado com leite quente com um pouco de espuma.", category:"bebidas", price:"R$4,50", recommended:true},
    {name:"Submarino", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/submarino.jpg?raw=true",description:"Café com barras de chocolate ao leite submersar.", category:"bebidas", price:"R$5,50", recommended:true},

    //Bebidas Geladas
    
    {name:"Suco de Laranja", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/laranja.jpg?raw=true",description:"Suco de laranja natural", category:"bebidas", price:"R$4,50", recommended:true},
    {name:"Suco de Fruta", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/suco-frutas.jpg?raw=true",description:"Suco de fruta natural de sua escolha entre as disponiveis.", category:"bebidas", price:"R$6,75", recommended:true},
    {name:"Cappuccino Gelado", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/cappuccino-gelado.jpg?raw=true",description:"Um cappuccino perfeito para aqueles dias de calor.", category:"bebidas", price:"R$12,00", recommended:true},
    {name:"Frapês c/ Sorvete", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/frapê.jpg?raw=true",description:"Café gelado com cubos de gelo, espumado e com sorvete.", category:"bebidas", price:"R$9,90", recommended:true},
    {name:"Toddy Gelado", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/toddy-gelado.jpg?raw=true",description:"Leite gelado com toddy.", category:"bebidas", price:"R$6,50", recommended:true},
    {name:"Refrigerante Lata", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/refri-lata.jpg?raw=true", description:"Refrigerante lata de sua escolha entre as opções disponiveis,", category:"bebidas", price:"R$3,75", recommended:true},

    //Paes

    {name:"Pão de Queijo", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/pao-queijo.jpg?raw=true", description:"O tradicional e conhecido Pão de Queijo.", category:"lanches", price:"R$1,50", recommended:true},
    {name:"Pão na Chapa", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/pao-chapa.jpg?raw=true", description:"Pão com manteiga derretida na chapa (Opcional: Pão francês, Forma ou Integral).", category:"lanches", price:"R$3,50, (Light R$3,50)", recommended:true},
    {name:"Misto Quente", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/misto.jpg?raw=true", description:"Pão com mussarela e presunto aquecido na chapa (Opcional: Pão francês, Forma ou Integral).", category:"lanches", price:"R$6,50 (Light R$7,50)", recommended:true},
    {name:"Queijo Quente", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/queijo-quente.jpg?raw=true", description:"Pão com queijo aquecido na chapa (Opcional: Pão francês, Forma ou Integral).", category:"lanches", price:"R$6,50 (Light R$7,50)", recommended:true},
    {name:"Bauru Português", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/bauru.jpg?raw=true", description:"Pão com presunto, queijo e fatias de tomate (Opcional: Pão francês, Forma ou Integral).", category:"lanches", price:"R$7,50 (Light R$8,90)", recommended:true},

    //Lanches e Salgados

    {name:"X-Burguer", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/x-burguer.jpg?raw=true", description:"Pão, Hambúrguer e Queijo.", category:"lanches", price:"R$9,50", recommended:true},
    {name:"X-Salada", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/x-salada.jpg?raw=true", description:"Pão, Alface, Tomate, Queijo, Cebola, Presunto e Maionese.", category:"lanches", price:"R$11,50", recommended:true},
    {name:"X-Egg", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/x-egg.jpg?raw=true", description:"Pão, Ovo, Queijo, Hambúrguer, Alface e Tomate.", category:"lanches", price:"R$10,50", recommended:true},
    {name:"Sanduiche Natural Peru", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/sanduiche-peru.jpg?raw=true", description:"Pão, Tomate, Alface, Peito de peru e Maionese.", category:"lanches", price:"R$8,50", recommended:true},
    {name:"Crêpe Francês do Dia", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/crepe-frances.jpg?raw=true", description:"", category:"lanches", price:"R$9,90", recommended:true},
    {name:"Salgados Fritos", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/jpg?raw=true", description:"As opções estão em nossa vitrine", category:"lanches", price:"R$4,75", recommended:true},
    {name:"Salgados Assados", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/jpg?raw=true", description:"As opções estão em nossa vitrine", category:"lanches", price:"R$5,00", recommended:true},
    {name:"Omelete Tradicional", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/omelete.jpg?raw=true", description:"Omelete tradicional com legumes.", category:"lanches", price:"R$7,50", recommended:true},
    {name:"Omelete Presunto e Queijo", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/omelete-presunto.jpg?raw=true", description:"Omelete com Presunto, queijo e legumes.", category:"lanches", price:"R$9,50", recommended:true},

    //Sobremesa

    {name:"Pedaço Bolo Caseiro", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/bolo-caseiro.jpg?raw=true", description:"Bolo de chocolate caseiro.", category:"sobremesas", price:"R$4,00", recommended:true},

    
]

export const foodCategory = [
    {name:"Bebidas", icon:LocalBar},
    {name:"Sobremesas", icon:Cake},
    {name:"Lanches", icon:Fastfood},
    {name:"Estou com sorte!", icon:Whatshot}
]