import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const rotate = () => {
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
    if (visible) return;
    setVisible(true);
    setAnimate(false);
  };

  const close = () => {
    if (!visible) return;
    setAnimate(true);
    setTimeout(() => {
      setVisible(false);
    }, 600);
  };

  return {
    visible,
    animate,
    rotate,
    open,
    close,
  };
};
