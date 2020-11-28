import React from 'react'
import ReactDOM  from 'react-dom'


const Info=(props)=>(
    <div>
    <h1>Some Info</h1>
    <p>This is my {props.info}</p>
    </div>
)
const withAdminWarning=(WrappedComponent)=>{
        return(props)=>(
            <div>
             {props.isAdmin&&<p>This is the warning form Admin</p>}
            <WrappedComponent {...props}/>
            </div>
        )
}
const requireAuthentication=(WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuthenticated?<WrappedComponent {...props}/>:<p>Please LOg in To see the info</p>}
        </div>
    )
}
const AdminWarning=withAdminWarning(Info)
const AuthInfo=requireAuthentication(Info);
ReactDOM.render(<AuthInfo  isAuthenticated={false} info="I love Gulshan"/>,document.getElementById('app'))