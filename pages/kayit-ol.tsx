export default function Register() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Kayıt Ol</h2>
          <p className="text-gray-500 mb-6">
            Bu form çalışmıyor. Sadece tasarım için.
          </p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="*****"
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
