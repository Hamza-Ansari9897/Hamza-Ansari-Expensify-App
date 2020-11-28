import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values',()=>{
    const state=filtersReducer(undefined,{type:'@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should setup sortBY to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set up sortBy  to date',()=>{
    const currentState={
        type:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SORT_BY_DATE'};
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date')
})

test('should setup text filter',()=>{
    const text='New text'
    const action={
        type:'SET_TEXT_FILTER',
        text
    }
    const state=filtersReducer(undefined,action)
    expect(state.text).toBe('New text')
})
test('should set startDate filter',()=>{
    const startDate=moment()
    const action={
        type:'SET_START_DATE',
        startDate
    }
    const state=filtersReducer(undefined,action)
    expect(state.startDate).toBe(startDate)
})
test('should set endDate filter',()=>{
    const endDate=moment()
    const action={
        type:'SET_END_DATE',
        endDate
    }
    const state=filtersReducer(undefined,action)
    expect(state.endDate).toBe(endDate)
})