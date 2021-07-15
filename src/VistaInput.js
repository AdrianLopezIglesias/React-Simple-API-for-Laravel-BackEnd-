import React from 'react';
import axios from 'axios';

class ListaNotas extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            busqueda: '',
            notasFiltradas: [],
            notas: []
        };
    }
    componentDidUpdate(prevProps){

        if (this.props.notas !== prevProps.notas) {
            this.setState((props) => {
                return {
                    notas: this.props.notas,
                    notasFiltradas: this.props.notas,
                };
              });

        }

    }
       handleSearch(event) {
        this.setState({
            busqueda: event.target.value
        });
        if(event.target.value === ""){
            this.setState({
                notasFiltradas: this.state.notas
            })
        }else{
            let notasFiltradas = [];
            this.state.notas.filter((element) => {
                if(element.texto.toLowerCase().includes(event.target.value.toLowerCase())){
                    notasFiltradas.push(element)
                }
            });
            this.setState({
                notasFiltradas: notasFiltradas
            })
        }
    }
    handleClick(e) {
        this.props.onSeleccionNota(e);
    }
    render() {
        let notas = this.state.notasFiltradas;
        let listItems = notas.map((nota) =>
            <div className="d-grid gap-2">
                <a
                    key={nota.id}
                    onClick={(e) => this.handleClick(nota.id, e)}
                    className={nota.id === this.props.seleccion ? 'btn btn-outline-primary' : 'btn btn-outline-secondary'}
                >
                    {nota.texto}
                </a>
                <br></br>
            </div>

        );
        return (
            <div>
                <br></br>
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.handleSearch}
                >
                </input>       
                <br></br>
                <div >{listItems}</div>
            </div>
        );
    }
}

export class VistaInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            notas: [],
            seleccion: '0'
        };
        this.handleChange = this.handleChange.bind(this);
        this.guardarNota = this.guardarNota.bind(this);
        this.handleNotaSelection = this.handleNotaSelection.bind(this);
        this.nuevaNota = this.nuevaNota.bind(this);
    }
    async getTodos() {
        const config = {
            headers: { Authorization: `Bearer 14|rfFORj0lcfBZBE8XKv32TWygBfmmqssiJ1WsF0cz` }
        };
        const bodyParameters = {
           key: "",
           notas: this.state.notas
        };        
        axios.get(
            'http://webpersonal/api/notas', 
            bodyParameters,
            config
        )
            .then(response => {
                this.setState({
                    notas: JSON.parse(response.data)
                })
            })
            .catch(function (error) {
            });
    }
    componentDidMount() {
        this.getTodos();
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.guardarNota();
    }

    handleNotaSelection(nota) {
        this.guardarNota();
        let notaSeleccionada = this.state.notas.filter(function (element) {
            return element.id === nota
        });
        this.setState({
            value: notaSeleccionada[0].texto,
            seleccion: notaSeleccionada[0].id
        })
    }
    nuevaNota(event) {
        this.setState({
            value: '',
            seleccion: ''
        });
    }

    guardarNota() {
        if(this.state.value === ""){
            return "";
        }
        let notaSeleccionada = this.state.notas.filter((element) => {
            return element.id === this.state.seleccion
        });
        let notas = this.state.notas
        if (notaSeleccionada.length > 0) {
            notas.map((element) => {
                if (element.id === this.state.seleccion) {
                    return element.texto = this.state.value;
                }
            });
            this.setState({
                notas: notas
            })
        } else {
            this.guardarNuevaNota(this.state.value);
        }

        const config = {
            headers: { Authorization: `Bearer 14|rfFORj0lcfBZBE8XKv32TWygBfmmqssiJ1WsF0cz` }
        };
        const bodyParameters = {
           key: "",
           notas: this.state.notas
        };        
        const access_token = '14|rfFORj0lcfBZBE8XKv32TWygBfmmqssiJ1WsF0cz';
        axios.put(
            'http://webpersonal/api/notas/1', 
            bodyParameters,
            config
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
            });

    }
    guardarNuevaNota(texto) {
        let nota = {
            id: Math.random().toString(36).substr(2, 4),
            texto: texto
        };
        this.setState({
            notas: this.state.notas.concat(nota),
            seleccion: nota.id
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Opciones
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" onClick={this.nuevaNota} href="#">
                                    Nueva nota
                                </a>
                            </li>
                            <li> 
                                <a className="dropdown-item" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    Ver notas guardadas
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" 
                            onClick={this.nuevaNota} href="#">
                                Eliminar nota
                                </a>    
                            </li>
                           
                        </ul>
                    </div>
                <textarea 
                    onChange={this.handleChange}
                    value={this.state.value}
                    rows="24"
                    className="main-text-input form-control">
                </textarea>
                <div className="row">  
                   {/*
                        <div className="col-6  d-grid gap-2"> 
                            <button
                                className="btn btn-outline-secondary btn-block"
                                onClick={this.guardarNota}
                                type="submit">
                                Guardar
                            </button>
                        </div>
                    */}

                    {/*
                    <div className="col-6 d-grid gap-2">
                        <button 
                            className="btn btn-outline-secondary  btn-block"
                            onClick={this.nuevaNota}
                            type="submit">
                            Nueva
                        </button>
                    </div>
                    */}
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ListaNotas
                        onSeleccionNota={this.handleNotaSelection}
                        seleccion={this.state.seleccion}
                        notas={this.state.notas}
                    />
                </div>
                </div>
                                                

                </div>

            </div>
        );
    }
}

