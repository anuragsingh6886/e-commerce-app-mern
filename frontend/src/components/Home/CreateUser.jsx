import React, { useState } from "react";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    picture: "",
    addresses: [
      {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        isDefault: false,
      },
    ],
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index][field] = value;
    setFormData({ ...formData, addresses: updatedAddresses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`User created successfully! ID: ${data._id}`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          picture: "",
          addresses: [
            {
              street: "",
              city: "",
              state: "",
              zipCode: "",
              isDefault: false,
            },
          ],
        }); // Reset form
      } else {
        const error = await response.json();
        setResponseMessage(`Error: ${error.error}`);
      }
    } catch (err) {
      setResponseMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Create a New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Picture URL:</label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
          />
        </div>

        <h3>Address:</h3>
        {formData.addresses.map((address, index) => (
          <div key={index}>
            <div>
              <label>Street:</label>
              <input
                type="text"
                value={address.street}
                onChange={(e) =>
                  handleAddressChange(index, "street", e.target.value)
                }
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={address.city}
                onChange={(e) =>
                  handleAddressChange(index, "city", e.target.value)
                }
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                value={address.state}
                onChange={(e) =>
                  handleAddressChange(index, "state", e.target.value)
                }
              />
            </div>
            <div>
              <label>Zip Code:</label>
              <input
                type="text"
                value={address.zipCode}
                onChange={(e) =>
                  handleAddressChange(index, "zipCode", e.target.value)
                }
              />
            </div>
            <div>
              <label>
                Default Address:
                <input
                  type="checkbox"
                  checked={address.isDefault}
                  onChange={(e) =>
                    handleAddressChange(index, "isDefault", e.target.checked)
                  }
                />
              </label>
            </div>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
};

export default CreateUser;