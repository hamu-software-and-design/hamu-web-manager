import React from 'react'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'

/**
 * Wrapper component for CSSTransitionGroups
 */
export default class CSSTransitionGroupSync extends React.Component {
  static propTypes: {
    /** Transition name **/
    transitionName: PropTypes.string.isRequired,
    transitionEnterTimeout: PropTypes.number.isRequired,
    transitionLeaveTimeout: PropTypes.number.isRequired,
    transitionEnter: PropTypes.bool,
    transitionLeave: PropTypes.bool,
    transitionAppear: PropTypes.bool
  }
  static defaultProps: {
    transitionEnter: true,
    transitionLeave: true,
    transitionAppear: true
  }
  state = {
    mounted: false
  }
  componentDidMount() {
    this.setState({mounted:true})
  }
  render() {
    var children
    if(!this.props.transitionAppear){
      children = this.props.children;
    }
    else{
      if(this.state.mounted){
        children = this.props.children;
      }
    }
    return(
      <CSSTransitionGroup
        id={this.props.id}
        component={this.props.component}
        className={this.props.className}
        transitionEnterTimeout={this.props.transitionEnterTimeout}
        transitionLeaveTimeout={this.props.transitionLeaveTimeout}
        transitionName={this.props.transitionName}
        transitionEnter={this.props.transitionEnter}
        transitionLeave={this.props.transitionLeave}>
        {children}
      </CSSTransitionGroup>
    )
  }
}
