import styled from 'styled-components'

export const Player = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const PlayerVideo = styled.video`
  width: 100%;
  height: 100%;
  font-family: 'object-fit:cover';
  object-fit: cover;
`

export const PlayerExit = styled.button`
  display: block;
  position: absolute;
  z-index: 2;
  background: rgba(255, 249, 217, 0.12);
  border-radius: 8px;
  top: 37px;
  right: 32px;
  border: none;
  font-size: 17px;
  line-height: 26px;
  color: #eee5b5;
  padding: 10px 20px;
  cursor: pointer;
  width: 93px;
  text-align: center;
  cursor: pointer;
`

export const PlayerControls = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 25px;
`

export const PlayerControlsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const PlayerTime = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  position: relative;
`

export const PlayerProgress = styled.progress`
  width: 100%;
  background: rgba(255, 251, 231, 0.35);
  border-radius: 1px;
  border: none;
  height: 4px;
  display: block;
`

export const PlayerToggler = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #d9cd8d;
  font-size: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const PlayerTimeValue = styled.div`
  width: 60px;
  flex-shrink: 0;
  text-align: right;
  font-size: 14px;
  color: #fff9d9;
`

export const PlayerPlay = styled.button`
  display: block;
  width: 26px;
  height: 26px;
  font-size: 0;
  border: none;
  padding: 0;
  cursor: pointer;
  background: none;
  transition: 0.2s transform;

  & img,
  & svg {
    vertical-align: top;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const PlayerName = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #b3ae98;
  margin: 0 30px;
`

export const PlayerFullScreen = styled.button`
  font-size: 0;
  display: block;
  margin-left: auto;
  margin-right: 10px;
  border: none;
  padding: 0;
  width: 27px;
  height: 27px;
  cursor: pointer;
  background: none;
  transition: 0.2s transform;

  & img,
  & svg {
    vertical-align: top;
  }

  &:hover {
    transform: scale(1.1);
  }
`
