import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        time_simulation: '',
        chegadas_a: '',
        chegadas_b: '',
        chegadas_c: '',
        servico_a: '',
        servico_b: '',
        servico_c: '',
        cal_chegadas_a: '',
        cal_chegadas_b: '',
        cal_chegadas_c: '',
        cal_servico_a: '',
        cal_servico_b: '',
        cal_servico_c: '',
        num_m_carros_no_sistema_a: '',
        num_m_carros_no_sistema_b: '',
        num_m_carros_no_sistema_c: '',
        tempo_m_despendido_no_sistema_a: '',
        tempo_m_despendido_no_sistema_b: '',
        tempo_m_despendido_no_sistema_c: '',
        taxa_m_ocupacao_do_servidor_a: '',
        taxa_m_ocupacao_do_servidor_b: '',
        taxa_m_ocupacao_do_servidor_c: '',
    }

    handlerValues = (value, event) => {
        if(value === 'time_simulation') {
            this.setState({
                time_simulation: event.target.value
            });
        } else if (value === 'chegadas_a') {
            this.setState({
                chegadas_a: event.target.value
            });
        } else if (value === 'chegadas_b') {
            this.setState({
                chegadas_b: event.target.value
            });
        } else if (value === 'chegadas_c') {
            this.setState({
                chegadas_c: event.target.value
            });
        } else if (value === 'servico_a') {
            this.setState({
                servico_a: event.target.value
            });
        } else if (value === 'servico_b') {
            this.setState({
                servico_b: event.target.value
            });
        } else if (value === 'servico_c') {
            this.setState({
                servico_c: event.target.value,
                cal_chegadas_a: (this.state.time_simulation / this.state.chegadas_a),
                cal_chegadas_b: (this.state.time_simulation / this.state.chegadas_b),
                cal_chegadas_c: (this.state.time_simulation / this.state.chegadas_c),
                cal_servico_a: (this.state.time_simulation / this.state.servico_a),
                cal_servico_b: (this.state.time_simulation / this.state.servico_b),
                cal_servico_c: (this.state.time_simulation / event.target.value),
            });

            this.setState({
                num_m_carros_no_sistema_a: (this.state.cal_chegadas_a / (this.state.cal_servico_a - this.state.cal_chegadas_a)),
                num_m_carros_no_sistema_b: (this.state.cal_chegadas_b / (this.state.cal_servico_b - this.state.cal_chegadas_b)),
                num_m_carros_no_sistema_c: (this.state.cal_chegadas_c / (this.state.cal_servico_c - this.state.cal_chegadas_c)),
                tempo_m_despendido_no_sistema_a: (1 / (this.state.cal_servico_a - this.state.cal_chegadas_a)),
                tempo_m_despendido_no_sistema_b: (1 / (this.state.cal_servico_b - this.state.cal_chegadas_b)),
                tempo_m_despendido_no_sistema_c: (1 / (this.state.cal_servico_c - this.state.cal_chegadas_c)),
                taxa_m_ocupacao_do_servidor_a: (this.state.cal_chegadas_a / this.state.cal_servico_a),
                taxa_m_ocupacao_do_servidor_b: (this.state.cal_chegadas_b / this.state.cal_servico_b),
                taxa_m_ocupacao_do_servidor_c: (this.state.cal_chegadas_c / this.state.cal_servico_c),
            });

        }
    }
   
    render() {

        let table_content = (
            <tbody>
                <tr>
                    <th scope="row">0</th>
                    <td>P(0)</td>
                    <td>{(1-(this.state.cal_chegadas_a / this.state.cal_servico_a))* Math.pow((this.state.cal_chegadas_a/this.state.cal_servico_a), 0)}</td>
                    <td>{(1-(this.state.cal_chegadas_b / this.state.cal_servico_b))* Math.pow((this.state.cal_chegadas_b/this.state.cal_servico_b), 0)}</td>
                    <td>{(1-(this.state.cal_chegadas_c / this.state.cal_servico_c))* Math.pow((this.state.cal_chegadas_c/this.state.cal_servico_c), 0)}</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>P(1)</td>
                    <td>{(1-(this.state.cal_chegadas_a / this.state.cal_servico_a))* Math.pow((this.state.cal_chegadas_a/this.state.cal_servico_a), 1)}</td>
                    <td>{(1-(this.state.cal_chegadas_b / this.state.cal_servico_b))* Math.pow((this.state.cal_chegadas_b/this.state.cal_servico_b), 1)}</td>
                    <td>{(1-(this.state.cal_chegadas_c / this.state.cal_servico_c))* Math.pow((this.state.cal_chegadas_c/this.state.cal_servico_c), 1)}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>P(2)</td>
                    <td>{(1-(this.state.cal_chegadas_a / this.state.cal_servico_a))* Math.pow((this.state.cal_chegadas_a/this.state.cal_servico_a), 2)}</td>
                    <td>{(1-(this.state.cal_chegadas_b / this.state.cal_servico_b))* Math.pow((this.state.cal_chegadas_b/this.state.cal_servico_b), 2)}</td>
                    <td>{(1-(this.state.cal_chegadas_c / this.state.cal_servico_c))* Math.pow((this.state.cal_chegadas_c/this.state.cal_servico_c), 2)}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>P(3)</td>
                    <td>{(1-(this.state.cal_chegadas_a / this.state.cal_servico_a))* Math.pow((this.state.cal_chegadas_a/this.state.cal_servico_a), 3)}</td>
                    <td>{(1-(this.state.cal_chegadas_b / this.state.cal_servico_b))* Math.pow((this.state.cal_chegadas_b/this.state.cal_servico_b), 3)}</td>
                    <td>{(1-(this.state.cal_chegadas_c / this.state.cal_servico_c))* Math.pow((this.state.cal_chegadas_c/this.state.cal_servico_c), 3)}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>P(x>=4)</td>
                    <td>{(1-(this.state.cal_chegadas_a / this.state.cal_servico_a))* Math.pow((this.state.cal_chegadas_a/this.state.cal_servico_a), 4)}</td>
                    <td>{(1-(this.state.cal_chegadas_b / this.state.cal_servico_b))* Math.pow((this.state.cal_chegadas_b/this.state.cal_servico_b), 4)}</td>
                    <td>{(1-(this.state.cal_chegadas_c / this.state.cal_servico_c))* Math.pow((this.state.cal_chegadas_c/this.state.cal_servico_c), 4)}</td>
                </tr>
            </tbody>
        );

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
                            <input type="text" ref="timeSimulation" onChange={(event) => this.handlerValues('time_simulation', event)} className="form-control" id="time_simulation" placeholder="Tempo da Simulação" value={this.state.time_simulation} />
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
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('chegadas_a', event)} value={this.state.chegadas_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('chegadas_b', event)} value={this.state.chegadas_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('chegadas_c', event)} value={this.state.chegadas_c} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    Serviços
                                </div>
                                <div className="col-sm col-6">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('servico_a', event)} value={this.state.servico_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('servico_b', event)} value={this.state.servico_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('servico_c', event)} value={this.state.servico_c} />
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
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_chegadas_a', event)} value={this.state.cal_chegadas_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_chegadas_b', event)} value={this.state.cal_chegadas_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_chegadas_c', event)} value={this.state.cal_chegadas_c} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong> µ Serviços</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_servico_a', event)} value={this.state.cal_servico_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_servico_b', event)} value={this.state.cal_servico_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" onChange={(event) => this.handlerValues('cal_servico_c', event)} value={this.state.cal_servico_c} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="container m-t-50 ">
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Número Médio de Carros no Sistema (L)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="text" className="form-control" value={this.state.num_m_carros_no_sistema_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.num_m_carros_no_sistema_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.num_m_carros_no_sistema_c} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Tempo Médio Despendido no Sistema (W)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="text" className="form-control" value={this.state.tempo_m_despendido_no_sistema_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.tempo_m_despendido_no_sistema_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.tempo_m_despendido_no_sistema_c} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <strong>Taxa Média de Ocupação do Servidor (p)</strong>
                                </div>
                                <div className="col-sm col-6">
                                    <input type="text" className="form-control" value={this.state.taxa_m_ocupacao_do_servidor_a} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.taxa_m_ocupacao_do_servidor_b} />
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={this.state.taxa_m_ocupacao_do_servidor_c} />
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
                                {table_content}
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
