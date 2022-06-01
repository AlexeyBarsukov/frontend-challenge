import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import '../App.css'
import { ReactComponent as LikeNotActive } from "../assets/likeNotActive.svg"

function Cats() {
  const [data, setData] = useState([])
  const [arr, setArr] = useState(() => JSON.parse(localStorage.getItem("catsURL")) || [] || null);


  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  useEffect(() => {
    localStorage.setItem("catsURL", JSON.stringify(arr))
  }, [arr])

  const addLike = (e) => {
    let target = e.target.parentElement.previousElementSibling.currentSrc
    setArr((prev) => [...prev, { url: target, id: Date.now(), active: active }]);
    let active = e.currentTarget.classList.toggle("active");
  }




  return (
    <>
      <h4>Все котики</h4>

      <div className="Cats">
        {
          data.map((card) => (
            <div key={card?.id} className="Div">
              <img className="CatImage" src={card?.image?.url} />
              <div className="h2">
                <LikeNotActive onClick={addLike} />
              </div>
            </div >))
        }
      </div>
    </>
  )
};

export default Cats;