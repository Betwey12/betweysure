export default function HowItWorksPage() {
  const youtubes = [
    "https://www.youtube.com/watch?v=V8FFe1PfRkg",
    "https://www.youtube.com/watch?v=G4P3hCWLcZw",
  ];

  return (
    <div className="grid grid-cols-2 gap-10">
      {youtubes.map((link) => (
        <iframe width="100%" height="345" src={link}></iframe>
      ))}
    </div>
  );
}
