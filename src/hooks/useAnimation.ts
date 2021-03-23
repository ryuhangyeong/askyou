import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const tick = () => {
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

  return {
    visible,
    animate,
    tick,
  };
};
