import React, { Component } from 'react';

class MangaList extends Component {
    render() {
        const { manga } = this.props;
        return (
            <div>
                <ul>
                    {
                        manga ? (
                            manga.map((m,i) => {
                               if(m.im) {
                                   return(
                                       <li key={i}>
                                           <h1>{m.t}</h1>
                                           <img
                                                src={`https://cdn.mangaeden.com/mangasimg/${m.im}`}
                                           ></img>
                                       </li>
                                   )
                               }
                            })
                        ) : (
                            <h1>Loading...</h1>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default MangaList;