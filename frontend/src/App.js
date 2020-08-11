import React, { Component } from 'react';
import axios from 'axios';

import { Container } from './styles/global';

import Header from './components/Header/';
import Spinner from './components/Spinner/';
import Candidates from './components/Candidates/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    const fetchData = async () => {
      return await axios('http://localhost:8080/votes').then((res) =>
        this.setState({ candidates: res.data.candidates })
      );
    };

    this.interval = setInterval(() => {
      return fetchData();
    }, 1000);
  }

  render() {
    const { candidates } = this.state;

    return (
      <>
        {candidates.length === 0 ? (
          <Spinner description="Carregando..." />
        ) : (
          <Container>
            <Header title={'Votação'} />
            <Candidates candidates={candidates} />
          </Container>
        )}
      </>
    );
  }
}
