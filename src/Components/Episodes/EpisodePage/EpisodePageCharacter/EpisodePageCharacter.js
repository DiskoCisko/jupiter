import React from "react";
import { getEpisodeChatacterTC } from "../../../../Store/Character/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCharacter } from "../../../../Store/Character/characterSelector";

const EpisodePageCharacter = (props) => {
  // debugger;
  console.log(props);
  const imageCharacter = useSelector(selectCharacter);
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    // debugger;
    dispatch(getEpisodeChatacterTC(image));
  };
  useEffect(() => {
    requestImageCharacter(props.image);
  }, []);

  return (
    <>{imageCharacter ? <div>{imageCharacter[props.index]}</div> : <>loading...</>}</>
  );
};

export default EpisodePageCharacter;
