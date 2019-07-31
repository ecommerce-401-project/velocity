import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/game-actions';
import './style.css';
import { Container, Row, Button, Card, CardImg, CardBody } from 'reactstrap';

class GameView extends React.Component {
  componentDidMount = () => {
    this.props.gameById(this.props.match.params.gameId);
  };

  render() {
    if (!this.props.gameView) return <p> game not found </p>;
    return (
      <div>
        <Container className="text-left padding20">
          <Card>
            <CardImg src={this.props.gameView.imageURL} />
            <CardBody>
              <h1 className="large"> {this.props.gameView.name}</h1>
              <h2 className="medium">{this.props.gameView.creator} </h2>
              {this.props.gameView.description}
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameView: state.gameView,
});

const mapDispatchToProps = dispatch => ({
  gameById: gameId => dispatch(actions.gameById(gameId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView);
