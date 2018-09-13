import LocalBar from '@material-ui/icons/LocalBar';
import Fastfood from '@material-ui/icons/Fastfood';
import Cake from '@material-ui/icons/Cake';
import Whatshot from '@material-ui/icons/Whatshot';

export const foodItem = [
    {name:"Ravioli de Espinafre", imgURL:"https://www.baressp.com.br/barreporter/imgs/macarrao_23102012104824.jpg", description:"Ravioli de Espinafre recheado com Mussarela de Búfala ao Molho de Tomates Frescos", price:"R$19.00", category:"lanches", recommended: true},
    {name:"Coca-Cola Lata", imgURL:"https://mthumbs.buscape.com.br/refrigerante/coca-cola-lata-350-ml_600x600-PU61e1f_1.jpg", description:"Lata de Coca-cola", price:"R$5.00", category:"bebidas", recommended:true},
    {name:"Bolo de Chocolate", imgURL:"https://imagem.band.com.br/80/f_365680.jpg", description:"Bolo de chocolate", price:"R$4.00", category:"sobremesas", recommended: true},
    {name:"Lasanha a Bolonhesa", imgURL:"https://www.receitasnestle.com.br/images/default-source/recipes/lasanha_a_bolonhesa.jpg", description:"Lasanha a Bolonhesa", price:"R$7.00", category:"lanches", recommended: true},
    {name:"Hambúrguer", imgURL:"https://laricaria.com/wp-content/uploads/2018/02/hamburguer-maconha-cannaburguer-1300x949.jpg", description:"Hámburgue de calabresa com bacon", price:"R$10.00", category:"lanches", recommended: true},
    {name:"Pavê", imgURL:"https://i1.wp.com/www.receitinhasdavovo.com/images/receitasfull/2015-12-09-16-43-46-12107848_993811577327673_610993608805298246_n.jpg?resize=675,223&quality=90", description:"Pavê ou pa cumê", price:"R$7.00", category:"sobremesas"},
    {name:"Suco de laranja", imgURL:"https://www.natue.com.br/natuelife/wp-content/uploads/2015/02/shutterstock_68566873.jpg", description:"Suco de Laranja", category:"bebidas", price:"R$5.00"}
    


    
]

export const foodCategory = [
    {name:"Bebidas", icon:LocalBar},
    {name:"Sobremesas", icon:Cake},
    {name:"Lanches", icon:Fastfood},
    {name:"Estou com sorte!", icon:Whatshot}
]