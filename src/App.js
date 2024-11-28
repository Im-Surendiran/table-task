import { useEffect, useState } from "react"
import './App.css';
import Table from "./components/Table";
import Search from "./components/Search";
function App() {

  const [users, setUsers] = useState([])
  const [filterData, setFilterData] = useState([])
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        setUsers(json)
        setFilterData(json)
      })
  }, [])
  const setUsersData = (data) => {
    setFilterData(data)
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-4">
          <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                    <Search users={users} setUsersData={setUsersData} />
                    <Table users={filterData} setUsersData={setUsersData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
