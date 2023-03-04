import { useState } from "react";
import { Disclosure } from "@headlessui/react";

const TableDropdown = ({ data }) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      {/* Show dropdown on small screens */}
      <div className="block sm:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>Show Table</Disclosure.Button>
              <Disclosure.Panel>
                <table>{/* Render table data here */}</table>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      {/* Show table on large screens */}
      <div className="hidden sm:block">
        <table>{/* Render table data here */}</table>
      </div>
    </div>
  );
};

export default TableDropdown;
