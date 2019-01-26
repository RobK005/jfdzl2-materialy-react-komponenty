import React from 'react'

// const Greeting = props => {
//     return (
//     <div>
//       {
//       props.color
//       ? `Hello my name is ${props.name} and my favourite color is ${props.color}`
//       : `Hello my name is ${props.name}`
//       }
//     </div>
//     )
//   }

//---

class Greeting extends React.Component {
    render() {
        const { name, color } = this.props
        return (
            <div>
                {
                color
                    ? `Hello my name is ${name} and my favourite color is ${color}`
                    : `Hello my name is ${name}`
                }
            </div>
        )
    }
}


export default Greeting;