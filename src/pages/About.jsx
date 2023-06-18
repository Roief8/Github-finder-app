function About() {
  const my_github_url = "https://github.com/Roief8/Github-finder-app"
  return (
    <div>
      <h1 className="text-5xl mb-7">GitHub Finder</h1>
      <p className="text-2xl font-light mb-2">
        Search for Github profiles, profile details.
      </p>

      <p className="text-gray-400 font-light">
        Tools used this project: Tailwind css, DaisyUI for ui. Github api, React
        Context api and Reducer for state managing, Axios for api calls.
      </p>

      <p className="mt-36 text-gray-400 text-lg">
        Made by Roi Efraim, using Brad Traversy course.
      </p>
      <h3>
        <a
          className="text-md font-semibold underline mt-1"
          href={my_github_url}
        >
          Github Link
        </a>
        <span className="text-sm text-gray-400 ms-3">
          (Version <span className="text-dark">1.0.0)</span>
        </span>
      </h3>
    </div>
  )
}

export default About
