import React from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    Productdispatch,
  } = CartState();

  // console.log(byStock, byFastDelivery, byRating, sort, searchQuery);

  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Price - Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
            Productdispatch({
              type: "SORT_PRICE",
              payload: "LowToHigh",
            });
          }}
          checked={sort === "LowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Price - High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {
            Productdispatch({
              type: "SORT_PRICE",
              payload: "HighToLow",
            });
          }}
          checked={sort === "HighToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            Productdispatch({
              type: "FILTER_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            Productdispatch({
              type: "FILTER_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            Productdispatch({
              type: "FILTER_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        className="clear"
        variant="light"
        onClick={() =>
          Productdispatch({
            type: "CLEAR",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
