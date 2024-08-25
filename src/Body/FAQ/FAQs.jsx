import React from "react";
import FAQsIcon from "../../assets/haveQuestion-bg.webp"

const FAQs = () => {
  return (
    <div class="faq container py-3 my-4 mb-0 pb-0 d-flex w-100">
      <div class="w-75">
        <h5 class="mb-0 my-4 mx-3">Have a question about Tyres?</h5>
        <p class="my-2 mx-3">Get an answer in 24 hours from our experts.</p>
        <div class="mx-3 w-50">
          <input
            type="text"
            class="form-control w-75 custom-shadow my-3"
            id="exampleFormControlInput1"
            placeholder="Ask or search your question"
          />
        </div>
      </div>
      <div class="w-25 py-4">
        <img src={FAQsIcon}/>
      </div>
    </div>
  );
};

export default FAQs;
