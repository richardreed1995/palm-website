"use client";

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Watch this quick overview to understand how our automation systems work
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/oq4w5gmsm6.js" async type="module"></script>
            <style>{`wistia-player[media-id='oq4w5gmsm6']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/oq4w5gmsm6/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
            <div 
              className="wistia-player" 
              data-media-id="oq4w5gmsm6" 
              data-aspect="1.7777777777777777"
              style={{ aspectRatio: '16/9' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
