import React, { Component } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import {foodItem} from './menuOptions';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar';
import animateScrollTo from 'animated-scroll-to';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

var innativeTimeout;
var activeTimeout;

class App extends Component {
  state = {selectedCategory: 'Bebidas', arrayOfFoods:this.getRecommendeds(), x:0, side:"right", hasScroll:true}


  checkIfHasScrollBar(){
    var maximumScrollWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth
    var hasScroll = true
    if (maximumScrollWidth === 0) {
      hasScroll = false      
    }
    return hasScroll    
  }
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

  componentDidUpdate(){
    let hasScroll = this.checkIfHasScrollBar()
    if(hasScroll !== this.state.hasScroll){
      this.setState({...this.state, hasScroll})    
    }
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
    var hasScroll = this.checkIfHasScrollBar()
    animateScrollTo(0, {horizontal:true, speed:10000})
    this.setState({...this.state, arrayOfFoods, selectedCategory, hasScroll})
    
          
  }

  ImLucky(val) {
    var selectedCategory = val

    var arrayOfFoodsDrinks = foodItem.filter(function(food){return food.category === "bebidasquentes"})
    var arrayOfFoodsDessert = foodItem.filter(function(food){return food.category === "sobremesas"})
    var arrayOfFoodsSnacks = foodItem.filter(function(food){return food.category === "lanches"})
    
    var RandomDrink = arrayOfFoodsDrinks[Math.floor(Math.random()*arrayOfFoodsDrinks.length)]
    var RandomDessert = arrayOfFoodsDessert[Math.floor(Math.random()*arrayOfFoodsDessert.length)]
    var RandomSnack = arrayOfFoodsSnacks[Math.floor(Math.random()*arrayOfFoodsSnacks.length)]

    var arrayOfFoods = [RandomDrink, RandomDessert, RandomSnack]
    var hasScroll = this.checkIfHasScrollBar()
    this.setState({...this.state, arrayOfFoods, selectedCategory, hasScroll})
  }

  giveWidth() {
    var num = this.state.arrayOfFoods.length
    
    var resultWidth = num * 341
    
    return resultWidth
  }

  scrollFunction(){    
    var maximumScrollWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth

    if (document.documentElement.scrollLeft === maximumScrollWidth) {
      var side = "left"
      this.setState({...this.state, side})
    }

    if (document.documentElement.scrollLeft === 0) {
      var side = "right"
      this.setState({...this.state, side})
    }

    if (this.state.side === "right") {
    const x = this.state.x + 341
    this.setState({...this.state, x})    
    animateScrollTo(x, {horizontal: true, speed:5000})
    }

    if (this.state.side === "left") {
    
    const x = this.state.x - 341
    this.setState({...this.state, x})    
    animateScrollTo(x, {horizontal: true, speed:5000})
    }
    

  }

    startCounter(){     
    this.setState({...this.state, arrayOfFoods:this.getRecommendeds()})
    activeTimeout = setInterval(this.scrollFunction.bind(this), 3000)
    }

    componentDidMount(){
      this.startOfAll()
      this.checkIfHasScrollBar()
    }

    

    startOfAll(){
      document.documentElement.addEventListener("mousemove", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("mousedown", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("keypress", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("DOMMouseScroll", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("mousewheel", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("touchmove", this.resetTimer.bind(this), false);
      document.documentElement.addEventListener("MSPointerMove", this.resetTimer.bind(this), false);

      this.innativeTimer()
    }
    
    innativeTimer(){
      innativeTimeout = window.setTimeout(this.startCounter.bind(this), 15000);
      
    }

    goActive(){
      clearInterval(activeTimeout)
      this.innativeTimer()
    }
    
    resetTimer(e) {
      window.clearTimeout(innativeTimeout);
      this.goActive()
  }

    goRightDirection(){
      const x = document.documentElement.scrollLeft + 341
      animateScrollTo(x, {horizontal: true, speed:5000})
    }

    goLeftDirection(){
      const x = document.documentElement.scrollLeft - 341
      animateScrollTo(x, {horizontal: true, speed:5000})
    }

  render() {
    
    return (    
      <div >
      <Bar onChangeselectedCategory={this.valueChanged} filter={this.filterByCategory}> </Bar>
      
       <Grid id="containerMoviment" style={{width:this.giveWidth(), paddingTop:59 }} container spacing={24}>     
         
         {this.state.arrayOfFoods.map(this.renderfoodItem)}
        
      </Grid>
      { this.state.hasScroll && <Button variant="fab" onClick={this.goLeftDirection} className="button-left">
        <ChevronLeft />
      </Button>}
      { this.state.hasScroll && <Button variant="fab" onClick={this.goRightDirection} className="button-right">
        <ChevronRight />
      </Button>}
      </div>
    );
  }


}

export default App;

/*
    Aumentar buttonNavigation 
    quando rodar não selecionar nenhum
    Colocar na tela "toque na tela e selecione uma opção"
    https://github.com/yuri-barone/delicio/blob/gh-pages/img/
*/