import React, { useState, useEffect } from "react";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import { mock } from "./mock";
import { serverClient } from "../../api";
import IncomeItem from "../../components/income/IncomeItem";
import DynamicRefreshView from "../../components/common/DynamicRefreshView";

const Income = ({ navigation, spinnerStore, authStore }) => {
  const [data, setData] = useState([]);

  const fetchIncome = async () => {
    const { data } = await serverClient.get(
      `/summary/${authStore.restaurant.id}`
    );
    setData(data.data);
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <DynamicRefreshView onRefreshAction={fetchIncome}>
      {data.map((d, i) => (
        <IncomeItem key={i} first={i === 0} navigation={navigation} data={d} />
      ))}
    </DynamicRefreshView>
  );
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Income);
