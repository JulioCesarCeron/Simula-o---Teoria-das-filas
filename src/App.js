import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        chegadas: [],
        servico: [],
        cal_chegadas: [],
        cal_servico:[],
        num_m_carros_no_sistema: [],
        tempo_m_despendido_no_sistema: [],
        taxa_m_ocupacao_do_servidor: []
    }

    handlerValues = (event) => {
        console.log(event.target.value);
    }
   
    render() {
        return (
            <div>
                <div className="pos-f-t">
                    <nav className="navbar navbar-dark bg-dark">
                        <h1 className="title-custom" >Simulação - teoria das filas</h1>
                    </nav>
                </div>

                <div className="App container-fluid">
                    
                    <div className="row">
                        <div className="col">
                            <p><strong>Considere o período de 1 hora, os dados da tabela abaixo e calcule os valores solicitados</strong></p>
                            <p><strong>1 Hora = 60 min</strong></p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="form-group col-4 mx-auto">
                            <input type="text" ref="timeSimulation" onChange={this.handlerValues} className="form-control" id="time_simulation" placeholder="Tempo da Simulação" />
                        </div>


                        <div className="container m-t-20">
                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-9">
                                    Cenário
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    
                                </div>
                                <div className="col-sm col-6">
                                    A
                                </div>
                                <div className="col-sm">
                                    B
                                </div>
                                <div className="col-sm">
                                    C
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    Chegadas
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    Serviços
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-t-50">
                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-9">
                                    Cenário
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    
                                </div>
                                <div className="col-sm col-6">
                                    <strong>A</strong>
                                </div>
                                <div className="col-sm">
                                    <strong>B</strong>
                                </div>
                                <div className="col-sm">
                                    <strong>C</strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong>λ Chegadas</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong> µ Serviços</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="container m-t-50 ">
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Número Médio de Carros no Sistema (L)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Tempo Médio Despendido no Sistema (W)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Taxa Média de Ocupação do Servidor (p)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                                <div className="col-sm">
                                    <input type="email" className="form-control" id="time_simulation" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-t-50">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">x</th>
                                        <th scope="col">P(x)</th>
                                        <th scope="col">A</th>
                                        <th scope="col">B</th>
                                        <th scope="col">C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
