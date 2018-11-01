import LocalBar from '@material-ui/icons/LocalBar';
import Fastfood from '@material-ui/icons/Fastfood';
import Cake from '@material-ui/icons/Cake';
import Whatshot from '@material-ui/icons/Whatshot';
import LocalCafe from '@material-ui/icons/LocalCafe';


export const foodItem = [
    //Bebidas Quentes

    {name:"Café Caseiro", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cafe-caseiro.jpg", 
		description:"Seu sabor especial vem da qualidade do preparo e do café especial da Serra Gaucha do Rio Grande do Sul. Nosso café caseiro coado é feito a moda antiga, no bule e com o coador, aquele cafezinho da vovó.", category:"bebidas", price:"R$1.50", recommended: true},
		
    {name:"Café Expresso", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cafe-expresso.jpg", 
		description:"Nosso expresso é suave e delicioso, pois utilizamos um Blend especial único com a marca do Deliciô.", category:"bebidasquentes",price:"R$3,50", recommended:true},
    
	{name:"Café com Leite", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cafe-leite.jpg",
		description:"Uma ótima combinação e de muito sabor, o tradicional café caseiro com leite. Experimente também o (Expresso com Leite) ainda mais gostoso.", category:"bebidasquentes", price:"R$3,00", recommended:true},
    
	{name:"Cappuccino Tradicional", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cappuccino.jpg", 
		description:"Cappuccino Brasileiro quente e cremoso. Também temos o Cappuccino Italiano experimente.", category:"bebidasquentes", price:"R$4,90", recommended:true},
    
	{name:"Chocolate Quente", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/chocolate-quente.jpg",
		description:"Nossa receita exclusiva, feita com chocolate em barra de primeira qualidade. Cremoso na medida certa!!!", category:"bebidasquentes", price:"R$6,50", recommended:true},
	
	{name:"Chocolate Quente Avelã", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/chocolate-quente-avela.jpg",
		description:"Feito com chocolate em barra de primeira qualidade. Cremoso na medida certa e com Nutella!!!", category:"bebidasquentes", price:"R$6,50", recommended:true},	
	
	{name:"Chocolate Quente Marshmallow", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/chocolate-quente-marshmallow.jpg",
		description:"Feito com chocolate em barra de primeira qualidade. Cremoso na medida certa e coberto por Marshmallow!!!", category:"bebidasquentes", price:"R$6,50", recommended:true},
	  
	{name:"Chá Mate", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cha-mate.jpg",
		description:"O tradicional Chá Mate quente. Consulte também a nossa caixa de Chás Inglês e outras opções.", category:"bebidasquentes", price:"R$3,00", recommended:true},
    
	{name:"Café Mocha", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/mocha.jpg",
		description:"Feito com café expresso, essa bebida é a mais perfeita combinação entre, Café, Leite e Chocolate em calda.", category:"bebidasquentes", price:"R$6,50", recommended:true},
	
	{name:"Café Mocha Avelã", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/mocha-avela.jpg",
		description:"Feito com café expresso, essa bebida é a mais perfeita combinação entre, Café, Leite, *Nutella e Chantilly.", category:"bebidasquentes", price:"R$6,50", recommended:true},
	
	
	{name:"Café Macchiato", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/macchiato.jpg",
		description:"Café Expresso com a crema do leite, típico da itália, consistindo em café expresso com um pouco de espuma 'crema' do leite .", category:"bebidasquentes", price:"R$4,50", recommended:true},
    
	{name:"Café Submarino", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/submarino.jpg",
		description:"Dois ingredientes mais vendidos no mundo combinados. Café Expresso com lascas de chocolate ao leite submersas.", category:"bebidasquentes", price:"R$5,50", recommended:true},

    //Bebidas Geladas
    
	{name:"Suco de Laranja", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/laranja.jpg",
		description:"Com Laranjas fresquinhas e espremidas na hora, opções: natural sem bater, com gelo e/ou açúcar batidos. ", category:"bebidasgeladas", price:"R$4,50", recommended:true},
    
	{name:"Suco de Fruta", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/suco-frutas.jpg",
		description:"Suco Natural de fruta. Opções de frutas com Água, Leite ou Laranja. Consulte sabores no nosso cardápio impresso.", category:"bebidasgeladas", price:"R$6,75", recommended:true},
		
	{name:"Suco Detox Verde", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/suco-detox.jpg",
		description:"Couve, Pepino, gengibre e suco de laranja. O suco verde desintoxica e desinflama o organismo. Tem o poder de melhorar o pique e a digestão, além de deixar a pele mais bonita.", category:"bebidasgeladas", price:"R$8,75", recommended:true},		
	
	{name:"Cappuccino Gelado", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cappuccino-gelado.jpg",
		description:"Cappuccino gelado feito com sorvete especial, um dos mais vendidos, perfeito para aqueles dias de calor.", category:"bebidasgeladas", price:"R$12,00", recommended:true},
	
	{name:"Cappuccino Gelado Avelã", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/cappuccino-gelado-avela.jpg",
		description:"Cappuccino gelado feito com sorvete especial e creme de avelã original *Nutella, perfeito para aqueles dias de calor com um toque de Avelã.", category:"bebidasgeladas", price:"R$14,90", recommended:true},
    
	{name:"Frappes c/ Sorvete", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/frapê.jpg",
		description:"Parecido com Shake Gelado, o Frappe também vai sorvete com a base de café expresso e combinações de sabores coberto com Chantilly, sabor unico e especial, muito famoso nas cafeterias dos EUA e Europa.", category:"bebidasgeladas", price:"R$9,90", recommended:true},
    
	{name:"Toddy Gelado", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/toddy-gelado.jpg",
		description:"Leite gelado batido com toddy.", category:"bebidasgeladas", price:"R$6,50", recommended:true},
	
	{name:"Chá Mate Gelado", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/mate-gelado.jpg",
		description:"Mate Gelado Batido, Tradicional ou com limão.", category:"bebidasgeladas", price:"R$6,50 - C/ Limão (7,00)", recommended:true},	
    
	{name:"Refrigerante Lata", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/refri-lata.jpg", 
		description:"Refrigerante lata de sua escolha entre as opções disponiveis.,", category:"bebidasgeladas", price:"R$3,75", recommended:true},

    //Paes

    {name:"Pão de Queijo", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pao-queijo.jpg", 
		description:"O mais famoso da casa. Crocante por fora e macio por dentro. Com queijo especial e sabor mineiro.", category:"lanches", price:"R$1,50", recommended:true},
    
	{name:"Pão na Chapa", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pao-chapa.jpg", 
		description:"Pão com manteiga de primeira qualidade derretida na chapa (Opcional: Pão francês, Forma Branco ou Integral).", category:"lanches", price:"R$3,50, (Light R$3,50)", recommended:true},
    
	{name:"Pão na Chapa c/ Requeijão", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pao-chapa-requeijao.jpg", 
		description:"Pão com requeijão *Catupiry derretidos na chapa (Opcional: Pão francês, Forma Branco ou Integral).", category:"lanches", price:"R$4,90", recommended:true},
	
	{name:"Pão c/ Mortadela na Chapa", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pao-chapa-mortadela.jpg", 
		description:"Pão com manteiga e fatias de mortadelas aquecidos na chapa (Opcional: Pão francês, Forma Branco ou Integral).", category:"lanches", price:"R$4,90", recommended:true},
	
	
	{name:"Misto Quente", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/misto.jpg", 
		description:"Pão com presunto e mussarela derretida na chapa (Opcional: Pão francês, Forma Branco ou Integral).", category:"lanches", price:"R$6,50 (Light R$7,50)", recommended:true},
    
	{name:"Queijo Quente", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/queijo-quente.jpg", 
		description:"Pão com queijo derretido na chapa (Opcional: Pão francês, Forma Branco ou Integral).", category:"lanches", price:"R$6,50 (Light R$7,50)", recommended:true},
    
	{name:"Bauru Português", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/bauru.jpg", 
		description:"Também conhecido como Sanduiche Americano (Sem o Ovo Frito), é feito com Pão, presunto, queijo, fatias de tomate e alface aquecidos na chapa ou frio se desejar (Opcional: Pão francês, Forma Branco ou Integral), (Adicional Americano: Ovo Frito +1,50 ).", category:"lanches", price:"R$7,50 (Light R$8,90)", recommended:true},

    //Lanches e Salgados

	{name:"X-Salada", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/x-salada.jpg", 
		description:"Igual das Hamburguerias sem prensar, vai Pão Semi-artesanal, Hambúrguer 80gr, Presunto, Queijo, Alface e Tomate (Temos Também: X-Egg 10,50, X-Burguer 9,50 ou X-Duplo 11,00 esses sem salada) .", category:"lanches", price:"R$11,50", recommended:true},
		
    {name:"Sanduiche Natural de Peru", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/sanduiche-peru.jpg", 
		description:"Pão de Forma Integral, Cream Cheese, Peito de Peru, Alface e Tomate.", category:"lanches", price:"R$8,50", recommended:true},
		
    {name:"Sanduiche Natural de Patê de Atum", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/sanduiche-atum.jpg", 
		description:"Pão de Forma Integral, Patê de Atum da casa, Alface e Tomate.", category:"lanches", price:"R$9,50", recommended:true},
		
	{name:"Crêpe Francês do Dia", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/crepe-frances.jpg", 
		description:"Crêpe Francês - ´É um tipo de panqueca muito fina com a casquinha crocante com variados recheios, muito consumido e famoso na França.", category:"lanches", price:"R$9,90", recommended:true},
	
   
	{name:"Coxinha de Carne ou Frango", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/salgado-frito.jpg", 
		description:"Sucesso da Casa. Sabor único Deliciô, Feita com massa de batata, fritinha na hora tem uma casquinha super crocante e muito macia por dentro, como toda coxinha deve ser!!!", category:"lanches", price:"R$4,75", recommended:true},
    
	{name:"Salgados Assados", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/salgado-assado.jpg", 
		description:"Consulte as opções na nossa vitrine.", category:"lanches", price:"R$5,00", recommended:true},
    
	{name:"Omelete Tradicional", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/omelete.jpg", 
		description:"Omelete feito a moda da casa com temperos especiais.", category:"lanches", price:"R$7,50", recommended:true},
    
	{name:"Omelete Presunto e Queijo", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/omelete-presunto-queijo.jpg", 
		description:"Omelete feito a moda da casa com temperos especiais, presunto picado e mussarela derretida.", category:"lanches", price:"R$9,50", recommended:true},

    //Sobremesa

    {name:"Bolo Caseiro do Dia - Pedaço", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/bolo-de-cenoura.jpg", 
		description:"Bolo Caseiro de Cenoura com Chocolate, consulte outras opções do dia.", category:"sobremesas", price:"R$4,00 - (Promoção + Café Peq. R$5,00)", recommended:true},
	
    {name:"Pão de Queijo Recheado (Doce)", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pao-de-queijo-recheado.jpg", 
		description:"A combinação perfeita nos sabores: *Nutella, Chocolate, Doce de Leite *Aviação ou Goiabada Cremosa. Consulte também os recheios salgados.", category:"sobremesas", price:"R$4,00", recommended:true},
	
	{name:"Torta Holandesa", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/torta-holandesa.jpg", 
		description:"Torta com borda de biscoito, creme especial coberto com ganache de chocolate. Apesar do nome, a torta é totalmente brasileira, sem nenhum vínculo com a Holanda.", category:"sobremesas", price:"R$7,50", recommended:true},
	
	{name:"Torta Banoffee", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/torta-banoffee.jpg", 
		description:"A combinação perfeita! Banoffee Pie é uma torta de sobremesa Inglesa feita a partir de bananas, creme e doce de leite toffee, combinados com uma base de biscoito amanteigado. ", category:"sobremesas", price:"R$7,50", recommended:true},
	
	{name:"Pudim de Leite Condensado", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pudim-de-leite-condensado.jpg", 
		description:"Sem uso de trigo, esse pudim feito com leite condensado de primeira é maravilhoso.", category:"sobremesas", price:"R$4,50", recommended:true},
	
	{name:"Pastel de Belém", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/pastel-belem.jpg", 
		description:"Uma especiaria portuguesa, feita de massa folhada com um creme delicioso polvilhado com açúcar e canela. O pastel de belém ou pastel de nata é uma das mais populares especialidades da doçaria portuguesa.", category:"sobremesas", price:"R$5,90", recommended:true},
	
	{name:"Affogatto", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/affogato.jpg", 
		description:"O Affogato é uma sobremesa italiana feita à base de café. É servido em uma taça de sorvete de creme acompanhado de uma dose quente de café expresso.", category:"sobremesas", price:"R$6,50", recommended:true},

	//Taças	
	{name:"Taça Banoffee", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/taça-banoffee.jpg", 
		description:"Feito na Hora e na taça. A combinação perfeita! Banoffee Pie é uma torta de sobremesa Inglesa feita a partir de bananas, creme e doce de leite toffee, combinados com uma base de biscoito amanteigado. ", category:"sobremesas", price:"R$7,50", recommended:true},

	{name:"Taça Doce de Leite", imgURL:"https://raw.githubusercontent.com/yuri-barone/delicio/gh-pages/img/taça-doceleite.jpg", 
		description:"Ganache de chocolate, doce de leite *aviação, paçoquinha, morangos. ", category:"sobremesas", price:"R$7,50", recommended:true}
		
    
]

export const foodCategory = [
    {name:"Bebidas Geladas", icon:LocalBar},
    {name:"Bebidas Quentes", icon:LocalCafe},
    {name:"Lanches", icon:Fastfood},
    {name:"Sobremesas", icon:Cake},
    {name:"Estou com sorte!", icon:Whatshot}
]