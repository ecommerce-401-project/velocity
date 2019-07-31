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
} from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';


class UserLibrary extends React.Component {
  componentDidMount = () => {
    this.props.checkGames(this.props.user.token);
  };

  savedCheck = (data) => {
    return this.props.savedGames.some(game => {
      return game._id === data._id;
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.savedGames.map(data => {
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
  user: state.currentUser,
  savedGames: state.savedGames,
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch(actions.getAllGames()),
  checkGames: (token) => dispatch(actions.checkSavedGames(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLibrary);