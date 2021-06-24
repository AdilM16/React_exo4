import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

let diams = <FontAwesomeIcon icon={faGem} />

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>exo4</h1>
        <Button> {diams} Mon Bouton</Button>
      </div>
    );
  }
}