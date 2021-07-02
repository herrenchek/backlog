import React from 'react';

// Implicit return
const Header = props => (
    <header className="top">
        <h1>{props.title}</h1>
    </header>
);

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>{this.props.title}</h1>
//             </header>
//         );
//     }
// }

export default Header;