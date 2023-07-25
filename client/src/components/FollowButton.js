import { IconButton } from "@material-ui/core";
import { useState } from "react";

import StarIcon from "@material-ui/icons/Star";

import { useMutation } from "@apollo/client";

import { FOLLOW_PLAYER, UNFOLLOW_PLAYER } from "../graphQL/mutations";
import { useStoreContext } from "../context";
import {
  ADD_PLAYER_TO_FAVORITES,
  REMOVE_PLAYER_FROM_FAVORITES,
} from "../context/actionTypes";

export const FollowButton = ({ player }) => {
  const [state, dispatch] = useStoreContext();
  const [isActive, setIsActive] = useState(false);

  const [followPlayer, { error, data }] = useMutation(FOLLOW_PLAYER);
  const addFavorite = (player) => {
    dispatch({
      type: ADD_PLAYER_TO_FAVORITES,
      payload: player,
    });
  };

  const [unfollowPlayer, { error: error2, data: data2 }] =
    useMutation(UNFOLLOW_PLAYER);
  const removeFavorite = (id) => {
    dispatch({
      type: REMOVE_PLAYER_FROM_FAVORITES,
      payload: id,
    });
  };

  const handleFollow = async (event) => {
    setIsActive(!isActive);
    try {
      const { data } = await followPlayer({
        variables: { profileId: event.currentTarget.id },
      });

      if (data.followPlayer) {
        addFavorite(data.followPlayer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (event) => {
    console.log("here", event.currentTarget.id);
    setIsActive(!isActive);
    try {
      const { data } = await unfollowPlayer({
        variables: { profileId: event.currentTarget.id },
      });
      if (data.unfollowPlayer) {
        removeFavorite(data.unfollowPlayer._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isActive ? (
        <IconButton
          id={player._id}
          onClick={(event) => handleUnfollow(event)}
          style={{
            color: "#FFBF00",
          }}
        >
          <StarIcon />
        </IconButton>
      ) : (
        <IconButton
          id={player._id}
          onClick={(event) => handleFollow(event)}
          style={{
            color: "",
          }}
        >
          <StarIcon
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
          />
        </IconButton>
      )}
    </>
  );
};

export default FollowButton;
