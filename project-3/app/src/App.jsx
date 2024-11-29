import { useEffect, useState } from "react";
import styled from "styled-components";
import SeachResult from "./components/SearchResult/SeachResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [test, setTest] = useState();
  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setFilteredData(json);
        setloading(false);
      } catch (error) {
        seterror("unable to fetch data from server");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(data);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  function sortFood(value) {
    if (value === "all") {
      setFilteredData(data);
      return
    }

    const sorted = data?.filter((food) => {
      return food.type.toLowerCase().includes(value.toLowerCase())
    });
    setFilteredData(sorted)
  }
  
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="search food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => sortFood("all")}>All</Button>
          <Button onClick={() => sortFood("breakfast")}>Breakfast </Button>
          <Button onClick={() => sortFood("lunch")}>Lunch </Button>
          <Button onClick={() => sortFood("dinner")}>Dinner </Button>
        </FilterContainer>
      </Container>
      <SeachResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      width: 100%;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
`;
