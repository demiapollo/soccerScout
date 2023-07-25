import { IconButton } from "@material-ui/core";
import { useState } from "react";

import StarIcon from "@material-ui/icons/Star";

import { useMutation } from "@apollo/client";

import { FOLLOW_PLAYER, UNFOLLOW_PLAYER } from "../graphQL/mutations";

export const FollowButton = ({ player }) => {
  const [isActive, setIsActive] = useState(false);

  const [followPlayer, { error, data }] = useMutation(FOLLOW_PLAYER);
  const [unfollowPlayer, { error: error2, data: data2 }] =
    useMutation(UNFOLLOW_PLAYER);

  const handleFollow = async (event) => {
    console.log("here", event.currentTarget.id);
    setIsActive(!isActive);
    try {
      const { data } = await followPlayer({
        variables: { profileId: event.currentTarget.id },
      });
      console.log(data);
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
      console.log(data);
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
          <StarIcon />
        </IconButton>
      )}
    </>
  );
};

export default FollowButton;
