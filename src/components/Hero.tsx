import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      {/* Hero Title */}
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      {/* Hero Video */}
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      {/* Buy Button */}
      <button>Buy</button>

      {/* Hero Description */}
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
