import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/twitch';
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
            <div>
              <p> {data.text}</p>
            </div>
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
