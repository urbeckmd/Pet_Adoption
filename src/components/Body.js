import React from "react";
import "./Body.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import Cat from "./Cat"

function Body() {
  return (
    <div className="body_container">
      <div className="body_leftPane">
        <div className="adoptionProcessContainer">
          <p className="adoptionProcessText">Adoption Process Info</p>
          <ArrowForwardIcon />
        </div>
        <div className="leftPane_options">
          <h1 className="leftPane_searchText">Search By: </h1>
          <ul className="adoptionOptionList">
            <li className="adoptionOption">
              <PetsIcon className="adoptionOption_icon" />
              <a href="">Adoptable Pets: Cats</a>
            </li>
            <li className="adoptionOption">
              <PetsIcon className="adoptionOption_icon" />
              <a href="">Adoptable Pets: Dogs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body_rightPane">
        <h1 className="rightPane_header">Adoptable Cats</h1>
        <div className="rightPane_tools">
          <div className="searchBarContainer">
            <SearchIcon className="searchbar_icon"/>
            <input
              type="text"
              className="searchBar"
              placeholder="Search for Cats"
            />
          </div>
          <button className="filter_button">Filter</button>
        </div>
        <div className="cat_picture_grid">
            <Cat className="cat_card" name="Rico" image="https://www.shelterluv.com/sites/default/files/animal_pics/14152/2022/11/25/15/20221125152901.png" />
            <Cat className="cat_card" name="Oliver" image="https://www.shelterluv.com/sites/default/files/animal_pics/14152/2022/12/04/16/20221204160740.png" />
            <Cat className="cat_card" name="Simba" image="https://www.shelterluv.com/sites/default/files/animal_pics/14152/2022/11/28/11/20221128114755.png" />

        </div>
      </div>
    </div>
  );
}

export default Body;
