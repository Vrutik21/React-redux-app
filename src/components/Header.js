import React from "react";
import { Badge, Container, FormControl, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css";
import { CDropdown, CDropdownToggle, CDropdownMenu } from "@coreui/react";

const Header = () => {
  const { state, dispatch, Productdispatch } = CartState();
  const { cart } = state;

  return (
    <Navbar
      className="flex-sm-column"
      sticky="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="m-auto w-50">
          <FormControl
            placeholder="Search a Product"
            onChange={(e) => {
              Productdispatch({
                type: "SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge bg="inherit" style={{ fontSize: 15 }}>
              {cart.length}
            </Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartItem" key={prod.id}>
                    <img src={prod.image} className="cartImg" alt={prod.name} />
                    <div className="cartDetails">
                      <span>{prod.name}</span>
                      <span>$ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="25px"
                      color="#b30000"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE",
                          payload: prod,
                        });
                      }}
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown> */}
        <CDropdown alignment="end" className="cart">
          <CDropdownToggle color="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge bg="inherit" style={{ fontSize: 15 }}>
              {cart.length}
            </Badge>
          </CDropdownToggle>
          <CDropdownMenu>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartItem" key={prod.id}>
                    <img src={prod.image} className="cartImg" alt={prod.name} />
                    <div className="cartDetails">
                      <span>{prod.name}</span>
                      <span>$ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="25px"
                      color="#b30000"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE",
                          payload: prod,
                        });
                      }}
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </CDropdownMenu>
        </CDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
