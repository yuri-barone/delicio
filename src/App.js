import React, { Component } from 'react';
import './App.css';
import MenuItem from './components/MenuItem'
import {foodItem} from './menuOptions'
import Grid from '@material-ui/core/Grid';
import Bar from './Bar'
import animateScrollTo from 'animated-scroll-to'

class App extends Component {
  state = {selectedCategory: 'Bebidas', arrayOfFoods:this.getRecommendeds(), x:0}
  

  getRecommendeds(){
    var arrayOfRecommendedsFood = foodItem.filter(food => food.recommended)
    return arrayOfRecommendedsFood
  }

  renderfoodItem(item, index){
    return (
      <Grid item className="width-left" key={index}>
      <MenuItem imgURL={item.imgURL} description={item.description} price={item.price} name={item.name} ></MenuItem>
      </Grid>
      
    )
  }

  valueChanged = val => {
    if (val === "estoucomsorte!") {
      this.ImLucky(val)
      return
    }
    var selectedCategory = val 
    var arrayOfFoods = foodItem.filter(function (food){
      return food.category === selectedCategory
    })
    
    
    this.setState({...this.state, arrayOfFoods, selectedCategory})
                          
  }

  ImLucky(val) {
    var selectedCategory = val

    var arrayOfFoodsDrinks = foodItem.filter(function(food) {return food.category === "bebidas"})
    var arrayOfFoodsDessert = foodItem.filter(function(food){return food.category === "sobremesas"})
    var arrayOfFoodsSnacks = foodItem.filter(function(food){return food.category === "lanches"})
    
    var RandomDrink = arrayOfFoodsDrinks[Math.floor(Math.random()*arrayOfFoodsDrinks.length)]
    var RandomDessert = arrayOfFoodsDessert[Math.floor(Math.random()*arrayOfFoodsDessert.length)]
    var RandomSnack = arrayOfFoodsSnacks[Math.floor(Math.random()*arrayOfFoodsSnacks.length)]

    var arrayOfFoods = [RandomDrink, RandomDessert, RandomSnack]

    this.setState({...this.state, arrayOfFoods, selectedCategory})
  }

  giveWidth() {
    var num = this.state.arrayOfFoods.length
    
    var resultWidth = num * 341

    return resultWidth
  }

  scrollFunction(){    
    const x = this.state.x + 341
    this.setState({...this.state, x})    
    animateScrollTo(x, {horizontal: true, speed:5000})

  }

    startCounter(){     
      var legalTimer = setInterval(this.scrollFunction.bind(this), 3000)
    }

    componentDidMount(){
      this.startCounter()
    }
    
    
    
  render() {
    
    return (    
      <div >
      <Bar onChangeselectedCategory={this.valueChanged} filter={this.filterByCategory}> </Bar>
      
       <Grid id="containerMoviment" style={{width:this.giveWidth(), paddingTop:59 }} container spacing={24}>     
         
         {this.state.arrayOfFoods.map(this.renderfoodItem)}
        
      </Grid>
      </div>
    );
  }


}

export default App;

/*
  fazer botao de rolamento
  fazer barra se movimentar solo
  subir no gitpages
*/