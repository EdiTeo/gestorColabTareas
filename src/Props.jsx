import propTypes from 'prop-types'
function Props(props){
    //otras forma de utilizar estilos
    const nuevaForma={
        name: 'Edith Camacho',
        theme : {
            backgroundColor:'black',
            color: 'orange',
        }
    }
    return (
        <div style={{backgroundColor: 'pink'}}>
            <p >Name:{props.name}{nuevaForma.name}</p>
            <p>Age:{props.age}</p>
            <p style={nuevaForma.theme}>Es propom:{props.isProp? "Yes":"No"}</p>
        </div>
    );

}
Props.propTypes = { //para inicializar tipo constructor
    name:propTypes.string, 
    age:propTypes.number,                         
    isProp:propTypes.bool,
};
Props.defaultProps = {
    name: "Guest",
    age: 0,
    isProp: false,
};
export default Props;