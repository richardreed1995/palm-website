import WistiaVideo from "./wistia-video";

export default function VideoSectionIntro() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Automation in Action
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Watch how these automation flows can transform your business operations and save you valuable time every week.
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <WistiaVideo 
              mediaId="oq4w5gmsm6"
              className="w-full"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Learn how to implement these automation strategies in your own business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


