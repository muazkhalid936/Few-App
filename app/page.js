export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:ml-9 lg:mr-9 lg:flex-row">
          <img src="/hero.jpeg" className="lg:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="lg:text-5xl  text-2xl font-bold">
              WHY TO CHOOSE FEW TECHNOLOGIES?
            </h1>
            <p className="py-6 sm:text-center">
              FEW Technology is leader in the field of CCTV camera,Attendance
              machinel,Access Control,Alexa Amazon dot,and other technologies
              and solutions supported by a long and solid experience history in
              its field and skilled workers with high skills and experience,
              with a large customer base satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
