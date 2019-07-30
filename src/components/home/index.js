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
} from 'reactstrap';
import './style.css';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getGames();
  };

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
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch(actions.getAllGames()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
