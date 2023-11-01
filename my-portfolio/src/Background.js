import React, { useEffect } from 'react';
import { loadFull } from 'tsparticles';



const Background = () => {
  useEffect(() => {
    (async () => {
      await loadFull(window.tsParticles);

      await window.tsParticles.load("tsparticles", { preset: "stars" });
    })();
  }, []);

  return (
    <div id="tsparticles" />
  );
};

export default Background;
