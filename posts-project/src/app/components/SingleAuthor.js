
import React, { Component } from 'react';
import { fetchAuthor } from '../services/fetchAuthor'
import User from '../entities/user';

class SingleAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                "id": 1,
                "name": "Novakovic Milan",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }
        }
    }
    render() {
        return (
            <div className="author">
                <div>
                    <div>
                        <img src="https://imgplaceholder.com/200x200" />
                    </div>
                    <div>
                        <h3>{this.state.user.name}</h3>
                        <p>username: {this.state.user.username}</p>
                        <p>email: {this.state.user.email}</p>
                        <p>phone: {this.state.user.phone}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Address</h3>
                        <p>street: {this.state.user.address.street}</p>
                        <p>city: {this.state.user.address.city}</p>
                        <p>zipcode: {this.state.user.address.zipcode}</p>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23152.81133262857!2d21.132073282774073!3d43.50021984387117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47566439b89b6597%3A0xda2f9b820050b22a!2zTGHEh2lzbGVk!5e0!3m2!1sen!2srs!4v1554478676716!5m2!1sen!2srs" width="300" height="200"></iframe>
                    </div>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>name: {this.state.user.company.name}</p>
                    <p>slogan: {this.state.user.company.catchPhrase}</p>
                </div>
            </div>
        )
    }
}

export default SingleAuthor