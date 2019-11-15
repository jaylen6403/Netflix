import { createStore, bindActionCreators } from "redux";
import movieList from "./data";

const onClickRemove = index => ({
  type: "REMOVE",
  id: index
});

const onClickAdd = index => ({
  type: "ADD",
  id: index
});

const initState = {
  mlist: movieList.mylist,
  rlist: movieList.recommendations
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD": {
      const rlist_copy = [...this.state.rlist];
      const add_item = rlist_copy.splice(action.id, 1)[0];
      const mlist_copy = [add_item, ...this.state.mlist];

      return {
        mlist: mlist_copy,
        rlist: rlist_copy
      };
    }
    case "REMOVE": {
      const mlist_copy = [...this.state.mlist];
      const remove_item = mlist_copy.splice(action.id, 1)[0];
      const rlist_copy = [remove_item, ...this.state.rlist];

      return {
        mlist: mlist_copy,
        rlist: rlist_copy
      };
    }
    default:
      return state;
  }
};

export const store = createStore(reducer);
export const mapStateToProps = state => ({ ...state });
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onClickAdd, onClickRemove }, dispatch);
};
