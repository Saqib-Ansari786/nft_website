import { useState } from "react";

const Table = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState("sales");

  // Filter the data based on the selected filter
  const filteredData = data.filter((item) => {
    if (selectedFilter === "sales") {
      return item.sales;
    } else if (selectedFilter === "newly-listed") {
      return item.newlyListed;
    } else if (selectedFilter === "vault-history") {
      return item.vaultHistory;
    }
    return true;
  });

  return (
    <div className="flex flex-col overflow-y-auto font-serif ">
      <h1 className="text-2xl font-bold">Recent Activity</h1>
      {/* Filter buttons */}
      <div className="flex justify-between my-4">
        <div
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedFilter === "sales"
              ? "bg-gray-900 text-white border-2 border-green-900"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setSelectedFilter("sales")}
        >
          Sales
        </div>
        <div
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedFilter === "newly-listed"
              ? "bg-gray-900 text-white border-2 border-green-900"
              : "bg-gray-800 text-white "
          }`}
          onClick={() => setSelectedFilter("newly-listed")}
        >
          Newly Listed
        </div>
        <div
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedFilter === "vault-history"
              ? "bg-gray-900 text-white border-2 border-green-900"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setSelectedFilter("vault-history")}
        >
          Vault History
        </div>
      </div>
      {/* Table */}
      <table className=" border border-green-900 table-auto font-mono ">
        <thead>
          <tr>
            <th className="px-2 md:px-6 py-2">Time</th>
            <th className="px-2 md:px-6 py-2">Item Name</th>
            <th className="px-2 md:px-6 py-2">Price</th>
            <th className="px-2 md:px-6 py-2">Seller</th>
            <th className="px-2 md:px-6 py-2">Buyer</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="px-2 md:px-6 py-2">{item.time}</td>
              <td className="px-2 md:px-6 py-2">{item.itemName}</td>
              <td className="px-2 md:px-6 py-2">{item.price}</td>
              <td className="px-2 md:px-6 py-2">{item.seller}</td>
              <td className="px-2 md:px-6 py-2">{item.buyer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
