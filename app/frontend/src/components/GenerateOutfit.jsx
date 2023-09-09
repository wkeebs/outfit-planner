function GenerateOufit() {
  return (
    <body>
      <div class="bg-white p-4 h-screen flex-col justify-center items-center m-8 rounded-2xl shadow-xl hover:shadow-2xl">
        <h1 class="text-3xl font-semibold mb-4 text-center">Generated Outfit</h1>
        <div className="h-5/6">
          <img
            src="placeholder.jpg"
            alt="Generated Outfit"
            class="w-full rounded-lg"
          ></img>
        </div>
        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          Generate Outfit
        </button>
      </div>
    </body>
  );
}

export default GenerateOufit;
