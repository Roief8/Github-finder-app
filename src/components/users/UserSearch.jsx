import PropTypes from "prop-types"
import { useContext, useState } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alerts/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"

function UserSearch(props) {
  const [text, setText] = useState("")

  const { dispatch, users } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  //handle text change and submit
  const handleChange = async (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === "") {
      setAlert("Please enter text.", "error")
    } else {
      dispatch({ type: "SET_LOADING" })

      const users = await searchUsers(text)

      dispatch({
        type: "GET_USERS",
        payload: users,
      })
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-4 bg-gray-200 input input-lg text-black"
                placeholder="Search..."
                value={text}
                onChange={handleChange}
              />
              {text && (
                <button
                  type="button"
                  onClick={() => setText("")}
                  className="absolute top-0 right-20 text-white mx-16 btn btn-ghost btn-lg"
                >
                  X
                </button>
              )}
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Search
              </button>
              {users.length > 1 && (
                <button
                  type="button"
                  className="btn btn-outline mt-1 glass btn-sm rounded"
                  onClick={() => dispatch({ type: "CLEAR_USERS" })}
                >
                  Clear Results
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

UserSearch.propTypes = {}

export default UserSearch
