import React, { Component } from 'react'
import { Media, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export class DishDetail extends Component {

    renderDish(dish) {
        console.log('dish card is rendering')
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        if (comments.length == 0) return (<div></div>);

        const list = this.props.dish.comments.map(item => {
            // let date = new Date(Date.parse(item.date));
            // let month = date.toLocaleString('default', { month: 'short' });
            // let showDate = month + ' ' + date.getDate() + ', ' + date.getFullYear();

            return (
                <>
                    <p>{item.comment}</p>
                    <p>--{item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</p>
                </>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </div>
        )
    }

    render() {
        const dish = this.props.dish;
        if (dish == null) return <div></div>

        return (

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetail
