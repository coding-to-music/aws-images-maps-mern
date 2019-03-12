import * as PhotoActions from "../actions/photo_actions";
import * as JourneyActions from "../actions/journey_actions";

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState= Object.assign({}, state)
  switch(action.type) {
    case PhotoActions.RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case PhotoActions.RECEIVE_PHOTOS:
      return action.photos;
    case JourneyActions.RECEIVE_JOURNEY:
      if (action.journeyPayload.photos !== undefined) {
        return action.journeyPayload.photos;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default PhotosReducer;