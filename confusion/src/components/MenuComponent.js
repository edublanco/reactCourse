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
        // objeto js
        // solo los componentes tipo clase tienen un state,  es donde  guarda su informacion local
        // esta info se pasa a los hijos con el uso de props
        // para hacer cambios al state se usa this.setState...
        /*this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        };*/
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
        // vamos a guardar el objeto en una variable y lo vamos a mapear en un diccionario
        // el map sirve para iterar el array, lista, etc
        //const menu = this.state.dishes.map((dish) => {
        
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