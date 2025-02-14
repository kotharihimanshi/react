import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>learning react</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',                          this syntax wont work directly as it is tree | it is custom react
//     props: {
//         href: 'https://www.example.com',
//         target: '_blank',                                              
//     },
//     children: 'Visit Example'
// }

// const AnotherElement = (
//     <a href='https://www.example.com' target='_blank'>Visit Example</a>
// )

const reactElement = React.createElement(
    'a',
    {href: 'https://www.example.com', target: '_blank'},
    'Visit Example'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <Myapp/>
    // AnotherElement          const
    reactElement
)
