import React from 'react';
import { connect } from 'react-redux';
import Featured from '../featured';
import * as actions from '../../redux/actions/game-actions';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Button,
} from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getGames();
    this.props.checkGames(this.props.user.token);
  };

  handleSave = (data) => {
    this.props.saveGame(data, this.props.user.token);
  }

  savedCheck = (data) => {
    return this.props.savedGames.some(game => {
      return game._id === data._id;
    });
  }

  render() {
    return (
      <div>
        <Featured />
        <Container>
          <Row>
            {this.props.games.map(data => {
              const isSaved = this.savedCheck(data);
              return (
                <Card className="col-lg-6 card" key={data._id}>
                  <CardImg src={data.imageURL} className="img-fluid" />
                  <CardBody className="cardbody">
                    <Link to={`/game/${data._id}`} className="a">
                      <CardTitle className="text-left medium">
                        {data.name}{' '}
                      </CardTitle>
                    </Link>
                    <CardSubtitle className="text-left subtitle">
                      {data.creator}
                    </CardSubtitle>
                    <Button onClick={() => this.handleSave(data)}  disabled={isSaved}>{isSaved ? 'Added to Wishlist' : 'Save to Wishlist'}</Button>
                  </CardBody>
                </Card>
              );
            })}
          </Row>
        </Container>
       </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games,
  user: state.currentUser,
  savedGames: state.savedGames,
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch(actions.getAllGames()),
  saveGame: (data, token) => dispatch(actions.saveGame(data, token)),
  checkGames: (token) => dispatch(actions.checkSavedGames(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
