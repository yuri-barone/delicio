import LocalBar from '@material-ui/icons/LocalBar';
import Fastfood from '@material-ui/icons/Fastfood';
import Cake from '@material-ui/icons/Cake';
import Whatshot from '@material-ui/icons/Whatshot';



export const foodItem = [
    {name:"Ravioli de Espinafre", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/ravioli-de-espinafre.jpg?raw=true", description:"Ravioli de Espinafre recheado com Mussarela de Búfala ao Molho de Tomates Frescos", price:"R$19.00", category:"lanches", recommended: true},
    {name:"Coca-Cola Lata", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/coca-cola-lata.jpg?raw=true", description:"Lata de Coca-cola", price:"R$5.00", category:"bebidas", recommended:true},
    {name:"Bolo de Chocolate", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/bolo-de-chocolate.jpg?raw=true", description:"Bolo de chocolate", price:"R$4.00", category:"sobremesas", recommended: true},
    {name:"Lasanha a Bolonhesa", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/lasanha-a-bolonhesa.jpg?raw=true", description:"Lasanha a Bolonhesa", price:"R$7.00", category:"lanches", recommended: true},
    {name:"Hambúrguer", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/hamburguer.jpg?raw=true", description:"Hámburgue de calabresa com bacon", price:"R$10.00", category:"lanches", recommended: true},
    {name:"Pavê", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/pave-chocolate-branco.jpg?raw=true", description:"Pavê ou pa cumê", price:"R$7.00", category:"sobremesas", recommended:true},
    {name:"Suco de laranja", imgURL:"https://github.com/yuri-barone/delicio/blob/gh-pages/img/suco-de-laranja.jpg?raw=true", description:"Suco de Laranja", category:"bebidas", price:"R$5.00", recommended: true}
    


    
]

export const foodCategory = [
    {name:"Bebidas", icon:LocalBar},
    {name:"Sobremesas", icon:Cake},
    {name:"Lanches", icon:Fastfood},
    {name:"Estou com sorte!", icon:Whatshot}
]