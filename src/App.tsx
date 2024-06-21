import Content from "./components/Body/Content"
import Logo from "./components/Body/Logo"


function App() {

  return (
    <>
      <div className='container'>
        <div className='sidebar'>
          <Logo/>
        </div>
        <Content/>
      </div>
    </>
  )
}

export default App

