import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container text-center">
                    <h1 className="display-5">Project Quản Lý Thành Viên Bằng React JS</h1>
                    <p className="lead">Với Dữ Liệu JSON</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;