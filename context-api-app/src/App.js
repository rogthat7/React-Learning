import './App.css';
import UserInfoContext from './context/UserInfoContext';
import ThemeProvider from './context/ThemeProvider';
import BlogPage from './components/BlogPage';
import ContentComponent from './components/ContentComponent'; // Assuming you have a ContentComponent that uses ThemeContext

function App() {
  const userinfo = {
    username: "Admin",
    isAdmin: true,
  };
  return (
    <div className="App">
      <UserInfoContext.Provider value={userinfo}>
        <BlogPage />
        {/* You can add more components here that will consume the UserInfoContext */}
        {/* For example, you can add a Post component that uses the context */}
        {/* <Post /> */}
        {/* <Comment /> */}
        {/* Uncomment the above lines to see how the context works with Post and Comment components */}
      </UserInfoContext.Provider>
      <ThemeProvider>
        <ContentComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
