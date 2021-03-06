import React from 'react';
import request from 'request';
import SuperDepartment from './superDepartment';
import MenuStore from './Store/menuStore';
import MenuAction from './Action/menuAction';

class Navigation extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        MenuAction.getMenuData();
    }
    handleClick(name, e) {
        document.getElementById('departmentMenu').style.display='none';
        document.getElementById('subDepartmentMenu').style.display='none';
        document.getElementById('aisle').style.display='none';
        if(name == 'Groceries'){
            document.getElementById('subnavigation').style.display = 'block';
            React.render(<SuperDepartment />, document.getElementById('departmentMenu'));
        }
    }
    
    renderMenu(item){
        var caretClassName ='';
        if(item == 'Groceries'){
            caretClassName = "caret";
        }
        return (<li className="dropdown" onClick={this.handleClick.bind(this, item)}>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">{item}<b className={caretClassName}></b> </a>
        </li>);
    }
    render() {
        var self = this;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Navigation</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {this.props.items.map(item => self.renderMenu(item))}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Navigation.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};

export default Navigation;