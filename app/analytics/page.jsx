"use client"
import React, { useState } from "react";
import './page.css'
import FormField from '../../Components/FormField'


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

  const handleFormFieldChange =(fieldName, e) =>{
    setForm({...form, [fieldName]: e.target.value })
  }
  const handleSubmit=()=>{

  }

  return (
    <div
      class="black"
      className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
    >
      {/* {isLoading && 'Loader'} */}
      <div
        class="black2"
        className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]"
      >
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          <b>Start a campaign</b>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div class="afterform">
          <FormField
            labelName="Your Name"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={() => {}}
          />
          <FormField
            labelName="Campaign Title"
            placeholder="Ode, Write a title"
            inputType="text"
            value={form.title}
            handleChange={() => {}}
          />
        </div>

        <FormField
          labelName="Story"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={() => {}}
        />
        <div class="afterform">
          <FormField
            labelName="Goal *"
            placeholder="ETH0.58"
            inputType="text"
            value={form.target}
            handleChange={() => {}}
          />
          <FormField
            labelName="End Date"
            placeholder="End Date"
            inputType="date" 
            value={form.deadline}
            handleChange={() => {}}
          />
          <div>
            <button
            type="submit"
            title="Submit new campaign"
            class="btn">
                Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Analytics;
