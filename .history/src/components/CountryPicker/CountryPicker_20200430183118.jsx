import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      setFetchedCountries(await countries);
    };

    fetchedCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <optoin value="global">Global</optoin>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
