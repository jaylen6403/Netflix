import React from "react";
import Display from "./display_list";
import Row from "./row_list";
import { connect, Provider } from "react-redux";
import { store, mapStateToProps, mapDispatchToProps } from "../store/store";
import "./style.css";

class Mvlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        <img src="netflix.jpg" alt="netflixtag" />
        <Row
          cate="mlist"
          list={this.props.mlist}
          btnHandler={this.props.onClickRemove}
        />

        <Row
          cate="rlist"
          list={this.props.rlist}
          btnHandler={this.props.onClickAdd}
        />

        <Display mlist={this.props.mlist} />
      </div>
    );
  }
}

const Mvlist1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mvlist);

export default function APP() {
  return (
    <Provider store={store}>
      <Mvlist1 />
    </Provider>
  );
}
