import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'
// ADD EXPENSE
const addExpense=({description='',note='',amount=0,createAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createAt
    }
})
// REMOVE EXPENSE
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})
// EDIT EXPENSE
const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})
// Expense Reducer
const expenseReducerDefaultState=[];
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
     switch(action.type){
         case 'ADD_EXPENSE':
             return [
                 ...state,
                 action.expense
             ];
         case 'REMOVE_EXPENSE':
             return state.filter(({id})=>id!=action.id)
         case 'EDIT_EXPENSE':
             return state.map((expense)=>{
                if(expense.id==action.id){
                    return{
                        ...state,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
             })
         default:
             return state;
     }
}
// SET TEXT FILTER
const setTextFilter=(text)=>({
     type:'SET_TEXT_FILTER',
     text
})
// SORT BY AMOUNT
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
})
// SORT BY DATE
const sortByDate=()=>({
    type:'SORT_BY_DATE'
})
// SET START DATE
const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
// SET END DATE
const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})
// Filter Reducer
const filterReducerDefaultState={
    text:'',
    sortBy:'Date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
               ...state,
               text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'Amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'Date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                    ...state,
                    endDate:action.endDate
            }
        default:
            return state;
    }
}
// get visible expenses
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{
                const startDateMatch=typeof startDate!=='number'||expense.createAt>=startDate;
                const endDateMatch=typeof endDate!=='number'||expense.createAt<=endDate;
                const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())
                return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy=='Date'){
                return a.createAt<b.createAt?1:-1;
            }
            if(sortBy=='Amount'){
                return a.amount<b.amount?1:-1;
            }
        })
}
// Creation Store
const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
    )
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
const expenseOne=store.dispatch(addExpense({description:'rent',amount:100,createAt:1000}))
const expenseTwo=store.dispatch(addExpense({description:'tent2',amount:200,createAt:-1000}))

// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:300}))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
const demoState={
    expenses:[{
        id:'dsfwsfw',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}



