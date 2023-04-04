import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {

  const navigation = useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    const keyWord = e.currentTarget.keyword.value.trim();

    if(keyWord.length < 4 )
      {
        alert('You must type at least 4 characters')
      }
      else{
        e.currentTarget.keyword.value = "";
        navigation(`/results?key-word=${keyWord}`)
      }
  }

  return (

 <nav className="navbar d-flex justify-content-end navbar-light bg-primary navbar-expand-xl p-0">
  <form className="form-inline d-flex p-3" onSubmit={submitHandler}>
    <input className="form-control mr-sm-2" name="keyword" type="search" placeholder="Search your film" aria-label="Search" />
    <button type="submit" class="btn btn-outline-light ms-1">Search</button>
  </form>
</nav>

  );
}

export default Nav;
