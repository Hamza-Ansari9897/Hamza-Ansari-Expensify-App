import {addExpense,removeExpense,editExpense} from '../../actions/expenses'
 

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should setup edit expense action object',()=>{
    const action=editExpense('123abc',{note:'New Note Value'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'New Note Value'
        }

    })
})
test('should setup add expense action with provided values',()=>{
    const expenseData={
        description:"Rent",
        amount:10000,
        createAt:1000,
        note:'This was last month rent'
    }
    const action =addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })

})
test('should setup add expense action with default values',()=>{
    const expenseData={
        description:"",
        amount:0,
        createAt:0,
        note:''
    }
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})