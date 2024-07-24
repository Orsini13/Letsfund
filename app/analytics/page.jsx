"use client";
import React, { useState } from "react";
import "./page.css";
import FormField from "../../Components/FormField";

function Analytics() {
  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="black">
      {/* {isLoading && 'Loader'} */}

      <div className="black2">
        <h1>
          <b>Start a campaign</b>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="afterform">
          <FormField
            labelName="Your Name"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Campaign Title"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="Story"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />
        <div className="afterform">
          <FormField
            labelName="Goal *"
            placeholder="ETH0.58"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>
        <FormField
          labelName="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />
        <div>
          <button type="submit" title="Submit new campaign" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Analytics;
