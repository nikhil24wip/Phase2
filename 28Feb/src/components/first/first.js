import React, {Component} from 'react';
import Menu from '../menu/menu';
// import './first.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstActions from "../../store/first/actions";
export default class First extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      
      return <div className="component-First">
        <Menu/>
        This is my first component</div>;
      
    }
  }
// export default connect(
//     ({ first }) => ({ ...first }),
//     dispatch => bindActionCreators({ ...firstActions }, dispatch)
//   )( first );