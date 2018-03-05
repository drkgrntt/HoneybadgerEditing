import {
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST,
  UNFETCH_BLOG_POST,
  FETCH_COMMENT,
  UNFETCH_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
  selectedBlog: {},
  selectedUid: '',
  selectedComment: {},
  selectedCommentUid: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return action.payload;
    case FETCH_BLOG_POST:
      return { ...state, selectedBlog: action.payload[0], selectedUid: action.payload[1] };
    case UNFETCH_BLOG_POST:
      return { ...state, selectedBlog: undefined, selectedUid: '' };
    case FETCH_COMMENT:
      return { ...state, selectedComment: action.payload[0], selectedCommentUid: action.payload[1] };
    case UNFETCH_COMMENT:
      return { ...state, selectedComment: undefined, selectedCommentUid: '' };
    default:
      return state;
  }
};
