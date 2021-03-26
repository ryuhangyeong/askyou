import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const comeback = () => {
    if (visible) return;
    setVisible(true);
    setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setVisible(false);
        setAnimate(false);
      }, 600);
    }, 2000);
  };

  const open = () => {
    setVisible(true);
    setAnimate(false);
  };

  const close = () => {
    if (visible && animate) return;
    setAnimate(true);
    setTimeout(() => {
      setVisible(false);
      setAnimate(false);
    }, 600);
  };

  return {
    visible,
    animate,
    comeback,
    open,
    close,
  };
};
