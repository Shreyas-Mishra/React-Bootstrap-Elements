import React, { Component } from 'react';
import Nav from '../../nav1/nav1';
import { DISHES } from '../Home/dishes';
import { Card, CardImg } from 'react-bootstrap';
import SearchBox from '../../components/SearchBox'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            searchField: ''
        };
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { dishes, searchField } = this.state
        const filteredCountries = dishes.filter(dishes => (
            dishes.name.toLowerCase().includes(searchField.toLowerCase()) || dishes.category.toLowerCase().includes(searchField.toLowerCase())

        ))

        const menu = filteredCountries.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="60%" src={dish.image} alt={dish.name} />
                        <div>
                            <h3>Name : {dish.name}</h3>
                            <h4>Style : {dish.category}</h4>
                            <h4>Price : {dish.price}</h4>
                        </div>
                    </Card>
                </div>
            );
        });
        if (filteredCountries.length === 0) {
            return (
                <div>
                    <Nav >
                    </Nav>
                    <SearchBox placeholder="Search" handleChange={this.handleChange} />
                    <p>No Data Found!</p>
                </div>
            )
        }
        else
            return (
                <div>
                    <Nav >
                    </Nav>
                    <SearchBox placeholder="Search" handleChange={this.handleChange} />
                    {menu}
                </div>
            )
    }
}

export default Home;