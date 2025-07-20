import { ProfileAction, ProfileState} from "../utils/types";

export const profileReducer = (state:ProfileState, action:ProfileAction) => {
    switch (action.type) {
        case "UPDATE_PROFILE":
            return {
                ...state,
                profile: action.payload,
            };
        case "FETCH_PROFILE":
            return {
                ...state,
                profile: action.payload,
            };
        case "CLEAR_PROFILE":
            return {
                ...state,
                profile: null,
            };
        case "FETCH_PROFILE_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "FETCH_ADDRESS":
            return {
                ...state,
                address:action.payload,
            }
        default:
            return state;
    }
}