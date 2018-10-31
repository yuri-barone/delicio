import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './App.css';
import {foodCategory} from './menuOptions'

class Bar extends Component {
    state = {selectedCategory: this.props.selectedCategory}

    renderMenuOptions(foodCategory, index){
        return(
            <BottomNavigationAction  label={foodCategory.name} key={index} value={foodCategory.name.replace(/ /g,'').toLowerCase()} icon={<foodCategory.icon />} />
        );

    }

    onChangeValue = (evt, val) => {
        this.setState({selectedCategory : val})
        this.props.onChangeselectedCategory(val)
        
    }

    resetCategories = () => this.setState({selectedCategory : undefined})

    render(){
        const {selectedCategory} = this.state
        return(
    <div className="Position-fixed">
      <BottomNavigation showLabels value={selectedCategory} onChange={this.onChangeValue}>
        {
            foodCategory.map(this.renderMenuOptions)
        }
      </BottomNavigation>
    </div>
        );
    }
}

export default Bar;