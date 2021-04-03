import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class Menu extends Component {
    // props se usa parq las clases
    constructor(props) {
        super(props);

        // comente lo de abajo por que ahora lo estamos extrallendo del archivo  dishes.js
        this.state = {
            selectedDish: null
        }
        console.log('menu constructor is invoke')
        
    }

    componentDidMount(){
        console.log('componenent did mount is invoke')
    }


    onDishSelect(dish){
        this.setState({selectedDish:dish});
    };

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%"  src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )

        }else{
            return(
                <div></div>
            )

        }
    }

    render() {
        
        //ahora la forma para pasarlo como props
            const menu = this.props.dishes.map((dish) => {

            return (
                // utilizamos el key para regresar los valores respectivos de cada dish
                // tambien se esta hacienbdo un metodo para cuando se haga click en las tarjetas
              <div key={dish.id} className="col-12 col-md-5 m-1">
        
                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%"  src={dish.image} alt={dish.name} />
                    <CardImgOverlay >
                        <CardTitle >{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log('render is invoke')

        // finalmente aqui llamamos al menu como una variable 
        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu; 