import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store=configureStore();

// store.dispatch(addExpense({description:'Water Bill',amount:100}))

// store.dispatch(addExpense({description:'Gas Bill',amount:700,createAt:100}))

// store.dispatch(addExpense({description:'Electric Bill',amount:300}))

// store.dispatch(addExpense({description:'Rent ',amount:6000,createAt:1000}))

// store.dispatch(addExpense({description:'School fees',amount:500,createAt:300}))



const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx=(
    <Provider store={store}>
       <AppRouter/>
    </Provider>
   
)

ReactDOM.render(jsx, document.getElementById('app'));
