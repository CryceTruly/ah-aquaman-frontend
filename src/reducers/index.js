import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileReducer from "./profile/profileReducer";
import resetPasswordReducer from "./resetReducer/resetPasswordReducer";
import ArticleReducer from "./articleReducer";
import articleCreateReducer from "./articleCreateReducer";
import fetchArticlesReducer from "./fetchArticleReducer";
import followUnfollow from "./followunfollow/followUnfollow";
import tags from "./tags/tags";
import bookmarkReducer from "./bookmarkReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile: profileReducer,
  followUnfollow,
  resetPasswordReducer,
  ArticleReducer,
  articleCreateReducer,
  fetchArticlesReducer,
  tags,
  bookmarkReducer,
});
