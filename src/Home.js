import React, { useState } from "react";
import Card from "./Card";
import { useHistory } from "react-router-dom";
import { Contactlist } from "./Contactlist";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [value, setValue] = useState(Contactlist);

  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/");
  }
  function ncard(val) {
    return <Card img={val.img} Name={val.Name} />;
  }

  function fetchMoreData() {
    setTimeout(() => {
      setValue(value.concat(value));
    }, 1000);
  }

  return (
    <div className="homecontainer">
      <div>
        <button
          type="button"
          class="btn btn-primary btnposition"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <InfiniteScroll
        dataLength={value.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <div className="cards">{value.map(ncard)}</div>
      </InfiniteScroll>
    </div>
  );
}
