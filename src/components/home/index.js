import React from 'react';
import { connect } from 'react-redux';
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

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getGames();
    this.props.checkGames(this.props.user.token);
  };

  handleSave = (data) => {
    this.props.saveGame(data, this.props.user.token);
    this.checkForSaved()
  }

  checkForSaved = () => {
    this.props.checkGames(this.props.user.token);
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.games.map(data => (
            <Card className="col-lg-6 card" key={data._id}>
              <CardImg src={data.imageURL} className="img-fluid" />
              <CardBody className="cardbody">
                <CardTitle className="text-left medium">{data.name} </CardTitle>
                <CardSubtitle className="text-left subtitle">
                  {data.creator}
                </CardSubtitle>
                <Button onClick={() => this.handleSave(data)}>Save to Library</Button>
              </CardBody>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games,
  user: state.currentUser,
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
