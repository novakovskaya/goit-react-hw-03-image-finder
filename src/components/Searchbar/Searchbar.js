import { Component } from "react";
import { BsSearch } from "react-icons/bs";

import { toast } from "react-toastify";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { searchQuery } = this.state;
    if (searchQuery.trim() === "") {
      return toast.error("Enter something");
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: "" });
  };

  handleInput = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.Button}>
            <BsSearch style={{ width: 20, height: 20 }} />
          </button>

          <input
            className={styles.Input}
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
