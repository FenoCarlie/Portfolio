function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <h1 className="text-3xl text-white mb-2">About</h1>
        <div className="flex flex-row bg-yellowClaire">
          <section className="w-auto">section 1</section>
          <section className="w-auto">section 2</section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
