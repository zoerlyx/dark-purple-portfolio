import React from 'react';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, projectTitle }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          <span>VISUAL ARTIFACTS &amp; INTERFACES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`rounded-sm overflow-hidden bg-neutral-950 border border-neutral-800 relative shadow-lg ${
                idx === 0 && images.length % 2 !== 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[16/10]'
              }`}
            >
              <img
                src={imgUrl}
                alt={`${projectTitle} artifact ${idx + 1}`}
                loading="lazy"
                data-cursor="open"
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
