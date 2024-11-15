import LongCards from "../longCards/LongCards";
import salesIcon from "../../../assets/salesIcon.svg";
import revenueIcon from "../../../assets/revenueIcon.svg";
import profitIcon from "../../../assets/profitIcon.svg";
import costIcon from "../../../assets/costIcon.svg";
import purchaseIcon from "../../../assets/purchaseIcon.svg";
import cancelIcon from "../../../assets/cancelIcon.svg";
import EnhancedTable from "../table/Table";

import { lastOrdersColumns } from "../../../data/data";
import { selectLastOrders } from "../../../store/DataSlice";
import { useSelector } from "react-redux";

const Sales = () => {
  const orders = useSelector(selectLastOrders);
  const salesOverview = [
    {
      price: "$832",
      value: "Sales",
      src: salesIcon,
      backgroundColor: "rgba(98, 159, 244, 0.3)",
    },
    {
      price: "$18,300",
      value: "Revenue",
      src: revenueIcon,
      backgroundColor: "rgba(129, 122, 243, 0.3)",
    },
    {
      price: "$868",
      value: "Profit",
      src: profitIcon,
      backgroundColor: "rgba(219, 163, 98, 0.3)",
    },
    {
      price: "$17,432",
      value: "Cost",
      src: costIcon,
      backgroundColor: "rgba(88, 211, 101, 0.3)",
    },
  ];
  const productOverview = [
    {
      price: "82",
      value: "Purchase",
      src: purchaseIcon,
      backgroundColor: "rgba(98, 159, 244, 0.3)",
    },
    {
      price: "$13,573",
      value: "Cost",
      src: costIcon,
      backgroundColor: "rgba(88, 211, 101, 0.3)",
    },
    {
      price: "5",
      value: "Cancel",
      src: cancelIcon,
      backgroundColor: "rgba(129, 122, 243, 0.3)",
    },
    {
      price: "$17,432",
      value: "Return",
      src: profitIcon,
      backgroundColor: "rgba(219, 163, 98, 0.3)",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <LongCards salesTitle="Sales Overview" salesOverview={salesOverview} />
      <LongCards
        productTitle="Purchase Overview"
        productOverview={productOverview}
      />

      <EnhancedTable
        tableData={orders}
        columns={lastOrdersColumns}
        width="90%"
      />
    </div>
  );
};
export default Sales;
