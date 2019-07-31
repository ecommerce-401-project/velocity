import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/game-actions';

class GameView extends React.Component {
  componentDidMount = () => {
    this.props.gameById(this.props.match.params.gameId);
  };

  render() {
    if (!this.props.gameView) return <p> game not found </p>;
    return <div>{this.props.gameView.creator}</div>;
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
