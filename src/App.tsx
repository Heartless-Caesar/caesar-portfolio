import "./App.css";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="container text-amber-50 px-4 md:px-20 lg:px-40 xl:px-80 py-10 md:py-20">
        <h4 className="text-2xl sm:text-3xl">Hello there, I'm</h4>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 sm:mt-8">
          John Victor Cesa
        </p>
        <div className="text-amber-50 text-lg sm:text-xl mt-4 sm:mt-8 w-full sm:w-max">
          I'm a software engineer that likes building, and sometimes designing,
          clean and robust systems.
        </div>
      </div>
      <div className="container text-amber-50 px-4 md:px-20 lg:px-40 xl:px-80 py-10 md:py-20">
        <div className="experiences">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Unimed Anápolis - Junior Developer
          </div>
          <ul className="mt-4 text-base sm:text-lg">
            <li>- Developing internal systems and landing pages;</li>
            <li>- Developing automated tests in Cypress for all web apps;</li>
            <li>- Creating design prototypes in Figma.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="w-fit p-2 rounded bg-blue-400">React</div>
            <div className="w-fit p-2 rounded bg-red-400">Angular</div>
            <div className="w-fit p-2 rounded bg-blue-600">Typescript</div>
            <div className="w-fit p-2 rounded bg-emerald-400">Cypress</div>
            <div className="w-fit p-2 rounded bg-purple-500">Figma</div>
            <div className="w-fit p-2 rounded bg-purple-700">.NET</div>
          </div>
        </div>
        <div className="projects mt-10">
          <div className="razo">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Razo CRM
            </h2>
            <h3 className="text-lg sm:text-xl mt-2 sm:mt-3">
              Status: In development
            </h3>
            <main className="mt-3 text-base sm:text-lg">
              <p>
                This is a CRM integrator focused on the experience of salesmen.
                Aside from integrating different CRM's, it will also have an AI
                feature that will analyze the captions in business meetings to
                determine how it went, what was good, and what could be
                improved.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="w-fit p-2 rounded bg-blue-400">React</div>
                <div className="w-fit p-2 rounded bg-blue-600">Typescript</div>
                <div className="w-fit p-2 rounded bg-emerald-400">Cypress</div>
                <div className="w-fit p-2 rounded bg-purple-500">Figma</div>
                <div className="w-fit p-2 rounded bg-green-400">
                  Java/Spring Boot
                </div>
              </div>
              <h4 className="text-2xl font-bold mt-10">
                Razo Chrome Extension
              </h4>
              <p className="mt-3">
                An extension is utilized to send the captions generated in a
                meeting to a database so that the AI model can then process the
                data to determine how the meeting went. As the captions are
                generated in realtime they are sent via websocket to the backend
                during set intervals and are written to a NoSQL database then
                sent to a SQL database so that the captions become easier to
                query and read by the AI model.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="w-fit p-2 rounded bg-yellow-400">
                  Javascript
                </div>
                <div className="w-fit p-2 rounded bg-green-600">Mongo DB</div>
                <div className="w-fit p-2 rounded bg-green-400">
                  Java/Spring Boot
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
