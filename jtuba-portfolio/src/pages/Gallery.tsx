import React from "react";

type GalleryItem = {
  title: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Study Setup",
    description: "My usual desk setup for working and studying.",
  },
  {
    title: "Planning Board",
    description: "High-level planning notes for projects and test strategy.",
  },
  {
    title: "Walk and Reset",
    description: "Short walks I take to clear my mind and reduce stress.",
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="page">
      <h2>Gallery</h2>
      <p>
        These cards represent moments from my daily life. In a full version, I
        could replace them with real photos that match these descriptions.
      </p>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
