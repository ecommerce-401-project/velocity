import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/twitch';
import { Col, Row } from 'reactstrap';
import './style.css';

class Twitch extends React.Component {
  componentDidMount = () => {
    this.props.getTwitchStreams();
  };
  render() {
    return (
      <div className="twitch">
        {this.props.livestreams.map(data => {
          return (
            <Row>
              <Col className="col-lg-12">
                <a href={data.stream.channel.url} target="_blank">
                  <img
                    src={data.stream.preview.large}
                    className="img-fluid video"
                  />
                </a>
                {}
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  livestreams: state.livestreams,
});

const mapDispatchToProps = dispatch => ({
  getTwitchStreams: () => dispatch(actions.getTwitchStreams()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitch);
