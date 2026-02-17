export default function FloatingParticles() {
  const blobs = [
    {
      top: "15%", left: "5%",
      w: 480, h: 480,
      color: "rgba(37,99,235,0.07)",
      delay: "0s", duration: "12s",
    },
    {
      top: "60%", right: "5%",
      w: 560, h: 560,
      color: "rgba(6,214,160,0.05)",
      delay: "5s", duration: "15s",
    },
    {
      top: "30%", left: "50%",
      w: 320, h: 320,
      color: "rgba(124,58,237,0.05)",
      delay: "2s", duration: "10s",
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: blob.top,
            left: (blob as any).left,
            right: (blob as any).right,
            width: blob.w,
            height: blob.h,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(2px)",
            animation: `float-y ${blob.duration} ease-in-out infinite`,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
