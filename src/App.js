import React, { Component } from 'react';
import './App.css';
import MenuItem from './components/MenuItem'
import {foodItem} from './menuOptions'

import Grid from '@material-ui/core/Grid';
import Bar from './Bar'

class App extends Component {
  state = {selectedCategory: 'Bebidas', arrayOfFoods:this.getRecommendeds()}

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
    
    
    this.setState({arrayOfFoods, selectedCategory})
                          
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

    this.setState({arrayOfFoods, selectedCategory})
  }

  giveWidth(){
    var num = this.state.arrayOfFoods.length
    
    var resultWidth = num * 341

    return resultWidth
  }

    
  render() {
    return (    
      <div >
      <Bar onChangeselectedCategory={this.valueChanged} filter={this.filterByCategory}> </Bar>
       <Grid style={{width:this.giveWidth(), paddingTop:59 }} container spacing={24}>     
         
         {this.state.arrayOfFoods.map(this.renderfoodItem)}
        
      </Grid>
      </div>
    );
  }


}

export default App;
