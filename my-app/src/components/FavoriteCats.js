import { useState } from "react";
import '../App.css'

function FavoriteCats() {
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('catsURL')))
  return (
    <>
      <h4>Любимые кошки</h4>
      <div className="Cats">
        {
          favorite.map((url) => (
            <div key={url.id} className="Div" >
              <img className="CatImage" src={url.url} alt="cats" />
            </div>))
        }
      </div>
    </>
  )
};

export default FavoriteCats;