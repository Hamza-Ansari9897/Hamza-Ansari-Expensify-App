import moment from 'moment'

export default[{
    id:'1',
    description:'Rent',
    note:'',
    amount:109500,
    createAt:moment(0).valueOf()
},
{
    id:'2',
    description:'Gum',
    note:'',
    amount:45,
    createAt:moment(0).add(4,'days').valueOf()
},
{
    id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createAt:moment(0).subtract(4,'days').valueOf()
}]