import React, { Component } from 'react';
import MangaList from "./components/MangaList/MangaList";

class App extends Component {
  state = {
    manga: [],
  };

  async componentDidMount(){
    try {
      const getMangaList = await fetch("https://www.mangaeden.com/api/list/0/")
      const parsedRes = await getMangaList.json();
      this.setState({
        manga: parsedRes.manga
      })
    } catch(err) {
      return err;
    }
  } 

  render(){
    const { manga } = this.state
    console.log(manga)
    return(
      <div>
        <MangaList manga={manga} />
      </div>
    )
  }
}

export default App;
