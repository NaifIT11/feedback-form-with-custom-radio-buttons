"use client"


import { FormEvent, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Annoyed, Frown, Laugh, Meh, Smile } from "lucide-react";

export default function Feedback() {
  const [selectedValue, setSelectedValue] = useState("");

  const radioItemsValues = [
    {
      value: "Satisfied",
      SVG: <Laugh className="w-8 h-8 text-blue-300" />,
    },
    {
      value: "Bad",
      SVG: <Frown className="w-8 h-8 text-blue-300" />,
    },
    {
      value: "Okay",
      SVG: <Meh className="w-8 h-8 text-blue-300" />,
    },
    {
      value: "Good",
      SVG: <Smile className="w-8 h-8 text-blue-300" />,
    },
    {
      value: "Annoyed",
      SVG: <Annoyed className="w-8 h-8 text-blue-300" />,
    },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log({
        feedback: selectedValue
    })
  }
  return (
    <div className="w-3/4 main-shadow md:w-1/2 rounded-sm p-6 bg-white-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="space-y-4">
        <h1 className="text-xl text-blue-900 font-semibold">Give Feedback</h1>
        <p className="text-base text-blue-900 font-medium">
          What do you think of the issue search experience within Jira projects?
        </p>
      </div>
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <RadioGroup 
          value={selectedValue} 
          onValueChange={setSelectedValue} 
          className="flex gap-2"
        >
          {radioItemsValues.map((ri) => (
            <RadioGroupItem 
              key={ri.value}
              value={ri.value}
              id={ri.value}
              data-checked={selectedValue === ri.value}
              className="w-full"
            >
              <div data-checked={selectedValue === ri.value} className="flex data-[checked=true]:border-blue-600 flex-col items-center gap-2 p-2 rounded bg-white border border-blue-300">
                {ri.SVG}
                <div role="heading" aria-level="5" className="text-sm text-blue-300 data-[checked=true]:text-blue-600" data-checked={selectedValue === ri.value}>
                  {ri.value}
                </div>
              </div>
            </RadioGroupItem>
          ))}
        </RadioGroup>
        <div className="self-end">
            <button type="submit" className="px-4 py-2 rounded font-medium text-white bg-blue-900">submit</button>
        </div>
      </form>
    </div>
  );
}
