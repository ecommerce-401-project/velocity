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
            <Card className="col-lg-6 card">
              <CardImg src={data.imageURL} />
              <CardBody className="cardbody">
                <CardTitle className="text-left">{data.name} </CardTitle>
                <CardSubtitle className="text-left">
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
