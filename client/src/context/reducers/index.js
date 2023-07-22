import { useReducer } from "react";

import {
  CREATE_PLAYER_LIST,
  ADD_PLAYER_TO_LIST,
  UPDATE_PLAYER_LIST,
  DELETE_PLAYER_FROM_LIST,
  CREATE_FAVORITES_LIST,
  ADD_PLAYER_TO_FAVORITES,
  REMOVE_PLAYER_FROM_FAVORITES,
  CREATE_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from "../actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_PLAYER_LIST:
      return {
        ...state,
        playerList: action.payload,
      };
    case ADD_PLAYER_TO_LIST:
      return {
        ...state,
        playerList: [...state.playerList, action.payload],
      };
    case UPDATE_PLAYER_LIST:
      return {
        ...state,
        playerList: state.playerList.map((player) => {
          if (player._id === action.payload._id) {
            return action.payload;
          } else {
            return player;
          }
        }),
      };
    case DELETE_PLAYER_FROM_LIST:
      return {
        ...state,
        playerList: state.playerList.filter(
          (player) => player._id !== action.payload
        ),
      };
    case CREATE_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: action.payload,
      };
    case ADD_PLAYER_TO_FAVORITES:
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload],
      };
    case REMOVE_PLAYER_FROM_FAVORITES:
      return {
        ...state,
        favoritesList: state.favoritesList.filter(
          (player) => player.id !== action.payload
        ),
      };
    case CREATE_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export const usePlayerReducer = (initialState) => {
  return useReducer(reducer, initialState);
};
