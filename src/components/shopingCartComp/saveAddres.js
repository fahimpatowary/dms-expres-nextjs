import Lodding from "@/lib/lodding";
import { useGetCustomerDetailsMutation } from "@/pages/xCallapi/authenticationApiSlices";
import { useAddaddresSaveCardMutation } from "@/pages/xCallapi/cardOrderSlice";
import { useGetAddressesQuery } from "@/pages/xCallapi/customerSlices";
import Cookies from "js-cookie";
import React, {useState } from "react";

export default function SaveAddres(props) {
  const [customerData, setCustomerData] = useState("");
  const [customer] = useGetCustomerDetailsMutation();
  const [saveAddressCard] = useAddaddresSaveCardMutation();

  const token = Cookies.get('authToken');
  const { data: addresses, isLoading, error } = useGetAddressesQuery(token);

  const selectAddress = (item) => {
    customer(token)
      .unwrap()
      .then((response) => {
        setCustomerData(response.data);
      });

    let saveAddress = {
      billing: {
        address1: {
          // 0: item,
        },
        use_for_shipping: true,
        first_name: customerData.first_name,
        last_name: customerData.last_name,
        email: customerData.email,
        address_id: item.id,
      },
      shipping: {
        address1: {
          // 0: item,
        },
        use_for_shipping: true,
        first_name: customerData.first_name,
        last_name: customerData.last_name,
        email: customerData.email,
        address_id: item.id,
      },
    };

    saveAddressCard({ saveAddress, token })
      .unwrap()
      .then((response) => {
        setCustomerData(response.data);
      });
  };

  let addresBook = "";
  if (addresses !== undefined) {
    addresBook = addresses.data.map((item) => (
      <div
        className="AddressBox addressCard col-6 col-lg-4 col-md-6"
        key={item.id}
      >
        <div className="BoxADD cardDiv">
          <input
            onClick={() => {
              selectAddress(item);
            }}
            type="radio"
            id="html"
            name="fav_language"
            value=""
          />

          <div className="mainAddress">
            <div className="AddEdit row">
              <span className="col-10">{item.address1}</span>
            </div>
            <p>Mobile: {item.phone}</p>
            <p>
              {item.country_name} {item.country} {item.city}
            </p>
            <p>{item.state}</p>
            <p> postcode: {item.postcode}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="row saveAddress">
      {!isLoading && !error && addresBook}
      {isLoading && !error && <Lodding />}
    </div>
  );
}
