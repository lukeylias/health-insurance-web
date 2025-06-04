document.addEventListener("DOMContentLoaded", function () {
  const stepPages = document.querySelectorAll(".step-page");
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(idx) {
    stepPages.forEach((page, i) => {
      page.classList.toggle("active", i === idx);
    });
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === idx);
    });
  }

  // Step 1: Residency form
  const residencyForm = document.getElementById("residency-form");
  if (residencyForm) {
    residencyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      currentStep = 1;
      showStep(currentStep);
    });
  }

  // Step 2: Help form
  const helpForm = document.getElementById("help-form");
  if (helpForm) {
    helpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const selected = helpForm.querySelector('input[name="help"]:checked');
      if (selected && selected.value === "personalised") {
        currentStep = 2;
        showStep(currentStep);
      } else {
        alert("Show all options flow!");
      }
    });

    // Back button for step 2
    const backBtn = helpForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        currentStep = 0;
        showStep(currentStep);
      });
    }
  }

  // Step 3: About form
  const aboutForm = document.getElementById("about-form");
  if (aboutForm) {
    aboutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      currentStep = 3;
      showStep(currentStep);
    });

    // Back button for step 3
    const backBtn = aboutForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        currentStep = 1;
        showStep(currentStep);
      });
    }
  }

  // Step 4: Treatments form
  const treatmentsForm = document.getElementById("treatments-form");
  if (treatmentsForm) {
    treatmentsForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Treatments submitted!");
    });

    // Back button for step 4
    const backBtn = treatmentsForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        currentStep = 2;
        showStep(currentStep);
      });
    }
  }

  showStep(currentStep);
});
