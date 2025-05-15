export default function HowItWorksPage() {
  const youtubes = [
    "https://www.youtube.com/embed/V8FFe1PfRkg?si=64Q9OPOXUB-QRiE9",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {youtubes.map((link) => (
        <iframe
          key={link}
          width="100%"
          height="345"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ))}
    </div>
  );
}
